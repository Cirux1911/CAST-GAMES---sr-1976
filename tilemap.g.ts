// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1e001e00070707070707070707070707070808080808070707070707070707070707070606060606060606060606060505050505060606060606060606060607070606020606060606020505050505050505050505060606060206060207070606060606020606060505060606060606060505060206060206060607070206060206060606050506060606060606060605050602060602060207070606060606060605050506060602020606060605050506060606060607080505050505050505050506060206020606020605050505050505050508080505050505050505050506060606060606060605050505050505050508080505050505050505050506020606020602060605050505050505050508080505050505050505050506060606060606060605050505050505050508070602060606060606050506060602060202060605050606060606060607070606060606060606050505060606060606060505050606060602060607070206020606020606060505050505050505050505060606060606020607070606060606020602060606060505050505060606060602020606020607070206060206060606060606020505050505060606020602060606060607070303030303030303030303030404040404030303030303030303030307070404040404040404040404040404040404040404040304040404040c070704040404040404040404040404040404040404040403090b0a03040c07070404040404040404040404040404040404040404040303030303040407070404040404040404040404040404040404040404040304040404040c070704040404040404040404040404040404040404040403090b0a03040c07070404040404040404040404040404040404040404040303030303040407070303030303030303040403040404040404040404040304040404040c070701010101010304040404030404040404040404040403090b0a03040c0707040404040403040404040304040404040404040404030303030304040707040b04040403040404040304040404040404040404040404040404040707090b0a040403040404040304040404040404040404040404040404040707040b0a0404040404040403040404040404040404040304040404040c07070404040404040404040403040404040404040404040304040404040c07070707070707070707070707070707070707070707070707070707070707`, img`
222222222222222222222222222222
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2222222222222.....222222222222
2.....................2......2
2.....................2.2.2..2
2.....................22222..2
2.....................2......2
2.....................2.2.2..2
2.....................22222..2
222222222..2..........2......2
2222222....2..........2.2.2..2
2.....2....2..........22222..2
2.2...2....2.................2
2.2...2....2.................2
2.2........2..........2......2
2..........2..........2......2
222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tileGrass2,sprites.dungeon.floorLight2,sprites.swamp.swampTile9,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.dungeon.floorLight0,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico":
            case "tile1":return tile1;
            case "miMosaico0":
            case "tile2":return tile2;
            case "miMosaico1":
            case "tile3":return tile3;
            case "miMosaico2":
            case "tile4":return tile4;
            case "miMosaico3":
            case "tile5":return tile5;
            case "miMosaico4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
