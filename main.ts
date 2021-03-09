function getChar (position: number) {
    return text_list[position]
}
function get_letter (letter: number, inc: number) {
    new_letter = (letter + inc) % text_list.length
    return new_letter
}
input.onPinPressed(TouchPin.P0, function () {
    msg = "" + msg + " "
})
input.onButtonPressed(Button.A, function () {
    letter = get_letter(letter, -1)
    basic.showString("" + (getChar(letter)))
})
function construct_text (msg: string) {
    return "" + name + ": " + msg
}
input.onPinPressed(TouchPin.P2, function () {
    msg = msg.substr(0, msg.length - 1)
})
function add_letter (letter: number) {
    msg = "" + msg + getChar(letter)
}
input.onButtonPressed(Button.AB, function () {
    msg = "" + msg + getChar(letter)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    letter = get_letter(letter, 1)
    basic.showString("" + (getChar(letter)))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("" + (construct_text(msg)))
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showNumber(randint(1, 6))
})
let new_letter = 0
let letter = 0
let text_list: string[] = []
let msg = ""
let name = ""
radio.setGroup(1)
name = "Y"
msg = ""
basic.showString(name)
text_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
letter = text_list.length - 1
