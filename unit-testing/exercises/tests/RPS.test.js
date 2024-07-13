const rps = require('../RPS.js');

describe("rps", function() {

    test("returns 'TIE!' when both players choose the same option", function() {
        let result = rps('scissors', 'scissors');
        expect(result).toEqual('TIE!');
    });

    test("returns 'Player 2 wins!' when p1 chooses rock & p2 chooses paper", function() {
        let result = rps('rock', 'paper');
        expect(result).toEqual('Player 2 wins!');
    });
    
    test("returns 'Player 2 wins!' when p1 chooses paper & p2 chooses scissors", function() {
        let result = rps('paper', 'scissors');
        expect(result).toEqual('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' when p1 chooses scissors & p2 chooses rock", function() {
        let result = rps('scissors', 'rock');
        expect(result).toEqual('Player 2 wins!');
    });

    test("returns 'Player 2 entered an invalid input.' when p2's answer isn't rock, paper, or scissors", function() {
        let result = rps('missile', 'rock');
        expect(result).toEqual('Someone entered an invalid input.');
    });
});