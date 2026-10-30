namespace SpriteKind {
    export const Secuestrado = SpriteKind.create()
    export const Rescatado = SpriteKind.create()
    export const BOSS = SpriteKind.create()
    export const BalaJefe = SpriteKind.create()
}
function crearSecuestradoIzq (columna: number, fila: number) {
    persona = sprites.create(assets.image`Secuestrado Izquierda`, SpriteKind.Secuestrado)
    tiles.placeOnTile(persona, tiles.getTileLocation(columna, fila))
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BOSS, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    vida_jefe_final.value += -1
})
function crearSecuestradoDer (Columna: number, Fila: number) {
    persona = sprites.create(assets.image`Secuestrado derecha`, SpriteKind.Secuestrado)
    tiles.placeOnTile(persona, tiles.getTileLocation(Columna, Fila))
}
info.onScore(4, function () {
    game.showLongText("Aldo logró rescatar a 4 personas... Pero sabía que habían más gente secuestrada en el edificio. Así que subió las escaleras al siguiente piso.", DialogLayout.Bottom)
    pause(2000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
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
    music.play(music.createSong(assets.song`Sonido de disparo`), music.PlaybackMode.UntilDone)
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
    if (status == vida_jefe_final) {
        jefeActivo = 0
        sprites.destroy(Jefe_final)
        game.setGameOverMessage(true, "GANASTE")
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.BalaJefe, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    danarAldo()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    danarAldo()
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
// Protege a Aldo durante 1,5 segundos después de un golpe
function danarAldo () {
    if (protección == 0) {
        protección = 1
        info.changeLifeBy(-1)
        pause(1500)
        protección = 0
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Secuestrado, function (jugador, cautivo) {
    cautivo.setKind(SpriteKind.Food)
    cautivo.setImage(assets.image`Secuestrado Rescatado`)
    pause(5000)
    sprites.destroy(cautivo)
    info.changeScoreBy(1)
})
info.onScore(8, function () {
    game.showLongText("Finalmente Aldo sube a la terraza, donde se encuentra con el jefe final.", DialogLayout.Bottom)
    pause(2000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    tiles.setCurrentTilemap(tilemap`NIVEL FINAL`)
    tiles.placeOnTile(Aldo, tiles.getTileLocation(14, 7))
    Jefe_final = sprites.create(assets.image`miImagen4`, SpriteKind.BOSS)
    tiles.placeOnTile(Jefe_final, tiles.getTileLocation(15, 23))
    vida_jefe_final = statusbars.create(30, 5, StatusBarKind.Health)
    vida_jefe_final.max = 10
    vida_jefe_final.value = 10
    vida_jefe_final.attachToSprite(Jefe_final)
    Jefe_final.follow(Aldo, 30)
    jefeActivo = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    music.play(music.createSong(assets.song`SonidoDeMuerteEnemigo`), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.BOSS, SpriteKind.Player, function (sprite, otherSprite) {
    danarAldo()
})
let bala_de_jefe: Sprite = null
let Jefe_final: Sprite = null
let jefeActivo = 0
let projectile: Sprite = null
let Angulo = 0
let militar: Sprite = null
let vida_jefe_final: StatusBarSprite = null
let persona: Sprite = null
let protección = 0
let recarga = 0
let Aldo: Sprite = null
let secuestrado = 0
scene.setBackgroundImage(assets.image`miImagen2`)
music.play(music.createSong(assets.song`Musica`), music.PlaybackMode.LoopingInBackground)
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
game.onUpdateInterval(50, function () {
    if (recarga > 0) {
        recarga += -1
    }
})
game.onUpdateInterval(1500, function () {
    if (jefeActivo == 1 && Jefe_final != null) {
        // La bala apunta hacia donde estaba Aldo cuando se disparó
        bala_de_jefe = sprites.createProjectileFromSprite(assets.image`Bala`, Jefe_final, (Aldo.x - Jefe_final.x) / 2, (Aldo.y - Jefe_final.y) / 2)
        bala_de_jefe.setKind(SpriteKind.BalaJefe)
        bala_de_jefe.lifespan = 4000
    }
})
