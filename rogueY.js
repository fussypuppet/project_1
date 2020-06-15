document.addEventListener('DOMContentLoaded', function(){
    const roomHeight = 6;
    const roomWidth = 5;
    const roomCount = 6;
    const GAME_TILES = [];
    const GAME_TILES_FOR_PATHS = {};
    const MONSTERS = [];
    const coworkerNames = [
        {name: "Robin", image: "./thisR.png"}, 
        {name: "Sal", image: "./thisS.png"}, 
        {name: "Mel", image: "./thisM.png"}, 
        {name: "Sam", image: "./thisS.png"}, 
        {name: "Dana", image:"./thisD.png"}, 
        {name: "Harley", image: "./thisH.png"}
    ];
    const possibleDirections = ["up", "right", "down", "left"];

    document.onkeydown = function(e){
        console.log("keypress logged.  E:", e);
        switch (e.key){
            case "ArrowUp":
                playerCharacter.move("up");
                break;
            case "ArrowRight":
                playerCharacter.move("right");
                break;
            case "ArrowDown":
                playerCharacter.move("down");
                break;
            case "ArrowLeft":
                playerCharacter.move("left");
        }
    }

    function Tile(roomID, squareID, nextTileID, roomHeight, roomWidth) {
        this.room = roomID;  //the id of the room on the game board // this can basically be an array index from 0 to <room count>
        this.square = squareID; //the id of the tile within the room's array of tiles // this should be an array index from 0 to <room size>
        this._id = nextTileID; //unique identifier for this tile among all on the board, used for referencing which are adjacent // is index from 0 to <board size>
        this.up = ((squareID >= roomWidth) ? (nextTileID - roomWidth) : (null)); // if the tile has a northern neighbor, return its ID
        this.down = ((squareID < ((roomHeight -1) * roomWidth )) ? (nextTileID + roomWidth) : (null));
        this.right = (((squareID + 1) % roomWidth === 0) ? (null) : (nextTileID + 1));
        this.left = ((squareID % roomWidth === 0) ? (null) : (nextTileID - 1));
        this.contains = ""  //may be a monster, a useful item, or the player character
        let newHTMLTile = document.createElement("div");
        newHTMLTile.classList.add("square");
        newHTMLTile.setAttribute("id", `square${this._id}`);
        this.element = newHTMLTile;
    }

    function Character(power, hitPoints, armor, name, type, image_location){
        this.name = name;
        this.type = type;
        this.power = power;
        this.hitPoints = hitPoints;
        this.armor = armor;
        this.inventory = []; //a list of all useful items the character has picked up
        this.location = null;
        this.focus = null;
        this.tapped = false;
        this.nextMoves = [];
        let icon = document.createElement("img");
        icon.classList.add(name);
        icon.setAttribute("alt", `${name} image`);
        icon.setAttribute("src", image_location);
        this.image = icon;
        this.setLocation = function(location){ // make sure character is nowhere else, and place them in the indicated location
            //console.log("setting location to " + location);
            for (tile of GAME_TILES){
                if ((tile.contains === this) && (tile._id != location)){  // remove the character from the old tile
                    //console.log("I should never fire actually yes I should");
                    tile.contains = "";
                    tile.element.innerHTML = "";
                }
                if (tile._id === location){
                    //console.log("in middle of setLocation.  Tile:", tile, location, this);
                    tile.contains = this;
                    tile.element.appendChild(this.image);
                    this.location = tile._id;
                    //console.log("at end of setLocation.  Tile:", tile, location, this); 
                }
            }
        }
        this.move = function(direction){
            if (GAME_TILES[this.location][direction]){
                //console.log("game tiles this location direction", GAME_TILES[GAME_TILES[this.location][direction]]);
                if (GAME_TILES[GAME_TILES[this.location][direction]].contains){ // if there is something to the tile to the north of the tile that the player is in
                    direction = resolveEncounter(this, direction);
                }
                if (this.name === "player_character"){
                    takeMonsterTurn(this);
                }
                if ((this.name === "player_character") && (direction)){
                    if ((GAME_TILES[this.location].room != GAME_TILES[GAME_TILES[this.location][direction]].room)){  // if a player is entering a new room
                        //the last part of that horrible if statement means "the id of the room of the tile to the north/south/east/west of the tile that the player character is moving from"
                        console.log("old and new room IDs", GAME_TILES[this.location].room, GAME_TILES[this.location][direction]);
                        newRoomEntry(this, GAME_TILES[GAME_TILES[this.location][direction]].room);
                    }
                }
                switch (direction) {
                    case ("up"):
                        this.setLocation(GAME_TILES[this.location].up);
                        break;
                    case ("right"):
                        this.setLocation(GAME_TILES[this.location].right);
                        break;
                    case ("down"):
                        this.setLocation(GAME_TILES[this.location].down);
                        break;
                    case ("left"):
                        //console.log("in left move function", this.location, direction);
                        this.setLocation(GAME_TILES[this.location].left);
                        break;
                    default:
                        console.log("path is blocked");
                }
            } else {
                //console.log("Cannot move that direction");
            }
            //console.log("Character moved.  Current position: " + this.location);
        }
    }
    
    function takeMonsterTurn(player){
        for (monster of MONSTERS){
            if (monster.focus){
                let lotsOfPaths = findPath(monster.location, player.location);
                //console.log("lotsOfPaths", lotsOfPaths);
                monster.nextMoves = lotsOfPaths[player.location].slice(2); //the slice(2) at the end is an artifact of the paths algorithm - can remove it in later refactoring    
                console.log("monster", monster);
                switch (monster.nextMoves.shift()){
                    case GAME_TILES[monster.location].up:
                        if (player.location === GAME_TILES[monster.location].up){
                            logNewMessage(`${monster.name} caught you!  Better luck next time.`);
                            document.getElementById("log_player1").style.background = "red";
                        }
                        monster.move("up");
                        break;
                    case GAME_TILES[monster.location].right:
                        if (player.location === GAME_TILES[monster.location].right){
                            logNewMessage(`${monster.name} caught you!  Better luck next time.`);
                            document.getElementById("log_player1").style.background = "red";
                        }
                        monster.move("right");
                        break;
                    case GAME_TILES[monster.location].down:
                        if (player.location === GAME_TILES[monster.location].down){
                            logNewMessag(`${monster.name} caught you!  Better luck next time.`);
                            document.getElementById("log_player1").style.background = "red";
                        }
                        monster.move("down");
                        break;
                    case GAME_TILES[monster.location].left:
                        if (player.location === GAME_TILES[monster.location].left){
                            logNewMessage(`${monster.name} caught you!  Better luck next time.`);
                            document.getElementById("log_player1").style.background = "red";
                        }
                        monster.move("left");
                        break;
                    default:
                        console.log("monster move failed");
                }
            }
        }
    }

    function resolveEncounter(player, direction){  // resolve encounter and return unchanged direction if movement is ok, or null if movement should be canceled
        let foundObject = GAME_TILES[GAME_TILES[player.location][direction]].contains;
        logNewMessage("You have encountered a " + foundObject.name);
        switch (foundObject.name) {
            case "key":
                let gameOver = false;
                for (thisObject of player.inventory){
                        console.log("thisObject", thisObject);
                        console.log("player inventory", player.inventory);
                        if (thisObject.name === "key"){
                            gameOver = true;
                        }
                }
                console.log("adding foundObject to inventory", foundObject);
                player.inventory.push(foundObject);
                console.log("object better be in inventory now", player.inventory);
                foundObject.setLocation(null);
                let newInventoryItem = document.createElement("li");
                newInventoryItem.innerText = "a key";
                document.getElementById("inventory_player1").appendChild(newInventoryItem);
                if (gameOver === true){
                    logNewMessage("Congratulations! You won!");
                    let cheer = new Audio("./1_person_cheering-Jett_Rifkin-1851518140.mp3")
                    cheer.play();
                }
                return direction;
        }
    }

    function logNewMessage(thisMessage){
        let newMessage = document.createElement('li');
        newMessage.innerText = thisMessage;
        document.getElementById("log_player1").appendChild(newMessage);
    }

    function findPath(startPoint, endPoint){
        // This function uses a simplified Dijkstra's Shortest Path algorithm to find a shortest path from the monster to the player character
        // It can be simpler than normal because the distance between all adjacent cells is the same
        // The algorithm works by first finding all cells that are adjacent to the starting point (distance = 1).  The path to them is obvious.
        // The algorithm then registers those distance=1 cells onto a first-on-first-off queue for cells that are on the frontier of exploration.
        // It then plucks those cells off the queue one by one (starting with ones that are the closest to the origin point), looking for unexplored cells adjacent to them.
        // registering paths to them, and adding those to the end of the queue.
        // So for instance, all unexplored cells adjacent to a distance=1 cell will be distance=2 cells, and the path to them will be via the distance=1 cell.
        // Those distance=2 cells are then added to the frontier queue, and will be evaluated for their own neighbors after all the distance=1 cells have been looked at.
        // The algorithm ends up finding not only a shortest path to the target cell, but also paths to every cell that is closer than the target,
        // which sounds inefficient, but really isn't, since the algorithm ensures that the While loop will run at most a number of times equal to the number of cells.
        // THIS VERSION COULD BE IMPROVED BY MODIFYING IT TO FIND A RANDOM SHORTEST PATH.  Right now the path monsters will take while pursuing players is predictable.
        // IT ALSO RETURNS PATH ARRAYS WHERE THE FIRST TWO ENTRIES ARE ALWAYS THE ORIGIN CELL.  Interesting entries only start at index [2].
        console.log(`Finding path from ${startPoint} to ${endPoint}`);
        let shortestPaths = {};
        let pathFound = false;
        shortestPaths[startPoint] = [startPoint];
        let edgeVertexList = []; //list of cells on the edge of exploration;
        edgeVertexList[0] = startPoint;  
        while (pathFound === false){
            currentFocus = GAME_TILES[edgeVertexList.shift()];  // when all adjacent cells have been evaluated, move to the next cell on the queue.
            for (direction of possibleDirections){          //look at all cells adjacent to this one
                if (currentFocus[direction] && !shortestPaths[currentFocus[direction]]){      // if the adjacent cell exists & does not currently have a path registered
                    shortestPaths[currentFocus[direction]] = shortestPaths[currentFocus._id].concat(currentFocus._id); // register the shortest path to it
                    if (currentFocus[direction] === endPoint){ // if we just registered a path to the target point, break out of both loops and return result
                        pathFound = true;
                        break;
                    }
                    edgeVertexList.push(currentFocus[direction]);     // add it as an edge focus\
                }
            }
        }
        return shortestPaths;
    }


    function newRoomEntry(player, newRoomIndex){
        console.log("newRoomIndex", newRoomIndex, `#room${newRoomIndex}`);
        console.log(document.getElementById(`room${newRoomIndex}`));
        document.getElementById(`room${newRoomIndex}`).style.visibility = "visible";
        for (thisTile of GAME_TILES){
            //console.log('this tile', thisTile);
            if (thisTile.contains && (thisTile.contains.type === "monster")){
                //console.log("tile.room and player.location", thisTile.room, GAME_TILES[player.location].room);
                if (thisTile.room  === newRoomIndex){
                    //console.log("Checking for monsters to activate.  This tile looks interesting", thisTile);
                    let activatedMonster = thisTile.contains;
                    logNewMessage(`${activatedMonster.name} is in the room!  They would like a word with you.`);
                    activatedMonster.focus = player;
                }
            }
        }
    }

    //generate game board: nested for loop:  for each room, go through tile by tile.  Give the tiles their suite of IDs
    const createBoard = function(){
        let nextTileID = 0;
        for (let i=0; i<roomCount; i++){ // i is also the id of the current room
            let newRoom = document.createElement("div");
            newRoom.classList.add("room");
            newRoom.setAttribute("id", `room${i}`);
            for (let j=0; j<(roomHeight * roomWidth); j++){ // j is also the squareID of the current tile
                let thisTile = new Tile(i, j, nextTileID, roomHeight, roomWidth);
                GAME_TILES.push(thisTile);
                GAME_TILES_FOR_PATHS[thisTile._id] = [];
                for (thisDirection of ["up", "right", "down", "left"]){// construct game tile format that feeds into shortest path algorithm
                    //console.log("this direction, this tile", thisDirection, thisTile);
                    if (thisTile[thisDirection] != null){
                        GAME_TILES_FOR_PATHS[thisTile._id].push([thisTile[thisDirection], 1]);
                    }
                }
                newRoom.appendChild(thisTile.element);
                nextTileID++;
            }
            document.querySelector('.board').appendChild(newRoom);
        }
        createDoor(27, 62);
        createDoor(58, 93);
        createDoor(69, 95);
        createDoor(118, 153);
        createDoor(124, 150);
    }

    const createDoor = function(tile1ID, tile2ID){
        // doorway orientation can be determined from the difference of the two tile positions
        // if it equals roomWidth-1: tile1 on left, tile2 on right
        // if -(roomWidth-1): tile1 on right, tile2 on left
        // if (roomHeight*roomWidth - roomWidth): tile1 on top, tile2 below
        // if -(roomHeight*roomWidth - roomWidth): tile2 on top, tile1 below
        switch (GAME_TILES[tile1ID].square - GAME_TILES[tile2ID].square) {  
            case (roomWidth-1):
                GAME_TILES[tile1ID].right = tile2ID;
                GAME_TILES[tile2ID].left = tile1ID;
                GAME_TILES[tile1ID].element.style.borderRight = "3px solid #C19A6B";
                GAME_TILES[tile2ID].element.style.borderLeft = "3px solid #C19A6B";
                break;
            case -(roomWidth-1):
                GAME_TILES[tile2ID].right = tile1ID;
                GAME_TILES[tile1ID].left = tile2ID;
                GAME_TILES[tile2ID].element.style.borderRight = "3px solid #C19A6B";
                GAME_TILES[tile1ID].element.style.borderLeft = "3px solid #C19A6B";
                break;
            case (roomHeight * roomWidth - roomWidth):
                GAME_TILES[tile1ID].down = tile2ID;
                GAME_TILES[tile2ID].up = tile1ID;
                GAME_TILES[tile1ID].element.style.borderBottom = "3px solid #C19A6B";
                GAME_TILES[tile2ID].element.style.borderTop = "3px solid #C19A6B";
                break;
            case -(roomHeight * roomWidth - roomWidth):
                GAME_TILES[tile2ID].right = tile2ID;
                GAME_TILES[tile1ID].left = tile1ID;
                GAME_TILES[tile2ID].element.style.borderBottom = "3px solid #C19A6B";
                GAME_TILES[tile1ID].element.style.borderTop = "3px solid #C19A6B";
            
        }
    }
    

    createBoard();
    const playerCharacter = new Character(1, 15, 0, "player_character", "player", "./player.png");
    const key1 = new Character(0, 1, 0 , "key", "object", "./key.png");
    const key2 = new Character(0, 1, 0 , "key", "object", "./key.png");
    for (let i=0; i<3; i++){
        let newMonsterInfo = coworkerNames.splice(Math.floor(Math.random()*coworkerNames.length), 1)[0];
        console.log("newMonsterInfo", newMonsterInfo);
        let newMonster = new Character(1, 10, 0, newMonsterInfo.name, "monster", newMonsterInfo.image);
        newMonster.setLocation(Math.floor(Math.random()*GAME_TILES.length));
        MONSTERS.push(newMonster);
    }
    playerCharacter.setLocation(0);
    newRoomEntry(playerCharacter, GAME_TILES[0].room);
    key1.setLocation(Math.floor(Math.random()*GAME_TILES.length));
    key2.setLocation(Math.floor(Math.random()*GAME_TILES.length));
    //console.log('key1', key1.location);
    //console.log('key2', key2.location);
    //console.log("Tile List", GAME_TILES);
    //console.log("Player character", playerCharacter);
    //console.log("forPaths", GAME_TILES_FOR_PATHS);

})