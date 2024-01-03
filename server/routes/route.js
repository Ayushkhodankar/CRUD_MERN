import express from 'express';
import { addUser } from '../controller/user-controller.js';

const Routes=express.Router();

Routes.post('/add', addUser)

export default Routes;