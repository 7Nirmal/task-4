import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddStudent (){
const [name,setName] = useState("");
const [avatar,setAvatar] = useState("");
const [course,setCourse] = useState("");
const [batch,setBatch] = useState("");
const[city,setCity] = useState("");
const navigate = useNavigate();

const Adddata = () => {
    const newdata = {name:name,avatar:avatar,course:course,batch:batch,city:city};
    fetch ("https://628f1cf00e69410599d56201.mockapi.io/student",{method: "POST",body: JSON.stringify(newdata),headers: {'Content-Type': 'application/json'}})
    .then(data => data.json())
    .then(() => {navigate("/student")})
}


    return (
        <div className="student-form">
            <TextField  value={name}   label="Name" variant="outlined"  onChange={(event)=>{setName(event.target.value)}}/>
 <TextField value={avatar}  label= "pic" variant="outlined" onChange={(event)=>{setAvatar(event.target.value)}} />
<TextField value={course} onChange={(event)=>{setCourse(event.target.value)}} label="course" variant="outlined"   />
<TextField value={batch}   onChange={(event)=>{setBatch(event.target.value)}} label="batch" variant="outlined"  />
<TextField value={city}   onChange={(event)=>{setCity(event.target.value)}} label="city" variant="outlined"  />

<Button variant="outlined" onClick= {Adddata}>ADD</Button>
        </div>
    )
}
