input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("do you want to play a game")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("hi")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendString("1+1+2")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("how are you")
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendString("labubu")
})
radio.setGroup(1)
