import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'
import Footer from './components/Footer'
import './components/myStyles.css'


function App() {
  return (
    <div className="App">
      <div className="mobile-window container centered">
      <Profile />

      <Footer />

      </div>

    </div>
  );
}

export default App;
