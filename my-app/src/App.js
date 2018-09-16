import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const PTSD = () => (
  <div>
    <h2>PTSD</h2>
  </div>
)

const Depression = () => (
  <div>
    <h2>Depression</h2>
  </div>
)

const Substance = () => (
  <div>
    <h2>Substance Abuse</h2>
  </div>
)

const Suicide = () => (
  <div>
    <h2>Suicide</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/PTSD">PTSD</Link></li>
        <li><Link to="/Depression">Depression</Link></li>
        <li><Link to="/Substance">Substance Abuse</Link></li>
        <li><Link to="/Suicide">Suicide</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/PTSD" component={PTSD}/>
      <Route path="/Depression" component={Depression}/>
      <Route path="/Substance" component={Substance}/>
      <Route path="/Suicide" component={Suicide}/>

    </div>
  </Router>
)
export default App;
