blockyTalkyBLE.onStringReceived("show", function ({ stringValue }) {
    let value = 0
    basic.showString("" + (value))
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("c")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("d")
})
input.onButtonPressed(Button.A, function () {
    item = input.acceleration(Dimension.X)
    blockyTalkyBLE.sendMessageWithNumberValue("accel", item)
})
input.onButtonPressed(Button.AB, function () {
    blockyTalkyBLE.sendMessageWithStringValue("name", "Mark")
})
input.onButtonPressed(Button.B, function () {
    item = input.lightLevel()
    blockyTalkyBLE.sendMessageWithNumberValue("light", item)
})
let item = 0
basic.showIcon(IconNames.Heart)
