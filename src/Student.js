import {useState,useEffect} from 'react';
import { StudentCard } from './StudentCard';



export function Student (){
    const [studentlist,setStudentList] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
      };

    const getStudentList = () => {
        fetch ('https://628f1cf00e69410599d56201.mockapi.io/student',{method: "GET"})
        .then((data) => data.json())
        .then((result)=> setStudentList(result))
    }

    useEffect(()=>{getStudentList()},[])
    // console.log(studentlist);

    const DeleteStudent = (id) => {
        handleClose();
        fetch(`https://628f1cf00e69410599d56201.mockapi.io/student/${id}`,{method: "DELETE"})
        .then((data) => data.json())
        .then(()=>getStudentList())
    }

    return (
        <div className='container'>
{studentlist.map((ele,index)=> <StudentCard id={ele.id} student={ele} key={index} DeleteStudent={DeleteStudent}/>)}
        </div>
    )
}