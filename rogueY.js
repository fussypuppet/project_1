document.addEventListener('DOMContentLoaded', function(){
    const roomHeight = 6;
    const roomWidth = 5;
    const roomCount = 6;
    const GAME_TILES = [];
    const GAME_TILES_FOR_PATHS = {};
    const coworkerNames = [
        {name: "Robin", image: "./thisR.png"}, 
        {name: "Sal", image: "./thisS.png"}, 
        {name: "Mel", image: "./thisM.png"}, 
        {name: "Sam", image: "./thisS.png"}, 
        {name: "Dana", image:"./thisD.png"}, 
        {name: "Harley", image: "./thisH.png"}
    ];
    const pronouns = ["He", "She", "They"];

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
    
    function resolveEncounter(player, direction){  // resolve encounter and return unchanged direction if movement is ok, or null if movement should be canceled
        let foundObject = GAME_TILES[GAME_TILES[player.location][direction]].contains;
        let newMessage = document.createElement("li");
        newMessage.innerText = "You have encountered a " + foundObject.name;
        document.getElementById("log_player1").appendChild(newMessage);
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
                    let newMessage = document.createElement('li');
                    newMessage.innerText = "Congratulations! You won!";
                    document.getElementById("log_player1").appendChild(newMessage);
                    let cheer = new Audio("./1_person_cheering-Jett_Rifkin-1851518140.mp3")
                    cheer.play();
                }
                return direction;
        }
    }
