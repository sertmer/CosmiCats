import * as actions from './index'

describe('actions', () => {
  describe('SET_USER', () => {
    it('should have a type of SET_USER', () => {
      const user = 'Davey Havok'
      const result = actions.setUser(user)
      const expected = {
        type: 'SET_USER',
        user
      }

      expect(result).toEqual(expected)
    })
  })
})