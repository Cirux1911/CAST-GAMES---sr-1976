info.onScore(4, function () {
    scene.setBackgroundImage(assets.image`miImagen5`)
    game.showLongText("Aldo logró rescatar a 4 personas... Pero sabía que habían más gente secuestrada en el edificio. Así que subió las escaleras al siguiente piso.", DialogLayout.Bottom)
    pause(2000)
    tiles.setCurrentTilemap(tilemap`nivel`)
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Angulo = randint(0, 360)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f 6 6 6 6 f . . . . . 
        . . . . . f 6 b b 6 f . . . . . 
        . . . . . f 6 b b 6 f . . . . . 
        . . . . . f 6 6 6 6 f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Aldo, Math.cos(Angulo) * 100, Math.sin(Angulo) * 100)
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
info.onScore(8, function () {
    scene.setBackgroundImage(assets.image`miImagen5`)
    game.showLongText("", DialogLayout.Bottom)
    pause(2000)
    tiles.setCurrentTilemap(tilemap`nivel3`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let projectile: Sprite = null
let Angulo = 0
let Aldo: Sprite = null
scene.setBackgroundImage(assets.image`miImagen2`)
game.showLongText("1976, San Rafael Mendoza. Aldo López Rodruigez descubre que la municipalidad es una organización secreta criminal. Cometían secuestros, torturas, asesinatos, corrupción, entre otras cosas. Su misión es erradicar a todos los criminales y rescatar a toda la gente que esté ahí. ", DialogLayout.Bottom)
pause(5000)
Aldo = sprites.create(assets.image`miImagen`, SpriteKind.Player)
controller.moveSprite(Aldo)
scene.cameraFollowSprite(Aldo)
tiles.setCurrentTilemap(tilemap`nivel1`)
info.setLife(5)
info.setScore(0)
