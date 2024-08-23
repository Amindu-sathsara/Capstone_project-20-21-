import { BrowserRouter,Route, Routes,} from "react-router-dom";
import Home from "./pages/home/Home";
import Form from "./pages/signupForm/Form"
import ChangeP from "./pages/changePermission/ChangeP"
import Deletion from "./pages/deletionForm/Deletion"
import GetDetails from "./pages/getDetailsForm/GetDetails"
import UpdateF from "./pages/updateForm/UpdateF"
import Navbar from "./components/NavBar";


function App() {

  return (
    
  <BrowserRouter>
  <Navbar />
  
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/changeP" element={<ChangeP/>}/>
      <Route path="/deletion" element={<Deletion/>}/>
      <Route path="/details" element={<GetDetails/>}/>
      <Route path="/update" element={<UpdateF/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
