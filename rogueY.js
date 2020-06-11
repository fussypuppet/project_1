document.addEventListener('DOMContentLoaded', function(){
    const roomHeight = 6;
    const roomWidth = 5;
    const roomCount = 6;
    const GAME_TILES = [];

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

    function Character(power, hitPoints, armor, name, image_location){
        this.name = name;
        this.power = power;
        this.hitPoints = hitPoints;
        this.armor = armor;
        this.inventory = []; //a list of all useful items the character has picked up
        this.location = null;
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
    const playerCharacter = new Character(1, 15, 0, "player_character", "./player.png");
    const key1 = new Character(0, 1, 0 , "key", "./key.png");
    const key2 = new Character(0, 1, 0 , "key", "./key.png");
    playerCharacter.setLocation(0);
    key1.setLocation(Math.floor(Math.random()*GAME_TILES.length));
    key2.setLocation(Math.floor(Math.random()*GAME_TILES.length));
    console.log('key1', key1.location);
    console.log('key2', key2.location);
    console.log("Tile List", GAME_TILES);
    console.log("Player character", playerCharacter);

})