// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import './App.css';

import Logo from './components/pages/logotip/Logo';
import NavMenu  from './components/pages/navigation/NavigationMenu';
import NavigationSocials from './components/pages/navigation_socials/NavigationSocials';
import Main from './components/pages/main/Main';
import Footer from './components/pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <Logo/>
<NavMenu/>
<NavigationSocials/>
<Main/>
<Footer/>
      </div>
  );
}

export default App;
