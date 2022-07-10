const express=require('express');
const path=require('path');
const router=express.Router();
const usersController=require('../controllers/user_controller');

router.get('/profile',usersController.profile);
console.log('router loaded');
module.exports=router;