import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';


describe('generateAuralUpdate', () => {
    
    it('should have the correct action.type of GENERATE_AURAL_UPDATE', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    
    it('should have the correct action.type of RESTART_GAME and take in correct answer as a parameter', () => {
        const correctAnswer = 100;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(100);
    });
});

describe('makeGuess', () => {
    
    it('should have the correct action.type of MAKE_GUESS and take in a guess as a parameter', () => {
        const guess = 25;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});