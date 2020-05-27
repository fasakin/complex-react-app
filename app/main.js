import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import HomeGuest from './components/HomeGuest'
import Footer from './components/Footer'
import About from './components/About'
import Terms from './components/Terms'

function Main() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path ="/" exact>
        <HomeGuest/>
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
  )
}



ReactDOM.render(<Main/>, document.getElementById('app'))


if(module.hot) {
  module.hot.accept()
}