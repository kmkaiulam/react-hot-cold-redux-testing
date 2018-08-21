import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';


describe('<Game />', () => {

    it('Renders without crashing', () => {
        shallow(<Game />);
    });


    it('Can start a new game', () => {
        const wrapper= shallow(<Game />);
        wrapper.setState({ 
            guesses: [1, 2, 3, 4],
            feedback: 'Guess again!',
            correctAnswer: -1
        });
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('Can make guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        })
        wrapper.instance().makeGuess(49)
        expect(wrapper.state('guesses')).toEqual([49]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');        
    
        wrapper.instance().makeGuess(70)
        expect(wrapper.state('guesses')).toEqual([49, 70]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');       
        
        wrapper.instance().makeGuess(88)
        expect(wrapper.state('guesses')).toEqual([49, 70, 88]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.'); 
        
        wrapper.instance().makeGuess(97)
        expect(wrapper.state('guesses')).toEqual([49, 70, 88, 97]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().makeGuess(100)
        expect(wrapper.state('guesses')).toEqual([49, 70, 88, 97, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    })
        
    it('Can generate aural updates', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
        correctAnswer: 100
    })
    wrapper.instance().makeGuess(49)
    wrapper.instance().makeGuess(70)
    wrapper.instance().makeGuess(88)

    wrapper.instance().generateAuralUpdate();
    expect(wrapper.state('auralStatus')).toEqual( `Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 88, 70, 49`);
    });
});



