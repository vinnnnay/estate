import { BrowserRouter , Routes , Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Header from "./components/Header";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import Listing from "./pages/Listing";


export default function App(){
  return(
  <BrowserRouter>
     <Header />
        <Routes>

           
          <Route path='/'  element={<Home />} />
          <Route path='/sign-in'  element={<SignIn />} />
          <Route path='/sign-up'  element={<SignUp />} />


        </Routes>
      </BrowserRouter>



  );
}
