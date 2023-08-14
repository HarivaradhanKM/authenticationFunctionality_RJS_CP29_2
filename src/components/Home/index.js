import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
