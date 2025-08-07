import React, { useEffect } from 'react';
import  WorkshopDetail  from './components/WorkshopDetail';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import './App.css';
import AllCoursesPage from './components/AllCoursePage';
import EndodonticCoursePage from './components/EndodonticCoursePage';
import SuccessStories from './components/SuccessStories';
import FacultyPage from './components/FacultyPage';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import FacultyManagement from './admin/FacultyManagement';
import CourseManagement from './admin/CourseManagement';
import OrthodonticsCoursePage from './components/Orthodontics';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
<>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="AllCoursePage" element={<AllCoursesPage />} />
<Route path='EndodonticCoursePage' element={<EndodonticCoursePage/>}/>
<Route path='OrthodonticsCoursePage' element={<OrthodonticsCoursePage/>}/>
<Route path='SuccessStories' element={<SuccessStories/>}/>
<Route path="/faculty" element={<FacultyPage />} />
<Route path="/workshops/:id" element={<WorkshopDetail />} />
{/* <Route path="/faculty/:id" element={<FacultyDetail />} /> */}
<Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="FacultyMangement" element={<FacultyManagement />} />
    <Route path="CourseMangement" element={<CourseManagement />} />
    {/* Add more nested admin routes here */}
  </Route>
</Routes>
</>
  );
}

export default App;
