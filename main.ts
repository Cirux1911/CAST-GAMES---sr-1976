namespace SpriteKind {
    export const Secuestrado = SpriteKind.create()
    export const Rescatado = SpriteKind.create()
    export const BOSS = SpriteKind.create()
}
function crearSecuestradoIzq (columna: number, fila: number) {
    persona = sprites.create(assets.image`Secuestrado Izquierda`, SpriteKind.Secuestrado)
    tiles.placeOnTile(persona, tiles.getTileLocation(columna, fila))
}
function crearSecuestradoDer (Columna: number, Fila: number) {
    persona = sprites.create(assets.image`Secuestrado derecha`, SpriteKind.Secuestrado)
    tiles.placeOnTile(persona, tiles.getTileLocation(Columna, Fila))
}
info.onScore(4, function () {
    scene.setBackgroundImage(assets.image`miImagen5`)
    game.showLongText("Aldo logró rescatar a 4 personas... Pero sabía que habían más gente secuestrada en el edificio. Así que subió las escaleras al siguiente piso.", DialogLayout.Bottom)
    pause(2000)
    tiles.setCurrentTilemap(tilemap`NIVEL 2`)
    crearSecuestradoIzq(27, 17)
    crearSecuestradoIzq(28, 24)
    crearSecuestradoDer(2, 6)
    crearSecuestradoDer(9, 21)
    Militar2(3, 5)
    Militar2(15, 3)
    Militar2(19, 24)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Aldo,
    assets.animation`caminandoderecha`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Aldo,
    assets.animation`caminandoizquierda`,
    200,
    true
    )
})
function Militar2 (columna: number, fila: number) {
    militar = sprites.create(assets.image`miImagen12`, SpriteKind.Enemy)
    tiles.placeOnTile(militar, tiles.getTileLocation(columna, fila))
    militar.follow(Aldo, 50)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (recarga == 0) {
        recarga = 10
        Angulo = randint(0, 360)
        projectile = sprites.createProjectileFromSprite(assets.image`Bala`, Aldo, Math.cos(Angulo) * 100, Math.sin(Angulo) * 100)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Aldo,
    assets.animation`caminandoadelante`,
    200,
    true
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    if (status == Jefe_final) {
        sprites.destroy(Jefe_final)
        game.setGameOverMessage(true, "GAME OVER!")
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    protección = 1
    info.changeLifeBy(-1)
    pause(1500)
    protección = 0
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Aldo,
    assets.animation`caminandoatras`,
    200,
    true
    )
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "PERDISTE")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Secuestrado, function (jugador, cautivo) {
    cautivo.setKind(SpriteKind.Food)
    cautivo.setImage(assets.image`Secuestrado Rescatado`)
    pause(5000)
    sprites.destroy(cautivo)
    info.changeScoreBy(1)
})
info.onScore(8, function () {
    scene.setBackgroundImage(assets.image`miImagen5`)
    game.showLongText("Finalmente Aldo sube a la terraza, donde un helicópeto le sorprende", DialogLayout.Bottom)
    pause(2000)
    tiles.setCurrentTilemap(tilemap`NIVEL FINAL`)
    tiles.placeOnTile(Aldo, tiles.getTileLocation(24, 6))
    Jefe_final = sprites.create(assets.image`JEFE FINAL`, SpriteKind.BOSS)
    vida_jefe_final = statusbars.create(40, 5, StatusBarKind.Health)
    Jefe_final.setVelocity(-150, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let vida_jefe_final: StatusBarSprite = null
let Jefe_final: Sprite = null
let projectile: Sprite = null
let Angulo = 0
let militar: Sprite = null
let persona: Sprite = null
let protección = 0
let recarga = 0
let Aldo: Sprite = null
scene.setBackgroundImage(assets.image`miImagen2`)
music.play(music.createSong(hex`0078000408040300001c00010a006400f401640000040000000000000000000000000005000004180000000400011920002400011950005400011d60006400011903001c0001dc00690000045e0100040000000000000000000005640001040003240004000800011e2c003000012234003800012548004c0001245400580001296c007000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800240010001100010b38003900010840004100010b44004500010b50005100010b700071000108`), music.PlaybackMode.LoopingInBackground)
game.showLongText("1976, San Rafael Mendoza. Aldo López Rodruigez descubre que la municipalidad es una organización secreta criminal. Cometían secuestros, torturas, asesinatos, corrupción, entre otras cosas. Su misión es rescatar a toda la gente que esté ahí. ", DialogLayout.Bottom)
pause(5000)
Aldo = sprites.create(assets.image`miImagen`, SpriteKind.Player)
controller.moveSprite(Aldo)
scene.cameraFollowSprite(Aldo)
tiles.setCurrentTilemap(tilemap`nivel1`)
tiles.placeOnTile(Aldo, tiles.getTileLocation(15, 28))
crearSecuestradoIzq(26, 27)
crearSecuestradoIzq(23, 13)
crearSecuestradoDer(5, 28)
crearSecuestradoDer(2, 7)
Aldo.setImage(assets.image`miImagen3`)
info.setLife(5)
info.setScore(0)
Militar2(15, 17)
Militar2(2, 19)
Militar2(20, 17)
Militar2(5, 17)
recarga = 0
protección = 0
let secuestrado = 0
game.onUpdateInterval(50, function () {
    if (recarga > 0) {
        recarga += -1
    }
})
