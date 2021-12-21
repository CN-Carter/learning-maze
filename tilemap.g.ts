// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020301020102010101010102020101020201020201020101010201020101010202010102010201010102020201010102020201020202010101010102010101020201010101010101020101020101010202010202010101010201010202020102020101020101010102010101010201020202010201010202020202010101010202020102020202010101010101010102020201010101020101010201020102020202020202020201010102010201020202010101010402020202020102010202020102020202010101020202020102020201010101010101010101010101020202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . 2 . . . . . 2 2 . . 2 
2 . 2 2 . 2 . . . 2 . 2 . . . 2 
2 . . 2 . 2 . . . 2 2 2 . . . 2 
2 2 . 2 2 2 . . . . . 2 . . . 2 
2 . . . . . . . 2 . . 2 . . . 2 
2 . 2 2 . . . . 2 . . 2 2 2 . 2 
2 . . 2 . . . . 2 . . . . 2 . 2 
2 2 . 2 . . 2 2 2 2 2 . . . . 2 
2 2 . 2 2 2 2 . . . . . . . . 2 
2 2 . . . . 2 . . . 2 . 2 . 2 2 
2 2 2 2 2 2 2 . . . 2 . 2 . 2 2 
2 . . . . . 2 2 2 2 2 . 2 . 2 2 
2 . 2 2 2 2 . . . 2 2 2 2 . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
