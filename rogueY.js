const tile = {
    room: Number;  //the id of the room on the game board
    square: Number; //the id of the tile within the room's array of tiles
    id: Number; //unique identifier for this tile among all on the board, used for referencing which are adjacent
    up: id; // tile id of the tile above this one
    right: id;
    down: id;
    left: id;
    contains: Object; //may be a monster, a useful item, or the player character
}

const playerCharacter = {
    power: Number;
    hitPoints: Number;
    armor: Number;
    Inventory: Array; //a list of all useful items the character has picked up
}