import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import NotFount from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFount} />
  </Switch>
)

export default App
