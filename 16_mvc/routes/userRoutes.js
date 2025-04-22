import express from 'express';
import { allUsers, createUser, getUser, updateUser, deleteUser } from '../controllers/userControllers.js';

const router = express.Router();

// Create Users
router.post("/create-user", createUser);
// Get All Users
router.get("/all-users", allUsers);
// Get Single User
router.get("/all-users/:id", getUser);
// Update User 
router.patch("/all-users/:id", updateUser);
// Delete User
router.delete("/all-users/:id", deleteUser)


export default router;