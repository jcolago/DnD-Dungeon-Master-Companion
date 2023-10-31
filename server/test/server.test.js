let app = require("../server")
let testServer = require('supertest')

describe("Test the /games GET route", () => {
   
    test("It should return 200 code", async () => {
        try {
            const gamesResponse = await testServer(app)
            .get("/api/games/")
            expect(gamesResponse.statusCode).toEqual(200)
        } catch (error) {
            console.log(error)
        }
    })

    test("It should respond 200 from games route", async () => {
        try {
            let agent = testServer.agent(app)

            const response = await agent
            .post("/api/games/")
            .send({game_name: "Joe's Game"})
            expect(response.statusCode).toEqual(200)
        } catch (error){
            console.log(error)
        }
    })
})