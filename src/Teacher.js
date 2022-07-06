import {useState,useEffect} from 'react';
import { TeacherCard } from './TeacherCard';


export function Teacher (){
    const [teacherlist,setTeacherList] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
      };


    const getteacherList = () => {
        fetch ('https://628f1cf00e69410599d56201.mockapi.io/Teacher',{method: "GET"})
        .then((data) => data.json())
        .then((result)=> setTeacherList(result))
    }

    useEffect(()=>{getteacherList()},[])
    // console.log(studentlist);

    const Deleteteacher = (id) => {
       handleClose();
        fetch(`https://628f1cf00e69410599d56201.mockapi.io/Teacher/${id}`,{method: "DELETE"})
        .then((data) => data.json())
        .then(()=>getteacherList())
    }

    return (
        <div className='container'>
{teacherlist.map((ele,index)=> <TeacherCard id={ele.id} teacher={ele} key={index} Deleteteacher={Deleteteacher}/>)}
        </div>
    )
}