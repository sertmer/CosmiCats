import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login';
import { setUser } from '../../actions'
// import { LandingPage } from '../LandingPage/LandingPage';

describe('Login', () => {

  let wrapper, mockNameEvent, mockAgreeEvent

  beforeEach(() => {
    mockNameEvent = { target: {name: 'name', value:'Davey Havok'} }
    mockAgreeEvent = { target: {name: 'hasAgreed'} }

    wrapper = shallow(<Login />)
  })

  describe('Unit Tests', () => {

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot when the is state is complete', () => {
      const mockState = { name: 'Davey Havok', hasAgreed: true }
      wrapper.instance().setState(mockState)
      expect(wrapper).toMatchSnapshot()
    })

    describe('handleChange', () => {
      it('should call setState when handleChange is invoked', () => {
        const expected = { name: 'Davey Havok' }
        wrapper.instance().setState = jest.fn()
        wrapper.instance().handleChange(mockNameEvent)

        expect(wrapper.instance().setState).toHaveBeenCalledWith(expected)
      })

      it('should set state with name when handleChange is invoked', () => {
        const expected = {name: 'Davey Havok', hasAgreed: false}
        wrapper.setState({ name: '', hasAgreed: false });
        wrapper.instance().handleChange(mockNameEvent);

        expect(wrapper.state()).toEqual(expected)
      });

      it('should be invoked on change', () => {
        wrapper.instance().handleChange = jest.fn()
        wrapper.find('.user-name-input').simulate('change', mockNameEvent)

        expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockNameEvent)
      })
    })

    describe('handleClick', () => {
      it('should call setState when handleClick is invoked', () => {
        const expected = { hasAgreed: true }
        wrapper.instance().setState = jest.fn()
        wrapper.instance().handleClick(mockAgreeEvent)

        expect(wrapper.instance().setState).toHaveBeenCalledWith(expected)
      })

      it('should set state with true when handleClick is invoked', () => {
        const expected = { name: '', hasAgreed: true }
        wrapper.instance().handleClick(mockAgreeEvent)

        expect(wrapper.state()).toEqual(expected)
      })

      it('should be invoked on click', () => {
        wrapper.instance().handleClick = jest.fn()
        wrapper.find('.agree-radio').simulate('click', mockAgreeEvent)

        expect(wrapper.instance().handleClick).toHaveBeenCalledWith(mockAgreeEvent)
      })
    })

    describe('setUser on click', () => {
      it('should invoke setUser on click', () => {
        const mockSetUser = jest.fn()
        const mockState = { name: 'Davey Havok', hasAgreed: true }
        wrapper = shallow(<Login setUser={mockSetUser} />)

        wrapper.instance().setState(mockState)

        expect(wrapper.state()).toEqual(mockState)

        wrapper.find('button').simulate('click', wrapper.state('name'))

        expect(mockSetUser).toHaveBeenCalledWith('Davey Havok')
      })
    })
  })
  
  describe('mapDispatchToProps', () => {
    let mockDispatch, mockActionToDispatch

    beforeEach(() => {
      mockDispatch = jest.fn()
    })
    it('should call mapDispatchToProps with a user', () => {
      mockActionToDispatch = setUser('Davey Havok')
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setUser('Davey Havok')
      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
    })
  })
})