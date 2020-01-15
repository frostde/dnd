import React from 'react'
import { Home } from '../../pages/index'
import { shallow } from 'enzyme'

const setup = function () {
    const props = {
        getClasses: jest.fn(),
        classes: [
            {
                index: "barbarian",
                name: "Barbarian",
                url: "/api/classes/barbarian"
            },
            {
                index: "wizard",
                name: "Wizard",
                url: "/api/classes/wizard"
            }
        ],
    }
    const enzymeWrapper = shallow(<Home {...props} />)

    return {
        props,
        enzymeWrapper
    }
}


describe('component', () => {

    it('renders correctly', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.debug()).toMatchSnapshot()
    })

    it('calls action to fetch classes', () => {
        const { props } = setup()

        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());
        };
        let useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect();

        shallow(<Home {...props}/>)
        
        expect(props.getClasses).toHaveBeenCalled()
    })

    // it('should render 2 divs if 2 classes are present', () => {
    //     const { enzymeWrapper } = setup()
    //     expect(enzymeWrapper.find('test').length).toBe(2)
    // })
})
