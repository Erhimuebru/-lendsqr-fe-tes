import './App.css'
import { Route, Routes } from 'react-router-dom';
import USERSDASHBOARD from './components/pages/userDashboard/usersDashboard';
import Login from './components/pages/loginPage/login';
import UsersDetails from './components/pages/userDetails/usersDetails';


const App = () => {
  return (
    <main className="App">
       <Routes>
             <Route path='/' element={<Login/> }/>
             <Route path='/dashboard' element={ <USERSDASHBOARD/>}/>
             <Route path='/user-details' element={ <UsersDetails/>}/>
        </Routes>

    </main>
  );
}

export default App;
