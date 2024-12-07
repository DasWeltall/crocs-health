input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Ghost)
    basic.pause(500)
    basic.setLedColors(0xff0080, 0x000000, 0xff0080)
    update()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Schritte = 0
    storage.putNumber(StorageSlots.s1, Schritte)
})
input.onGesture(Gesture.Shake, function () {
    Schritte += 1
    storage.putNumber(StorageSlots.s1, Schritte)
})
function update () {
    while (true) {
        basic.showNumber(Schritte)
        if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            basic.turnRgbLedOff()
            break;
        }
    }
}
let Schritte = 0
let D = 0
Schritte = storage.getNumber(StorageSlots.s1)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
datalogger.mirrorToSerial(false)
basic.showIcon(IconNames.Ghost)
basic.setLedColors(0x007fff, 0xffff00, 0xff0000)
basic.pause(1000)
basic.turnRgbLedOff()
basic.clearScreen()
basic.forever(function () {
    datalogger.log(datalogger.createCV("Licht", input.lightLevel()))
    datalogger.log(datalogger.createCV("Temperatur", input.temperature()))
    datalogger.log(datalogger.createCV("Lautstärke", input.soundLevel()))
    basic.pause(5000)
})
