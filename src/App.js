import { Route, Routes} from 'react-router-dom'
import {LandingPage, WorkPage, About, Git, More} from './components/Pages';

import './App.css';

function App() {
  return (
    <>

    

    <Routes>
      <Route path="/"  element={ <LandingPage/>} />
      <Route path="/Work" element={ <WorkPage/>}/>
      <Route path="/About" element={ <About/>}/>
      <Route path="/Git" element={ <Git/>}/>
      <Route path="/More" element={ <More/>}/>
    </Routes>

    </>
  );
}

export default App;


