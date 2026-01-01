import { BrowserRouter , Routes , Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import Listing from "./pages/Listing";


export default function App(){
  return(
  <BrowserRouter>
      
        <Routes>

          {/* <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
          <Route path='/listing/:listingId' element={<Listing />} />
  
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/create-listing' element={<CreateListing />} />
            <Route
              path='/update-listing/:listingId'
              element={<UpdateListing />}
            />
          </Route> */}
          <Route path='/'  element={<Home />} />
          <Route path='/sign-in'  element={<SignIn />} />
          <Route path='/sign-up'  element={<SignUp />} />


        </Routes>
      </BrowserRouter>



  );
}
