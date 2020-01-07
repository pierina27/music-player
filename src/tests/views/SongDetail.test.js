import * as React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { textCover } from '../../constants/playlist'

import SongDetail from '../../views/SongDetail'

let container = null
let props = {
  location: {
    state: {
      user_name: 'name',
      user_real_name: 'artist',
      upload_name: 'album',
      artist_page_url: 'artistPageUrl',
    },
  },
}

props.location.state = JSON.stringify(props.location.state)

const noParams = {
  name: 'Unvailable',
  artist: 'Unvailable',
  album: 'Unvailable',
  artistPageUrl: 'Unvailable',
}

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('Receive and show params in components - SongDetails', () => {
  act(() => {
    render(<SongDetail {...props} />, container)
    let result = { ...JSON.parse(props.location.state) }

    result.artist_page_url = ' (' + result.artist_page_url + ')'
    expect(container.textContent).toBe(
      textCover + Object.values(result).join('')
    )
  })
})

it('Render without params in components - SongDetails', () => {
  act(() => {
    render(<SongDetail />, container)
    noParams.artistPageUrl = ' (' + noParams.artistPageUrl + ')'
    expect(container.textContent).toBe(
      textCover + Object.values(noParams).join('')
    )
  })
})
