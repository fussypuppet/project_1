document.addEventListener('DOMContentLoaded', function(){
    // global variables
    const roomHeight = 6;
    const roomWidth = 5;
    const roomCount = 6;
    const GAME_TILES = [];
    const GAME_TILES_FOR_PATHS = {};
    const CHARACTERS = [];
    const coworkerNames = [
        {name: "Robin", image: "./images/thisR.png"}, 
        {name: "Mel", image: "./images/thisM.png"}, 
        {name: "Sam", image: "./images/thisS.png"}, 
        {name: "Dana", image:"./images/thisD.png"}, 
        {name: "Harley", image: "./images/thisH.png"}
    ];
    const possibleDirections = ["up", "right", "down", "left"];
    const restartButton = document.getElementById("restart");
    let gameActive = true;


    //event listeners for arrow key keypresses & reload button
    document.onkeydown = function(e){
        if (gameActive){
            //console.log("keypress logged.  event:", e);
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
    }
    restartButton.addEventListener("click", function(){location.reload();});


    // object constructors
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

    function Character(name, messageString, type, imageLocation){
        this.name = name;
        this.messageString = messageString;
        this.type = type;
        this.inventory = []; //a list of all useful items the character has picked up
        this.location = null;
        this.focus = null; //the target this character is pursuing, if this is a co-worker
        this.tapped = false;
        this.nextMoves = [];  // fastest path to target, if this is a co-worker
        let icon = document.createElement("img");
        icon.classList.add(name);
        icon.setAttribute("alt", `${name} image`);
        icon.setAttribute("src", imageLocation);
        this.image = icon;
        CHARACTERS.push(this);
        this.setLocation = function(location){ // Used in character moves and game initialization.  Make sure character is nowhere else, and place them in the indicated location
            for (tile of GAME_TILES){
                if ((tile.contains === this) && (tile._id != location)){  // remove the character from the old tile, if any
                    tile.contains = "";
                    tile.element.innerHTML = "";
                }
                if (tile._id === location){ // put character in new tile
                    tile.contains = this;
                    tile.element.appendChild(this.image);
                    this.location = tile._id;
                }
            }
        }
        this.move = function(direction){ // validate move and call any move-triggered functions/events, then call setLocation to actually stick the character in the new spot
            if (GAME_TILES[this.location][direction]){ // make sure that there is a tile in the direction the character is moving (i.e. it's not a wall)
                if (this.type === "player"){ // if the thing performing a move is a character, then that signals that a turn is passing, and monsters should take a turn too, before the character performs theirs.
                    // but first, make sure that a bicycle isn't giving the player a free move.
                    let skipMonsterTurn = false;
                    for (item of this.inventory){
                        if (item.name === "bicycle"){
                            if (item.tapped === true){
                                item.tapped = false;
                            } else {
                                item.tapped = true;
                                skipMonsterTurn = true;
                            }
                        }
                    }
                    if (!skipMonsterTurn){
                        takeMonsterTurn(this);
                    }
                }
                if (GAME_TILES[GAME_TILES[this.location][direction]].contains){ // if there is something occupying the destination tile, resolve that encounter
                    let encounterResult = resolveEncounter(this, direction);
                    if (encounterResult === "cancel move"){
                        return;
                    }
                }
                if (this.type === "player"){
                    if ((GAME_TILES[this.location].room != GAME_TILES[GAME_TILES[this.location][direction]].room)){  // if a player is entering a new room, trigger newRoomEntry event
                        //the last part of the previous line's IF statement means "the id of the room of the tile to the north/south/east/west of the tile that the player character is moving from"
                        newRoomEntry(this, GAME_TILES[GAME_TILES[this.location][direction]].room);
                    }
                }
                if ((gameActive === true) || (this.type === "monster")){
                    this.setLocation(GAME_TILES[this.location][direction]); // if the game hasn't ended, move character the correct direction from its current tile.
                }
            }
        }
    }
    

    // game functions
    function takeMonsterTurn(player){
        for (monster of CHARACTERS){
            if (monster.focus){ // only monster-type characters ever have a focus value
                monster.nextMoves = findPath(monster.location, player.location);  // find the shortest path to the player, and move accordingly.
                switch (monster.nextMoves.shift()){
                    case GAME_TILES[monster.location].up:
                        monster.move("up");
                        break;
                    case GAME_TILES[monster.location].right:
                        monster.move("right");
                        break;
                    case GAME_TILES[monster.location].down:
                        monster.move("down");
                        break;
                    case GAME_TILES[monster.location].left:
                        monster.move("left");
                        break;
                    default:
                        console.log("monster move failed");
                }
            }
        }
    }

    function resolveEncounter(movingCharacter, direction){  // resolve encounter and return unchanged direction if movement is ok, or null if movement should be canceled
        /* possible types of encounter:  
            Player -> item (pick it up!), 
            Player -> monster (lose game), 
            Monster -> Player (lose game), 
            Monster -> NPC (cancel move for now and figure something out as a bonus later).*/
        let foundObject = GAME_TILES[GAME_TILES[movingCharacter.location][direction]].contains;
        if (movingCharacter.type === "player") {
            if (foundObject.type === "object") {  // if a player encounters an object, pick it up and check for win
                logNewMessage("You have found " + foundObject.messageString);
                switch (foundObject.name) {
                    case "key":
                        let gameOver = false;
                        for (thisObject of movingCharacter.inventory){ // if this is the 2nd key the player has found, end the game in a win
                                if (thisObject.name === "key"){
                                    gameOver = true;
                                }
                        }
                        addToInventory(foundObject);
                        if (gameOver === true){
                            logNewMessage("Congratulations! You won!");
                            document.getElementById("subtitle").innerText = "Congratulations!  You won!";
                            gameActive = false; 
                            document.querySelector("button").style.background = "green";
                        }
                        break;
                    case "bicycle":
                        addToInventory(foundObject);
                        break;
                    case "headphones":
                        addToInventory(foundObject);
                        break;
                }
            } else if (foundObject.type === "monster") {  // if player has thrown themselves at a monster, end the game in a loss.
                loseGame(foundObject, movingCharacter, GAME_TILES[GAME_TILES[movingCharacter.location][direction]]._id);
                return "cancel move";
            } else {
                console.log("error in resolveEncounter - player encountered unknown object");
            }
        } else if (movingCharacter.type === "monster"){
            if (foundObject.type === "object" || foundObject.type === "monster"){
                return "cancel move";
            } else if (foundObject.type === "player"){  // if monster has caught a player, end game in a loss
                let hasHeadphones = false;
                for (item of foundObject.inventory){
                    if (item.name === "headphones"){ // if player has headphones, let them ignore when the monster intercepts them (but not when they walk into a monster)
                        hasHeadphones = true;
                    }
                }
                if (!hasHeadphones){
                    console.log("Lost game at tile", GAME_TILES[GAME_TILES[movingCharacter.location][direction]]);
                    loseGame(movingCharacter, foundObject, GAME_TILES[GAME_TILES[movingCharacter.location][direction]]._id);
                } else {
                    logNewMessage("You successfully pretend that you can't hear your coworker!");
                    return "cancel move";
                }
            }
        }
        function addToInventory(thisItem){
            movingCharacter.inventory.push(foundObject);
            foundObject.setLocation(null);
            let newInventoryItem = document.createElement("li");
            newInventoryItem.innerText = foundObject.name;
            document.getElementById("inventory_player1").appendChild(newInventoryItem);
        }
    }

    function loseGame(monster, player, tileId){
        document.getElementById("square" + tileId).style.background = "red";
        logNewMessage(`${monster.name} caught you!  Better luck next time.`);
        document.querySelector(`.${monster.name}`).src = `./images/this${monster.name[0]}red.png`;
        player.setLocation("null");
        gameActive = false;
        document.getElementById("subtitle").innerText = `${monster.name} caught you!  Better luck next time.`;
        document.querySelector("button").style.background = "green";
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
        let shortestPaths = {};
        let pathFound = false;
        shortestPaths[startPoint] = [startPoint];
        let edgeVertexList = []; //list of cells on the edge of exploration;
        edgeVertexList[0] = startPoint;  
        while (pathFound === false){
            currentFocus = GAME_TILES[edgeVertexList.shift()];  // when all adjacent cells have been evaluated, move to the next cell on the queue.
            for (direction of possibleDirections){          //look at all cells adjacent to this one
                if ((currentFocus[direction] != null) && !shortestPaths[currentFocus[direction]]){      // if the adjacent cell exists & does not currently have a path registered.  Beware of cell 0 being falsy
                    shortestPaths[currentFocus[direction]] = shortestPaths[currentFocus._id].concat(currentFocus._id); // register the shortest path to it
                    if (currentFocus[direction] === endPoint){ // if we just registered a path to the target point, break out of both loops and return result
                        shortestPaths[currentFocus[direction]] = shortestPaths[currentFocus[direction]].concat(GAME_TILES[currentFocus[direction]]._id);   // must add the endpoint to the path, or else monsters will pause just short of their prey
                        pathFound = true;
                        break;
                    }
                    edgeVertexList.push(currentFocus[direction]);     // add it as an edge focus
                }
            }
        }
        return shortestPaths[endPoint].slice(2); //the slice(2) at the end is an artifact of the paths algorithm - can remove it in later refactoring
    }

    function newRoomEntry(player, newRoomIndex){ // if player is entering a new room, reveal the room on the map, and activate any monsters inside
        document.getElementById(`room${newRoomIndex}`).style.visibility = "visible";
        for (thisTile of GAME_TILES){
            if (thisTile.contains && (thisTile.contains.type === "monster")){
                if (thisTile.room  === newRoomIndex){
                    let activatedMonster = thisTile.contains;
                    logNewMessage(`${activatedMonster.name} is in the room!  They would like a word with you.`);
                    activatedMonster.focus = player;
                }
            }
        }
    }

    //generate game board: nested for loop:  for each room, go through tile by tile.  Give the tiles their suite of IDs
    function createBoard(){
        let nextTileID = 0;
        for (let i=0; i<roomCount; i++){ // i is also the id of the current room
            let newRoom = document.createElement("div");
            newRoom.classList.add("room");
            newRoom.setAttribute("id", `room${i}`);
            for (let j=0; j<(roomHeight * roomWidth); j++){ // j is also the squareID of the current tile
                let thisTile = new Tile(i, j, nextTileID, roomHeight, roomWidth);
                GAME_TILES.push(thisTile);
                GAME_TILES_FOR_PATHS[thisTile._id] = [];
                for (thisDirection of ["up", "right", "down", "left"]){// construct game tile format that feeds into shortest path algorithm: [{tile_id: [adjacent_tile_id, distance], [adjacent_tile_id, distance], etc}]
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
        function createDoor(tile1ID, tile2ID){
            // doorway orientation can be determined from the difference of the two tile positions
            // if it equals roomWidth-1: tile1 on left, tile2 on right
            // if -(roomWidth-1): tile1 on right, tile2 on left
            // if (roomHeight*roomWidth - roomWidth): tile1 on top, tile2 below
            // if -(roomHeight*roomWidth - roomWidth): tile2 on top, tile1 below
            switch (GAME_TILES[tile1ID].square - GAME_TILES[tile2ID].square) {  
                case (roomWidth-1):
                    GAME_TILES[tile1ID].right = tile2ID;
                    GAME_TILES[tile2ID].left = tile1ID;
                    GAME_TILES[tile1ID].element.style.borderRight = "4px solid #C19A6B";
                    GAME_TILES[tile2ID].element.style.borderLeft = "4px solid #C19A6B";
                    break;
                case -(roomWidth-1):
                    GAME_TILES[tile2ID].right = tile1ID;
                    GAME_TILES[tile1ID].left = tile2ID;
                    GAME_TILES[tile2ID].element.style.borderRight = "4px solid #C19A6B";
                    GAME_TILES[tile1ID].element.style.borderLeft = "4px solid #C19A6B";
                    break;
                case (roomHeight * roomWidth - roomWidth):
                    GAME_TILES[tile1ID].down = tile2ID;
                    GAME_TILES[tile2ID].up = tile1ID;
                    GAME_TILES[tile1ID].element.style.borderBottom = "4px solid #C19A6B";
                    GAME_TILES[tile2ID].element.style.borderTop = "4px solid #C19A6B";
                    break;
                case -(roomHeight * roomWidth - roomWidth):
                    GAME_TILES[tile2ID].right = tile2ID;
                    GAME_TILES[tile1ID].left = tile1ID;
                    GAME_TILES[tile2ID].element.style.borderBottom = "4px solid #C19A6B";
                    GAME_TILES[tile1ID].element.style.borderTop = "4px solid #C19A6B";
                
            }
        }
    }


    // create board and spawn player, monsters, and items
    createBoard();
    const playerCharacter = new Character("player_character", "", "player", "./images/player.png");
    const key1 = new Character("key", "one of your keys!", "object", "./images/key.png");
    const key2 = new Character("key", "one of your keys!", "object", "./images/key.png");
    const bicycle = new Character("bicycle", "your bicycle", "object", "./images/bike.png");
    const headphones = new Character("headphones", "your headphones", "object", "./images/note.png");
    for (let i=0; i<3; i++){
        let newMonsterInfo = coworkerNames.splice(Math.floor(Math.random()*coworkerNames.length), 1)[0];
        let newMonster = new Character(newMonsterInfo.name, "", "monster", newMonsterInfo.image);
        newMonster.setLocation(Math.floor(Math.random()*(GAME_TILES.length-1))+1);
    }
    playerCharacter.setLocation(0);
    newRoomEntry(playerCharacter, GAME_TILES[0].room);
    key1.setLocation(Math.floor(Math.random()*(GAME_TILES.length-1))+1);
    key2.setLocation(Math.floor(Math.random()*(GAME_TILES.length-1))+1);
    bicycle.setLocation(Math.floor(Math.random()*(GAME_TILES.length-1))+1);
    headphones.setLocation(Math.floor(Math.random()*(GAME_TILES.length-1))+1);
})