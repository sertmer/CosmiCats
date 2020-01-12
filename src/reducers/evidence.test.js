import { evidence } from './evidence';

describe('evidence reducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = evidence(undefined, [])

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the type is ADD_EVIDENCE', () => {
    const initialState = []
    const mockAction = {
      type: 'ADD_EVIDENCE',
      evidence: {
        img: 'someURL.com',
        id: 'ab1',
        dateCreated: '12-12-12'
      }
    }

    const expected = [
      {
        img: 'someURL.com',
        id: 'ab1',
        dateCreated: '12-12-12'
      }
    ]

    const result = evidence(initialState, mockAction)
    
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the type is REMOVE_EVIDENCE', () => {
    const initialState = [
      {
        img: 'someURL.com',
        id: 'ab1',
        dateCreated: '12-12-12'
      },
      {
        img: 'someURL2.com',
        id: 'ab2',
        dateCreated: '12-12-14'
      },
      {
        img: 'someURL3.com',
        id: 'ab3',
        dateCreated: '12-12-16'
      }
    ]

    const mockAction = {
      type: 'REMOVE_EVIDENCE',
      evidence: {
        img: 'someURL.com',
        id: 'ab1',
        dateCreated: '12-12-12'
      }
    }

    const expected = [
      {
        img: 'someURL2.com',
        id: 'ab2',
        dateCreated: '12-12-14'
      },
      {
        img: 'someURL3.com',
        id: 'ab3',
        dateCreated: '12-12-16'
      }
    ]

    const result = evidence(initialState, mockAction)
    
    expect(result).toEqual(expected)
  })
})