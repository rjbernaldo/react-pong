const Paddle_react = require("./Paddle.react")

// @ponicode
describe("move", () => {
    let inst

    beforeEach(() => {
        inst = new Paddle_react.default({ control: "label_3", x: 70, y: 320, clientHeight: "bc23a9d531064583ace8f67dad60f6bb", clientWidth: 432, movementHandler: () => false })
    })

    test("0", () => {
        let callFunction = () => {
            inst.move("South")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.move("Southwest")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.move("down")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.move("Southeast")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.move("up")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.move(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
