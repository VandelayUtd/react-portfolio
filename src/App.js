import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.component'
import Home from './components/home/home.component.jsx'

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
