// import Avatar from '@mui/material/Avatar';
import {useState} from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom';
export function StudentCard({student,id,DeleteStudent}){
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate =useNavigate();
    return(
        <div className="student-container">
            {/* <Avatar alt="Travis Howard" src={student.avatar} /> */}
            <img className="student-image" src={student.avatar} alt={student.name}/>
            <div className="student-content">
            <p><b>NAME:</b>&nbsp;{student.name}</p>
            <p><b>COURSE:</b>&nbsp;{student.course}</p>
            <p><b>BATCH:</b>&nbsp;{student.batch}</p>
            <p><b>CITY:</b>&nbsp;{student.city}</p>
        
            <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      
            <DeleteSharpIcon />
        DELETE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        Are you sure to delete the item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>DeleteStudent(student.id)}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    <IconButton onClick = {()=> {navigate(`/edit-data/${student.id}`)}}>
        <EditIcon/> Edit
    </IconButton>


            </div>
            
        </div>
    )
}