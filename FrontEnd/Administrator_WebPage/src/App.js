import { BrowserRouter,Route, Routes,} from "react-router-dom";
import Home from "./pages/home/Home";
import Form from "./pages/signupForm/Form";
import ChangeP from "./pages/changePermission/ChangeP";
import Deletion from "./pages/deletionForm/Deletion";
import GetDetails from "./pages/getDetailsForm/GetDetails";
import UpdateF from "./pages/updateForm/UpdateF";
import CCreate from "./pages/childCreate/CCreate";
import COption from "./pages/childOptionPage/COption";
import ChildDelete from "./pages/childOptionForms/ChildDelete"
import ChildUpdate from "./pages/childOptionForms/ChildUpdate";
import ChildGetDetails from "./pages/childOptionForms/ChildGetDetails";
import UserDetailsPage from "./pages/getDetailsForm/UserDetailsPage";
import ChildDetails from "./pages/childOptionForms/ChildDetails";
import About from "./pages/navPages/About";
import ContactUs from "./pages/navPages/contactUs/ContactUs";
import LearnMore from "./pages/learnMore/LearnMore";




function App() {

  return (

  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/changeP" element={<ChangeP/>}/>
      <Route path="/deletion" element={<Deletion/>}/>
      <Route path="/details" element={<GetDetails/>}/>
      <Route path="/update" element={<UpdateF/>}/>
      <Route path="/cCreate" element={<CCreate/>}/>
      <Route path="/cOption" element={<COption/>}/>
      <Route path="/cDelete" element={<ChildDelete/>}/>
      <Route path="/cUpdate" element={<ChildUpdate/>}/>
      <Route path="/cGetDetails" element={<ChildGetDetails/>}/>
      <Route path="/user-details" element={<UserDetailsPage/>}/>
      <Route path="/child-details" element={<ChildDetails/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/learnMore" element={<LearnMore/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
