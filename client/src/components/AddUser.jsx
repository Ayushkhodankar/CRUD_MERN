import { FormGroup, FormControl, InputLabel,Input ,Typography,styled, Button} from '@mui/material';
import { useState } from 'react';
import {addUser} from '../service/api';
const Container=styled(FormGroup)`
width: 50%;
margin: 5% auto auto auto;
& > div{
    margin-top: 20px;
}
`
const defaultValue ={
    name:'',
    username:'',
    email:'',
    mobile:''
}

const AddUser= () => {

    const[user,setUser]=useState(defaultValue);

    const onValueChange=(e)=>{
        console.log(e.target.name, e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
    }

    const addUserDetails= async()=>{
await addUser(user);
    }
    return(
<Container>
    <FormControl>
        <Typography variant="h4">Add User</Typography>
    </FormControl>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="name"/>
    </FormControl> 
    <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username"/>
    </FormControl>
    <FormControl>
        <InputLabel>E-Mail</InputLabel>
        <Input onChange={(e)=>onValueChange(e)}name='email'/>
    </FormControl>
    <FormControl>
        <InputLabel>Mobile No.</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="mobile"/>
    </FormControl>
    <FormControl>
        <Button variant="contained" onClick={()=> addUserDetails()}>Add User</Button>
    </FormControl>
</Container>
    )
}
export default AddUser;
