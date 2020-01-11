import { getNasaImages } from '../utils/apiCalls';

describe('apiCalls', () =>  {

  describe('getNasaImages', () => {
    let mockResponse = {
      collection: {
        items: [
          {
            links: [{rel: 'preview', href: 'somelink.com'}],
            data: [{keywords: [], date_created: 'dec 12', nasa_id: '12'}]
          },
          {
            links: [{rel: 'preview', href: 'somelink2.com'}],
            data: [{keywords: [], date_created: 'dec 13', nasa_id: '13'}]
          }
        ]
      }
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      getNasaImages()

      expect(window.fetch).toHaveBeenCalledWith('https://images-api.nasa.gov/search?keywords=galaxy&media_type=image')
    })

    it('should return an object containing the images and info', () => {
      expect(getNasaImages()).resolves.toEqual(mockResponse)
    })

    it('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getNasaImages()).rejects.toEqual(Error('error fetching nasa images'))
    })

    it('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      })

      expect(getNasaImages()).rejects.toEqual(Error('fetch failed'))
    })
  })
})