let n = 0
soundExpression.hello.play()
basic.showLeds(`
    . . . # .
    # . # . .
    . # . # .
    . . # . #
    . # . . .
    `)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
        n = 0
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(100)
        while (maqueen.Ultrasonic(PingUnit.Centimeters) < 16) {
            n += 1
            if (10 <= n) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            } else {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            }
            basic.pause(100)
            maqueen.motorStop(maqueen.Motors.All)
            if (20 <= n) {
                n = 0
            }
        }
        basic.pause(100)
    }
})
