basic.forever(function () {
    serial.writeValue("X", input.acceleration(Dimension.X))
    serial.writeValue("Y", input.acceleration(Dimension.Y))
    serial.writeValue("Z", input.acceleration(Dimension.Z))
    serial.writeString("----------")
    basic.pause(500)
})
