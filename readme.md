Oh No!

It's the end of the workday, and time to go home.  Explore the map and grab both of your lost keys while avoiding your coworkers to win!

This game was inspired by games I played as a kid, especially Rogue, back when games were mostly limited to ASCII characters to supply their graphics.  It runs entirely on html, css, and Javascript.


Instructions:
Navigate the map using arrow keys.
Brown lines along the edges of rooms indicate doorways to other rooms.
Collect items and keys by moving on top of them.
If at any point you and a coworker occupy the same tile, you lose.
Coworkers take one move for every move you make, and make their move immediately before your move resolves.
Adding a bicycle to your inventory lets you take two moves for every one of your opponents'.
Adding headphones to your inventory makes you immune to coworkers in cases where they attack a tile that you are currently leaving.  But you still lose in cases where you move directly into an enemy, or move into a game tile at the same time an enemy moves into it.

Known issues:
- old messages don't scroll out of sight
- coworkers can start behind doors, leading to surprise deaths
- rarely, coworkers trample & delete other coworkers
- rarely, the player icon does not disappear when player loses
- coworkers follow predictable paths to the player, and can get stuck behind other coworkers & objects
- the words "monster" and "coworker" are used interchangeably throughout the code
- rarely, objects spawn on top of each other, with strange results