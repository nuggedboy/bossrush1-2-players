controller.player2.onEvent(ControllerEvent.Connected, function () {
    Player2Online = true
    Player2 = sprites.create(assets.image`Player2`, SpriteKind.Player)
    controller.player2.moveSprite(Player2, 100, 0)
})
let Player2: Sprite = null
let Player2Online = false
Player2Online = false
game.splash("fight all 3 bosses alone or together good, luck :)")
let Player1 = sprites.create(assets.image`Player1`, SpriteKind.Player)
controller.player1.moveSprite(Player1, 100, 0)
