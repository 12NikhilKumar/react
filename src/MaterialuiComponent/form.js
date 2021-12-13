import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import {makeStyles} from '@mui/styles';
import React from 'react';
const useStyles = makeStyles({
    box:{
        display: 'flex',
        flexDirection: 'column',
        gap:'2rem',
        padding: '2rem',
        maxWidth:'400px',
        backgroundColor: 'white',
        color: 'black'
    }
})
export default function Form(){
    const classes = useStyles();
    const [data,setData] = React.useState({
        name:"",
        ismaried: false,
        age: ""
    })
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    return (
        <Box className={classes.box}>
            <TextField varient='outlined' label='name' name="name"  value={data.name} onChange={handleChange}></TextField>
            <label> ismaried
            <Checkbox checked={data.ismaried}  onClick={()=>setData("1")}></Checkbox>
            </label>
            <label>age</label>
            <Select label='Age' name='age' value={data.age} onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twentiy</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Button variant="contained">Submit</Button>
        </Box>
    )
}