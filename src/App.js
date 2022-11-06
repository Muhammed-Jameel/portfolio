import { Link, Route, Routes} from 'react-router-dom'
import {LandingPage, WorkPage, About, Git, More} from './components/Pages';

import './App.css';

function App() {
  return (
    <>

    

    <Routes>
      <Route path="/"  element={ <Link to='/portfolio' />} />
      <Route path="/portfolio"  element={ <LandingPage/>} />
      <Route path="/portfolio/Work" element={ <WorkPage/>}/>
      <Route path="/portfolio/About" element={ <About/>}/>
      <Route path="/portfolio/Git" element={ <Git/>}/>
      <Route path="/portfolio/More" element={ <More/>}/>
    </Routes>

    </>
  );
}

export default App;


