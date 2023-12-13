input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("xmas")
    basic.clearScreen()
})
input.onSound(DetectedSound.Loud, function () {
    enarksi = !(enarksi)
})
let keri = 0
let enarksi = false
enarksi = true
basic.forever(function () {
    if (enarksi) {
        keri = randint(1, 3)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        if (keri != 2) {
            led.unplot(2, 0)
            led.plot(keri, 0)
            basic.pause(200)
        }
    } else {
        basic.clearScreen()
    }
})
