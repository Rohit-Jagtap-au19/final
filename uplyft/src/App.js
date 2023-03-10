import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics';
import Products from './pages/Products';
import Company_Dashboard from './pages/company/Company_Dashboard';
import CompanyInternship from './pages/company/CompanyInternship';
import InternshipStudent from './pages/company/InternshipStudent';
import Interview from './pages/Interview';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/dashbaord' element={<Dashboard/>}></Route>
      <Route exact path='/products' element={<Products/>}></Route>
      <Route exact path='/analytics' element={<Analytics/>}></Route>
      <Route exact path='/Companydashboard' element={<Company_Dashboard/>}></Route>
      <Route exact path='/Companyinternship' element={<CompanyInternship/>}></Route>
      <Route exact path='/internshipstudent' element={<InternshipStudent/>}></Route>
      <Route exact path='/videointerview' element={<Interview/>}></Route>


      

      <Route exact path='/settings' element={<Settings/>}></Route>

      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
