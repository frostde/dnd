import React from 'react';
import { Home } from '../../pages/index'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer
      .create(<Home classes={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});