import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";




const getUserAndSave = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (username) {
    throw new ApiError(400, "Invalid Username");
  }

  return res.status(200).json(new ApiResponse(200, {}, ""));
});

const findMutualFollowers = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (username) {
    throw new ApiError(400, "Invalid Username");
  }

  return res.status(200).json(new ApiResponse(200, {}, ""));
});

const updateUser = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (username) {
    throw new ApiError(400, "Invalid Username");
  }

  return res.status(200).json(new ApiResponse(200, {}, ""));
});

const deleteUser = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (username) {
    throw new ApiError(400, "Invalid Username");
  }

  return res.status(200).json(new ApiResponse(200, {}, ""));
});

const searchUsers = asyncHandler(async (req, res) => {

  return res.status(200).json(new ApiResponse(200, {}, ""));
});

const sortUsers = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, {}, ""));
});



export {
  getUserAndSave,
  findMutualFollowers,
  updateUser,
  deleteUser,
  searchUsers,
  sortUsers
}