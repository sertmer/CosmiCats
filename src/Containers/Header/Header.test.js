import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { setUser } from '../../actions'

describe('Header', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  describe('Header unit tests', () => {

    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it.skip('should match the snapshot when there is a user in props', () => {
      wrapper = shallow(<Header user={'Davey Havok'} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should return the users name', () => {
      const mockState = {
        user: 'Davey Havok',
        extra: 'extra'
      }
      const expected = { user: 'Davey Havok'}
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
  
  describe('mapDispatchToProps', () => {
    let mockDispatch, mockActionToDispatch

    beforeEach(() => {
      mockDispatch = jest.fn()
    })

    it('should call mapDispatchToProps with an empty string user', () => {
      mockActionToDispatch = setUser('')
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setUser('')
      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
    })
  })
})