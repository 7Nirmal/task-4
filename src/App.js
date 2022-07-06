import {Routes,Route,useNavigate} from 'react-router-dom';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Home} from './Home'
import {Student} from './Student';
import {EditData} from './EditData'
import {AddStudent} from './AddStudent';
import {Teacher} from './Teacher';
import {AddTeacher} from './AddTeacher';
import {EditTeacherData} from './EditTeacherData';


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>{navigate("/home")}}>Home</Button>
          <Button color="inherit" onClick={()=>{navigate("/student")}}>Student</Button>
          <Button color="inherit" onClick={()=>{navigate("/student/add")}}>Add Student</Button>        
          <Button color="inherit" onClick={()=>{navigate("/teacher")}}>Teacher</Button>
          <Button color="inherit" onClick={()=>{navigate("/teacher/add")}}>AddTeacher</Button>

  
        </Toolbar>
      </AppBar>
    </Box>
    <Routes>
    <Route path="/" element = {<Home/>}/>

      <Route path="/home" element = {<Home/>}/>
      <Route path="/student" element = {<Student/>}/>
      
      <Route path="/edit-data/:id" element = {<EditData/>}/>
      <Route path="/student/add" element = {<AddStudent/>}/>
      <Route path="/teacher" element = {<Teacher/>}/>
      <Route path="/teacher/teacher/edit-data/:id" element = {<EditTeacherData/>}/>
      <Route path="/teacher/add" element = {<AddTeacher/>}/>




    </Routes>

    </div>
  );
}

export default App;
