import { render, unmountComponentAtNode } from 'react-dom'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { textCover } from '../../constants/playlist'

import TrackInformation from '../../views/TrackInformation'

let container = null
const mock = {
  name: 'Jenny',
  artist: 'Bjork',
  album: 'EL primero',
  artistPageUrl: 'www.pagina.com',
}

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders with params', () => {
  act(() => {
    render(<TrackInformation {...mock} />, container)
  })
  console.log(container.textContent)
  //I have to prepare the format out currency, percent, etc
  const result = Object.assign({}, mock)
  result.artistPageUrl = ' (' + result.artistPageUrl + ')'
  expect(container.textContent).toBe(textCover + Object.values(result).join(''))
})
// make assertions
