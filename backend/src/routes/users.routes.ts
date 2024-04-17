import { Router } from "express";


import {
  getUserAndSave,
  findMutualFollowers,
  updateUser,
  deleteUser,
  searchUsers,
  sortUsers
} from "../controllers/users.controller";


const router = Router();

router.get('/:username', getUserAndSave);

router.get('/:username/friends', findMutualFollowers);

router.patch('/:username', updateUser);
router.delete('/:username', deleteUser);

router.get('/search', searchUsers);
router.get('/sorted', sortUsers);

export default router;
