import React from 'react';
import SearchBar from '../components/search_bar';
import {shallow} from 'enzyme';

describe('GIVEN a search bar', () => {

	const callback = jest.fn(() => console.log('Mocked callback'));
	const wrapper = shallow(
		<SearchBar  
			onSearchPerformed={callback} />
	);
	
	const select = wrapper.find('select').props().children;
	const input = wrapper.find('input').nodes;

	it('SHOULD contain two input tags', () => {
		expect(input.length).toBe(2);
	});

	it('SHOULD contain three select tags', () => {
		expect(select.length).toBe(3);
	});
});
