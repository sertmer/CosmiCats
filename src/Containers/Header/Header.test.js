import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { setUser } from '../../actions'

describe('Header', () => {

  let wrapper
  let mockSetUser
  let mockEvidence

  beforeEach(() => {
    mockEvidence = [{id:'ab1', img: 'someURL.com', dateCreated: '12-12-12'}]
    mockSetUser = jest.fn()
    wrapper = shallow(<Header user={'Davey Havok'} setUser={mockSetUser} evidence={mockEvidence}/>)
  })

  describe('Header unit tests', () => {

    it('should match the snapshot', () => {
      wrapper = shallow(<Header evidence={mockEvidence}/>)
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot when there is a user in props', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call setUser on signout click', () => {
     
      wrapper.find('.signout-btn').simulate('click');

      expect(mockSetUser).toHaveBeenCalledWith('')
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