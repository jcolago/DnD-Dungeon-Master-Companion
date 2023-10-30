import playersInfoReducer from "./playerinfo.reducer";

describe("testing players info reducer", () => {
    test("Should have correct initial state", () => {
        let action = {}
        let returnedState = playersInfoReducer(undefined, action)
        
        expect(returnedState).toEqual([])
    })

    test("Should have correct returned state with action.type 'SET_PLAYERS_INFO'", () => {
        let action = {type: 'SET_PLAYERS_INFO'}
        let returnedState = playersInfoReducer(undefined, action)

        expect(returnedState).toEqual(action.payload)
    })

    test("Should have correct returned state with action.type 'CLEAR_INFO'", () => {
        let action = {type: 'CLEAR_INFO'}
        let returnedState = playersInfoReducer(undefined, action)

        expect(returnedState).toEqual([])
    })
})