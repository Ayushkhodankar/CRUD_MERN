import './App.css';

import NavBar from './components/NavBAr';
import CodeInMern from './components/CodeInMern';
import AllUsers from './components/AllUsers';
import AddUser  from './components/AddUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element={<CodeInMern/>}/>
      <Route path='/all' element={<AllUsers/>}/>
      <Route path='/add' element={<AddUser/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
