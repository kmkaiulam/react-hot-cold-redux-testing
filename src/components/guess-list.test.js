import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessList guesses= {[]} />);
    });

    it('Renders a list of guesses', () => {
        const TEST_VALUES = [1,5,6,7];
        const wrapper =  shallow(<GuessList guesses= {TEST_VALUES} />);
        const list = wrapper.find('li');
        expect(list.length).toEqual(TEST_VALUES.length);
        TEST_VALUES.forEach((value, index) => {
            expect(list.at(index).text()).toEqual(value.toString());
        })
    });
});



