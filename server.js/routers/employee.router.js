import express from 'express';
import multer from 'multer'
import { createEmployee } from '../controllers/employee.controller.js';

const router = express.Router();


const upload = multer();

router.post('/createE',upload.none(),createEmployee)

export {router}