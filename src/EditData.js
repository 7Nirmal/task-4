import { useParams,useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export function EditData(){
    const {id} = useParams();
    // console.log(id);
    const [studentlist,setStudentList] = useState(null);

    const getStudentList = () => {
        fetch (`https://628f1cf00e69410599d56201.mockapi.io/student/${id}`,{method: "GET"})
        .then((data) => data.json())
        .then((result)=> setStudentList(result))
    }

    useEffect(()=>getStudentList(),[])
    return studentlist ? <EditStudentList data={studentlist}/> : "Loading..."
}

function EditStudentList ({data}){
const [name,setName] = useState(data.name);
const [avatar,setAvatar] = useState(data.avatar);
const [course,setCourse] = useState(data.course);
const [batch,setBatch] = useState(data.batch);
const[city,setCity] = useState(data.city);
const navigate = useNavigate();

const Editdata = () => {
    const edited = {name:name,avatar:avatar,course:course,batch:batch,city:city};
    fetch (`https://628f1cf00e69410599d56201.mockapi.io/student/${data.id}`,{method: "PUT",body: JSON.stringify(edited),headers: {'Content-Type': 'application/json'}})
    .then(() => {navigate("/student")})
}


    return (
        <div className="student-form">
            <TextField  value={name}   label="Name" variant="outlined"  onChange={(event)=>{setName(event.target.value)}}/>
 <TextField value={avatar}  label= "pic" variant="outlined" onChange={(event)=>{setAvatar(event.target.value)}} />
<TextField value={course} onChange={(event)=>{setCourse(event.target.value)}} label="course" variant="outlined"   />
<TextField value={batch}   onChange={(event)=>{setBatch(event.target.value)}} label="batch" variant="outlined"  />
<TextField value={city}   onChange={(event)=>{setCity(event.target.value)}} label="city" variant="outlined"  />

<Button variant="outlined" onClick= {Editdata} color="success">SAVE</Button>
        </div>
    )
}
