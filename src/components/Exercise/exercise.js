import React from 'react';
import { Link } from 'react-router-dom'; 
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Exercise = props => {
  return(
    <TableRow>
      <TableCell>{props.exercise.username}</TableCell>
      <TableCell>{props.exercise.description}</TableCell>
      <TableCell>{props.exercise.duration}</TableCell>
      <TableCell>{props.exercise.date.substring(0,10)}</TableCell>
      <TableCell>
        <Link to={"/edit/" + props.exercise._id}><EditIcon/></Link> 
        <Link to="#" onClick={() => { props.deleteExercise(props.exercise._id) }}> <DeleteForeverIcon/> </Link>
      </TableCell>
    </TableRow>
  )
}

export default Exercise;