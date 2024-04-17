import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

import User from "../models/users.model";

import { fetchGitHubUser } from "../utils/GitHubApi";


const getUserAndSave = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username) {
    throw new ApiError(400, "Invalid Username");
  }

  let user = await User.findOne({ username });

  if (!user) {
    const userData = await fetchGitHubUser(username);

    user = new User({
      username: userData.login,
      location: userData.location,
      blog: userData.blog,
      bio: userData.bio,
      public_repos: userData.public_repos,
      public_gists: userData.public_gists,
      followers: userData.followers,
      following: userData.following,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
    });

    await user.save();
  }
  return res.status(200).json(new ApiResponse(200, user, "User data fetched successfully"));
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