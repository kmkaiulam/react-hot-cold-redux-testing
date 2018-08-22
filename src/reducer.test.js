import {reducer} from './reducer';
import {restartGame, RESTART_GAME} from './actions';

describe('restartGame', () => {

    it('should reset the state', () => {
        let state = {
            guesses: [1, 2, 3, 4],
            feedback: 'Guess the number!',
            auralStatus: '',
            correctAnswer: 55
        }
        state = reducer(state=reducer, restartGame(12));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toEqual(55);
    });
});
