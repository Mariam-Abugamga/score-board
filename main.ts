// created by: Mariam Abugamga
// Created On: Nov 5, 2020
// This program is a Micro:Bit Electro Football program
let goal = 0
let score = 0
basic.showNumber(score)
basic.pause(100)
basic.forever(function () {
    goal = pins.digitalReadPin(DigitalPin.P1)
    if (goal == 1) {
        score = score + 1
        music.playMelody("G B A G - - - - ", 155)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showNumber(score)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
