import { getNasaImages, getCatsInSpace } from '../utils/apiCalls';

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

  describe('getCatsInSpace', () => {
    let mockResponse = [
      {
          "breeds": [],
          "categories": [
              {
                  "id": 2,
                  "name": "space"
              }
          ],
          "id": "5ht",
          "url": "https://cdn2.thecatapi.com/images/5ht.jpg",
          "width": 667,
          "height": 500
      }
    ]

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      const mockOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '830d5d50-e96d-404e-ab7a-870d94a52a8f',
        }
      }
      getCatsInSpace()

      expect(window.fetch).toHaveBeenCalledWith('https://api.thecatapi.com/v1/images/search?category_ids=2', mockOptions)
    })

    it('should return a cat', () => {
      expect(getCatsInSpace()).resolves.toEqual(mockResponse)
    })

    it('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getCatsInSpace()).rejects.toEqual(Error('error fetching cats in space'))
    }) 

    it('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      })

      expect(getCatsInSpace()).rejects.toEqual(Error('fetch failed'))
    })
  })
})