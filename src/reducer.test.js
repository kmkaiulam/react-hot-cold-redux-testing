import reducer from './reducer';
import {restartGame, makeGuess, generateAuralUpdate } from './actions';

describe ('Reducer', () => {
    
    it('Should return the inital state when nothing is passed in', () => {
        const state = (reducer(undefined, {type: 'UNKNOWN'}))
        expect(state.guesses)
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });

    it('Should return the current state if action is not recognized', () => {
        let currentState = {  
            guesses: [1, 2, 3, 4],
            feedback: 'Guess the number!',
            auralStatus: '',
            correctAnswer: 55
        }
        const state = (reducer(currentState, {type: 'UNKNOWN'}))
        expect(state).toEqual(currentState);
    });
});

describe('restartGame', () => {
    
    it('should reset the state', () => {
        let state = {
            guesses: [1, 2, 3, 4],
            feedback: 'Guess the number!',
            auralStatus: '',
            correctAnswer: 55
        };
        const correctAnswer = 12;
        state = reducer(state, restartGame(correctAnswer));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toEqual(correctAnswer);
    });
});

describe('makeGuess', () => {
    
    it('should add the guess to state.guesses', () => {
        let state = {
            guesses: [],
           
        };
        let guess1 = 1;
        let guess2 = 2;
        state = reducer(state, makeGuess(guess1));
        state = reducer(state, makeGuess(guess2));
        expect(state.guesses).toEqual([guess1, guess2]); 
    });

    it('should return the appropriate feedback when a guess is made', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 100,
        };
        state = reducer(state, makeGuess('abc'));
        expect(state.feedback).toEqual('Please enter a valid number.');
        state = reducer(state, makeGuess(50));
        expect(state.feedback).toEqual("You're Ice Cold...");
        state = reducer(state, makeGuess(70));
        expect(state.feedback).toEqual("You're Cold...");
        state = reducer(state, makeGuess(90));
        expect(state.feedback).toEqual("You're Warm.");
        state = reducer(state, makeGuess(99));
        expect(state.feedback).toEqual("You're Hot!");
        state = reducer(state, makeGuess(100));
        expect(state.feedback).toEqual("You got it!");
    });
});


describe('generateAuralUpdate', () => {
    
    it('should modify state.auralStatus with the current feedback and guesses', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 55
        };
        let guess1 = 1;
        let guess2 = 2;
        state = reducer(state, makeGuess(guess1));
        state = reducer(state, makeGuess(guess2));
        state = reducer(state, generateAuralUpdate())
        expect(state.auralStatus).toEqual("Here's the status of the game right now: You're Ice Cold... You've made 2 guesses. In order of most- to least-recent, they are: 2, 1");
        expect(state.guesses).toEqual([guess2, guess1]); 
        expect(state.correctAnswer).toEqual(55);
    })
})
