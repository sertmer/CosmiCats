import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from './Header';

describe('Header', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  describe('Header unit tests', () => {
    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
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
  })
})