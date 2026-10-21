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
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Aldo, randint(-100, 100), randint(-100, 100))
    pause(500)
})
info.onScore(10, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "¡GANASTE!")
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
    game.gameOver(false)
    game.setGameOverMessage(false, "PERDISTE")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(projectile)
})
let projectile: Sprite = null
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
