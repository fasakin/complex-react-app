import React, {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import HomeGuest from './components/HomeGuest'
import Footer from './components/Footer'
import About from './components/About'
import Terms from './components/Terms'
import Home from '../app/components/Home'
import CreatePost from './components/CreatePost'
import Axios from 'axios'
import ViewSinglePost from './components/ViewSinglePost'
import FlashMessage from './components/FlashMessages'
import RootContext from './context/Context'


Axios.defaults.baseURL = 'http://localhost:8080'

function Main() {

  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('complexappToken')))
  const [flashMessages, setFlashMessage] = useState([])

  const addFlashMessage = msg => {
    setFlashMessage(state => state.concat(msg))
  }




  return (
    <RootContext.Provider value = {{addFlashMessage, setLoggedIn, loggedIn}} >
    <BrowserRouter>
    <FlashMessage messages={flashMessages}/>
    <Header/>
    <Switch>
      <Route path ="/" exact>
        {loggedIn ? <Home/> : <HomeGuest/>}
      </Route>
      <Route path="/post/:id">
      <ViewSinglePost/>
      </Route>
      <Route path = "/create-post">
      <CreatePost/>
      </Route>
      <Route path ="/about-us">
        <About/>
      </Route>
      <Route path ="/terms" exact>
        <Terms/>
      </Route>
    </Switch>
    <Footer/>
    </BrowserRouter>
    </RootContext.Provider>
  )
}



// ReactDOM.render(<Main/>, document.getElementById('app'))


if(module.hot) {
  module.hot.accept()
}