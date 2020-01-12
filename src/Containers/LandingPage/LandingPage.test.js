import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage, mapDispatchToProps } from './LandingPage';
import { setNasaImages, setCatImages } from '../../actions';

describe('LandingPage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <LandingPage 
        setNasaImage={setNasaImages} 
        setCatImages={setCatImages}
      />
    )
  })

  describe('Unit Tests', () => {
    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should return an array of cleaned nasa data when cleanData is invoked with nasa', () => {
      const mockDataToClean = {
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

      const expected = [
        {
          img: 'somelink.com',
          id: '12',
          dateCreated: 'dec 12'
        },
        {
          img: 'somelink2.com',
          id: '13',
          dateCreated: 'dec 13'
        }
     ]

     expect(wrapper.instance().cleanData('nasa', mockDataToClean)).toEqual(expected)
    })

    it('should return an cleaned data cat data when cleanData is invoked with cats', () => {
      const mockData = [
        {
            breeds: [],
            categories: [
                {
                    id: 2,
                    name: 'space'
                }
            ],
            id: '4v',
            url: 'someURL.com',
            width: 487,
            height: 500
        }
    ]

      const expected = {
        img: 'someURL.com',
        id: '4v',
        dateCreated: "censored"
      }

      expect(wrapper.instance().cleanData('cats', mockData)).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with images when setNasaImages is invoked', () => {
      const mockDispatch = jest.fn();
      const mockActionToDispatch = setNasaImages([
        {
          img: "nasaimage.com",
          id: "ARC-1983-AC83-0565-1",
          dateCreated: "1983-08-01T00:00:00Z"
        }, 
        {
          img: "nasaimage.com",
          id: "ADC-1934-AC83-0565-3",
          dateCreated: "1977-09-02T00:00:00Z"
        }
      ])
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setNasaImages([
        {
          img: "nasaimage.com",
          id: "ARC-1983-AC83-0565-1",
          dateCreated: "1983-08-01T00:00:00Z"
        }, 
        {
          img: "nasaimage.com",
          id: "ADC-1934-AC83-0565-3",
          dateCreated: "1977-09-02T00:00:00Z"
        }
      ])

      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
    })

    it('calls Dispatch with images when setCatImages is invoked', () => {
      const mockDispatch = jest.fn()
      const mockActionToDispatch = setCatImages([
        {
          breeds: [],
          categories: [],
          id: '58',
          url: 'url.com',
          width: 500,
          height: 500
        },
        {
          breeds: [],
          categories: [],
          id: '78',
          url: 'url2.com',
          width: 400,
          height: 400
        }
      ])
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setCatImages([
        {
          breeds: [],
          categories: [],
          id: '58',
          url: 'url.com',
          width: 500,
          height: 500
        },
        {
          breeds: [],
          categories: [],
          id: '78',
          url: 'url2.com',
          width: 400,
          height: 400
        }
      ])

      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
    })
  })
})