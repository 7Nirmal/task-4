import { useParams,useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export function EditTeacherData(){
    const {id} = useParams();
    // console.log(id);
    const [teacherlist,setTeacherList] = useState(null);
    const getteacherList = () => {
        fetch (`https://628f1cf00e69410599d56201.mockapi.io/Teacher/${id}`,{method: "GET"})
        .then((data) => data.json())
        .then((result)=> setTeacherList(result))
    }

    useEffect(()=>getteacherList(),[])

   
    return teacherlist ? <EditTeacherList data={teacherlist}/> : "Loading..."
}

function EditTeacherList ({data}){
const [name,setName] = useState(data.name);
const [avatar,setAvatar] = useState(data.avatar);
const [email,setEmail] = useState(data.email);
const[city,setCity] = useState(data.city);
const navigate = useNavigate();

const Editeddata = () => {
    const Editeddata = {name:name,avatar:avatar,email:email,city:city};
    fetch (`https://628f1cf00e69410599d56201.mockapi.io/Teacher/${data.id}`,{method: "PUT",body: JSON.stringify(Editeddata),headers: {'Content-Type': 'application/json'}})
    .then(() => {navigate("/teacher")})
}


    return (
        <div className="teacher-form">
<TextField  value={name}   label="Name" variant="outlined"  onChange={(event)=>{setName(event.target.value)}}/>
 <TextField value={avatar}  label= "pic" variant="outlined" onChange={(event)=>{setAvatar(event.target.value)}} />
<TextField value={email} onChange={(event)=>{setEmail(event.target.value)}} label="email" variant="outlined"   />
<TextField value={city}   onChange={(event)=>{setCity(event.target.value)}} label="city" variant="outlined"  />
<Button variant="outlined" onClick= {Editeddata} color="success">SAVE</Button>
     </div>
    )
}
 