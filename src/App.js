
import{Route , Routes ,Navigate} from "react-router-dom"
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";
import { AboutMove } from "./components/aboutMove";
import Blog1 from "./components/News/blog-1";
import Blog2 from "./components/News/blog-2";
import Blog3 from "./components/News/blog-3";




function App() {
  const user = localStorage.getItem("token")
  return (
		<Routes>
        {user ? <Route path='/' exact element={<Main/>}/> : <Route path='/' exact element={<Home/>}/>}
       <Route path='/about' exact element={<AboutMove/>}/>
       <Route path='/blog1' exact element={<Blog1/>}/>
       <Route path='/blog2' exact element={<Blog2/>}/>
       <Route path='/blog3' exact element={<Blog3/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path={user ?  "/" : "/login"} exact element={<Login/>}/>
    </Routes>
  );
}

export default App;
