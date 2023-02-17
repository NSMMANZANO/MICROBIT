input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Celsius))
})
input.onButtonPressed(Button.AB, function () {
    Farenheit = Celsius * 1.8
    Farenheit = Farenheit + 32
    basic.showString("" + (Farenheit))
})
input.onButtonPressed(Button.B, function () {
    kelvin = Celsius + 273
    basic.showString("" + (kelvin))
})
let kelvin = 0
let Farenheit = 0
let Celsius = 0
Celsius = input.temperature()
