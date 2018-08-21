import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status'

describe('<AuralStatus />', () => {

    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Renders an aural status update', () => {
        let TEST_STATUS = 'Testing aural status!';
        let wrapper = shallow(<AuralStatus auralStatus={TEST_STATUS} />)
        expect(wrapper.contains(TEST_STATUS)).toEqual(true);
    });
});




