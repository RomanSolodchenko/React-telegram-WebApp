import './App.css';
import Logo from './components/pages/logotip/Logo'
import Main from './components/pages/main/Main'
import NavigationMenu from './components/pages/navigation_menu/NavigationMenu';
function App() {

  return (
    <div className="App">
<Logo/>
<NavigationMenu/>
    <Main/>

      </div>
  );
}

export default App;
