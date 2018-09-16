import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

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
  <AppBar position="static">
      <Toolbar>
        <Router>
          <div>
          <List component="nav">
          <ListItem button>
            <Link to="/">
                <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/PTSD">
                <ListItemText primary="PTSD" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/Depression">
                <ListItemText primary="Depression" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/substance">
                <ListItemText primary="Substance Abuse" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/Suicide">
                <ListItemText primary="Suicide" />
            </Link>
          </ListItem>
          </List>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/PTSD" component={PTSD}/>
            <Route path="/Depression" component={Depression}/>
            <Route path="/substance" component={Substance}/>
            <Route path="/Suicide" component={Suicide}/>

          </div>
        </Router>
      </Toolbar>
  </AppBar>
)
export default App;