/*
    function findPath(startVertexName, endVertexName){
        //finds shortest path from monster to player using Dijkstra's Shortest Path algorithm & a javascript implementation of a heap data structure.
        //These functions are copied from an assignment for a pre-bootcamp class, but are entirely my own work.
        
        //heap functions
        function vertexToHeap(newBit, thisHeap){ // add a new value to heap and bubble it up to its proper position.  Heap is changed in-place
            thisHeap.push(newBit);
            if (thisHeap.length > 1){
                newBitIndex = thisHeap.length - 1;
                let superNodeIndex = Math.floor((newBitIndex-1)/2);
                while (thisHeap[newBitIndex][3] < thisHeap[superNodeIndex][3]){
                    let newTemp = thisHeap[newBitIndex].slice();
                    thisHeap[newBitIndex] = thisHeap[superNodeIndex].slice();
                    thisHeap[superNodeIndex] = newTemp;
                    //thisHeap[newBitIndex] = [thisHeap[superNodeIndex], thisHeap[superNodeIndex] = thisHeap[newBitIndex]][0]; // trick for swapping array elements
                    newBitIndex = superNodeIndex;
                    if (superNodeIndex > 0){
                        superNodeIndex = Math.floor((newBitIndex-1)/2);
                    }
                }
            }
        }
        function vertexFromHeap(thisHeap){  //remove the top item from a heap, adjust heap properly, and return the element removed
            let n = 0;
            const meNext = thisHeap[n];
            function shiftUp(){
                if (2*n+2 <= thisHeap.length-1){ // if there are two subnodes
                    if (thisHeap[2*n+1][3] <= thisHeap[2*n+2][3]){ // 
                        thisHeap[n] = thisHeap[2*n+1].slice();
                        n = 2*n+1;
                    } else {
                        thisHeap[n] = thisHeap[2*n+2].slice();
                        n = 2*n+2;
                    }
                    shiftUp();
                } else if (2*n+2 === thisHeap.length){  // if there's only one subnode
                    thisHeap[n] = thisHeap[2*n+1].slice();
                    n = 2*n+1;
                    shiftUp();
                } else { // if there are no subnodes, remove the last bumped element, shift all the subsequent ones over, and bubble each of them since they now have new supernodes
                    const endElements = thisHeap.splice(n, thisHeap.length-n); // cut off all end elements
                    for (let x=1;x<endElements.length;x++){ //iterate through all the ones we need to keep and add/bubble them
                        vertexToHeap(endElements[x], thisHeap);
                    }
                }
            }
            shiftUp();
            //console.log("Finished popping: " + JSON.stringify(thisHeap));
            return meNext;
        }

        // fundamental variables
        //const startVertexName = process.argv[2];
        //const endVertexName = process.argv[3];
        const alreadyExplored = {};
        const distancesTo = {};
        const pathsTo = {};
        const vertexCount = GAME_TILES.length;
        const priorityHeap = [];
        let cheatList = [];

        alreadyExplored[startVertexName] = true;
        distancesTo[startVertexName] = 0;
        pathsTo[startVertexName] = [startVertexName];
        let currentVertex = startVertexName;

        //shortest path algorithm
        while (Object.keys(pathsTo).length < vertexCount){  // process a new vertex.  There will always be one - we'll throw out a lot of uselessly long heap entries at the end.
            let theseNewEdges = GAME_TILES_FOR_PATHS[currentVertex];  // edges are of form [targetVertex, length]
            for(let i=0;i<theseNewEdges.length;i++){			// add the new edges to the heap, as long as they lead to new vertices  BUT THEN STILL NEED TO CHECK WHEN PULLED LATER
                if (!alreadyExplored[theseNewEdges[i][0]]){
                    theseNewEdges[i].push(parseInt(currentVertex)); 	// NOW EDGE IS [targetVertex, length, sourceVertex]!!!!!
                    theseNewEdges[i].push(distancesTo[theseNewEdges[i][2]] + theseNewEdges[i][1]); // NOW edge is [targetVertex, length, sourceVertex, Overall Length From Source If Added]  // I think heap should be sorted by that 4th one.
                    vertexToHeap(theseNewEdges[i], priorityHeap);
                } 
            }
            let nextEdge = vertexFromHeap(priorityHeap);
            console.log('nextEdge', nextEdge);
            while (alreadyExplored[nextEdge[0]]){
                nextEdge = vertexFromHeap(priorityHeap); // choose a next edge to process and make sure it doesn't lead to an explored vertex
            }

            if (!alreadyExplored[nextEdge[0]]){ 		// we tried to minimize this earlier, but if the destination vertex has been discovered in the time since this was added to the heap
                alreadyExplored[nextEdge[0]] = true;  // mark destination edge as explored
                distancesTo[nextEdge[0]] = distancesTo[nextEdge[2]] + nextEdge[1]; // its distanceTo is the distance to source edge + edge length
                pathsTo[nextEdge[0]] = pathsTo[nextEdge[2]].slice();  // its path is the path to the source vertex plus the new one
                pathsTo[nextEdge[0]].push(nextEdge[0]);
                currentVertex = nextEdge[0];
            } else {
                console.log("Something is very wrong");
            }
        }
        console.log("Path to end vertex: " + JSON.stringify(pathsTo[endVertexName]));
        console.log("Distance to end vertex: " + JSON.stringify(distancesTo[endVertexName]));
    }
    */

    function findPath2(startPoint, endPoint){
        console.log(`Finding path from ${startPoint} to ${endPoint}`);
        let shortestPaths = {};
        let pathFound = false;
        shortestPaths[startPoint] = [startPoint];
        let possibleDirections = ["up", "right", "down", "left"];
        let edgeVertexList = []; //list of cells on the edge of exploration;
        edgeVertexList[0] = startPoint;
        
        while (pathFound === false){
            //console.log("edgeVertexList", edgeVertexList);
            //console.log("shortestPaths", shortestPaths);
            currentFocus = GAME_TILES[edgeVertexList.shift()];  // when all adjacent cells have been evaluated, move to the next cell on the queue.  I'm trusting the inherent organization of the map to ensure that this evaluates a next-closest cell every time.
            //console.log("currentFocus", currentFocus);
            for (direction of possibleDirections){          //look at all cells adjacent to this one
                if (currentFocus[direction] && !shortestPaths[currentFocus[direction]]){      // if the adjacent cell exists & does not currently have a path registered
                    //console.log("currentFocus, direction does not have a path registered", currentFocus)
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
                    let newMessage = document.createElement("li");
                    newMessage.innerText = `${activatedMonster.name} is in the room!  They would like a word with you.`;
                    document.getElementById("log_player1").appendChild(newMessage);
                    activatedMonster.focus = player;
                    let lotsOfPaths = findPath2(activatedMonster.location, player.location);
                    console.log("lotsOfPaths", lotsOfPaths);
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