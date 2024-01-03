import express from 'express';
import Connection from './database/db';

Connection();
const app=express();
const PORT=8000;
app.listen(PORT, ()=>console.log(`Server running on PORT ${PORT}`));