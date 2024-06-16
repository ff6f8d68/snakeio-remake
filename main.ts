GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    radio.sendValue("y", y + 1)
    y = y + 1
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    radio.sendValue("x", x - 1)
    x = x - 1
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else {
        if (name == "y") {
            y = value
        } else {
            if (name == "x2") {
                x2 = value
            } else {
                if (name == "y2") {
                    y2 = value
                }
            }
        }
    }
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    radio.sendValue("x", x + 1)
    x = x + 1
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    radio.sendValue("y", y - 1)
    y = y - 1
})
let y2 = 0
let x2 = 0
let x = 0
let y = 0
let display = GAME_ZIP64.createZIP64Display()
radio.setGroup(1)
let listx = [0]
let listy = [0]
let snake_dir = 0
basic.forever(function () {
    basic.clearScreen()
})
basic.forever(function () {
    display.clear()
    display.setMatrixColor(x2, y2, GAME_ZIP64.colors(ZipLedColors.Green))
    for (let Index = 0; Index <= listx.length; Index++) {
        display.setMatrixColor(listx[Index], listy[Index], GAME_ZIP64.colors(ZipLedColors.Red))
    }
    display.show()
    basic.pause(10)
})
basic.forever(function () {
    if (snake_dir == 0) {
        listy.unshift((listy[0] - 1) % 8)
        listx.unshift(listx[0])
    }
    listx.pop()
    listy.pop()
    basic.pause(500)
})
