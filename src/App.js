import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <AppHeader/>
      <AppBody/>
      <AppFooter/>
    </>
  );
}

function AppHeader(){
  return(
    <>
    <h1>AppHeader</h1>
    </>
  );
}

function AppBody(){
  return(
    <>
    <h1>App Body</h1></>
  );
}

function AppFooter(){
  return(
    <>
    <h1>App Footer</h1></>
  )
}

export default App;