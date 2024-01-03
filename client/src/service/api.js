import axios from 'axios';

const URl='';

export const addUser = async(data) => {
try{
return await axios.post(`${URL}/add`,data);
}catch(error){
console.log('Errorrrrrr...',error)
}
}