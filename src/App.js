import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import AppHeader from './pages/AppHeader';
import AppBody from './pages/AppBody';
import AppFooter from './pages/AppFooter';

// User Defined Tag: <App />
function App() {
  return (
    <>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </>
  );
}



// User Defined Tag: <AppBody />

// User Defined Tag: <AppFooter />


export default App;