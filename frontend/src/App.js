import { Route, Routes } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Update from "./Pages/Update";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />

          <Route exact path='/profile' element={<PrivateRoute />}>
            <Route exact path='update/:id' element={<Update/>} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
