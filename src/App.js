
import{Route , Routes ,Navigate} from "react-router-dom"
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";
import { AboutMove } from "./components/aboutMove";




function App() {
  const user = localStorage.getItem("token")
  return (
		<Routes>
      
        <Route path='/' exact element={<Home/>}/> 
       {user && <Route path='/' exact element={<Main/>}/> }
       <Route path='/about' exact element={<AboutMove/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/login' exact element={<Login/>}/>
    </Routes>
  );
}

export default App;
