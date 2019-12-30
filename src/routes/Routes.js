import React from 'react'
import SongDetail from '../views/SongDetail'
import MusicPlayer from '../views/MusicPlayer'
import NavBar from '../components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'
import ErrorBoundary from '../views/ErrorBoundary'
import Container from '@material-ui/core/Container'
import '../resources/scss/main.scss'

/* Routes */
/* Nav, autentification, error bundle */
function Routes() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
      <Container maxWidth="sm">
        <NavBar className="navBar" name="Music Player from Matzii"></NavBar>
        <Route exact path="/" component={MusicPlayer} />
        <Route path="/detail" component={SongDetail} />
      </Container>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default Routes
