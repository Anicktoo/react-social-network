import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';

import './styles/App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='inner-wrapper'>
        <Nav />
        <Profile />
      </div>
    </div>
  )
};

export default App;
