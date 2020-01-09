import { user } from '../reducers/user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const expected = ''
    const result = user('', '')

    expect(result).toEqual(expected);
  })

  it('should return the correct state if the action.type is SET_USER', () => {
    const mockInitialState = ''
    const mockAction = {
      type: 'SET_USER',
      user: 'Davey Havok'
    }
    const result = user(mockInitialState, mockAction)
    const expected = 'Davey Havok'

    expect(result).toEqual(expected)
  })
})  