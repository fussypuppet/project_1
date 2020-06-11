document.addEventListener('DOMContentLoaded', function(){
    const roomHeight = 6;
    const roomWidth = 5;
    const roomCount = 6;
    const GAME_TILES = [];

    function Tile(roomID, squareID, nextTileID, roomHeight, roomWidth) {
        this.room = roomID;  //the id of the room on the game board // this can basically be an array index from 0 to <room count>
        this.square = squareID; //the id of the tile within the room's array of tiles // this should be an array index from 0 to <room size>
        this._id = nextTileID; //unique identifier for this tile among all on the board, used for referencing which are adjacent // is index from 0 to <board size>
        this.up = ((squareID >= roomWidth) ? (nextTileID - roomWidth) : (null)); // if the tile has a northern neighbor, return its ID
        this.down = ((squareID < ((roomHeight -1) * roomWidth )) ? (nextTileID + roomWidth) : (null));
        this.right = (((squareID + 1) % roomWidth === 0) ? (null) : (nextTileID + 1));
        this.left = ((squareID % roomWidth === 0) ? (null) : (nextTileID - 1));
        this.contains = "empty"  //may be a monster, a useful item, or the player character
        let newHTMLTile = document.createElement("div");
        newHTMLTile.classList.add("square");
        newHTMLTile.setAttribute("id", `square${this._id}`);
        this.element = newHTMLTile;
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
    }

    createBoard();
    document.getElementById("square6").innerHTML = '<img class="player_character" src="./maybesmiley.jpg" alt="player character">';
    console.log("Tile List", GAME_TILES);

    const playerCharacter = {
        power: Number,
        hitPoints: Number,
        armor: Number,
        inventory: Array, //a list of all useful items the character has picked up
        location: Number //id of tile location
    }
})