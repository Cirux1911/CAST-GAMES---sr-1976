namespace SpriteKind {
    export const Secuestrado = SpriteKind.create()
    export const Rescatado = SpriteKind.create()
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
    Angulo = randint(0, 360)
    projectile = sprites.createProjectileFromSprite(assets.image`Bala`, Aldo, Math.cos(Angulo) * 100, Math.sin(Angulo) * 100)
    pause(500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Aldo,
    assets.animation`caminandoadelante`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
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
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let projectile: Sprite = null
let Angulo = 0
let militar: Sprite = null
let persona: Sprite = null
let Aldo: Sprite = null
scene.setBackgroundImage(assets.image`miImagen2`)
game.showLongText("1976, San Rafael Mendoza. Aldo López Rodruigez descubre que la municipalidad es una organización secreta criminal. Cometían secuestros, torturas, asesinatos, corrupción, entre otras cosas. Su misión es erradicar a todos los criminales y rescatar a toda la gente que esté ahí. ", DialogLayout.Bottom)
pause(5000)
Aldo = sprites.create(assets.image`miImagen`, SpriteKind.Player)
controller.moveSprite(Aldo)
scene.cameraFollowSprite(Aldo)
tiles.setCurrentTilemap(tilemap`nivel1`)
crearSecuestradoIzq(26, 27)
crearSecuestradoIzq(23, 13)
crearSecuestradoDer(5, 28)
crearSecuestradoDer(2, 7)
Aldo.setImage(assets.image`miImagen3`)
info.setLife(5)
info.setScore(0)
let secuestrado = 0
Militar2(15, 17)
Militar2(2, 19)
Militar2(20, 17)
