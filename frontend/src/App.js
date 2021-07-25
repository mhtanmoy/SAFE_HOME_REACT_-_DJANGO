import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screen/HomeScreen'
import UserEditScreen from './screen/UserEditScreen'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'


function App() {
  return (
    <Router>
      <Header/>
      <main className="text-center py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/profile' component={ProfileScreen}/>
          <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
