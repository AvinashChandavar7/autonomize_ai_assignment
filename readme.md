# Autonomize Ai

- [Swagger API Link](https://autonomize-ai-assignment.onrender.com/api-docs/)

- [Deployed link]()

## Project Documentation

#### Project Overview

**Autonomize Ai** is a comprehensive web application designed to interact with GitHub's API

And provide a streamlined user experience for viewing GitHub repositories, followers, and mutual connections.

It comprises two main components: a backend server that interacts with the GitHub API and a database to store user data, and a frontend application that presents this data to the user in a user-friendly manner.

#### Technical Stack

**MERN Stack**:

This project utilizes the MERN stack, which includes:

- **MongoDB**: A NoSQL database used to store user data fetched from the GitHub API.
- **Express.js**: A web application framework for Node.js, used to build the backend API that serves the frontend application and interacts with the database.
- **React**: A JavaScript library for building the user interface of the frontend application. It uses hooks for state management and functional components.
- **Node.js**: The runtime environment for running the JavaScript code on the server side.

#### Swagger UI

- [Swagger API Links](https://autonomize-ai-assignment.onrender.com/api-docs/)

#### Backend API Endpoints

1. **Save GitHub User Data**

   - **Endpoint**: `POST /api/v1/users`
   - **Description**: Accepts a GitHub username, fetches the user's details from the GitHub API, and saves it to the database. If the user's data already exists, it prevents re-fetching from the GitHub API.

2. **Find and Save Mutual Friends**

   - **Endpoint**: `POST /api/v1/users/:username/friends`
   - **Description**: For a given user, identifies mutual followers (friends) and saves this relationship in the database.

3. **Update User Details**

   - **Endpoint**: `PATCH /api/v1/users/:username`
   - **Description**: Updates fields like "location", "blog", "bio", etc., for a given user in the database.

4. **Soft Delete User**

   - **Endpoint**: `DELETE /api/v1/users/:username`
   - **Description**: Soft deletes a user's data from the database based on the provided username.

5. **Search Saved Data**

   - **Endpoint**: `GET /api/v1/users/search`
   - **Description**: Allows searching the database for users based on username, location, and other criteria.

6. **Sort Saved Users**
   - **Endpoint**: `GET /api/v1/users/sorted`
   - **Description**: Returns a list of all sorted users from the database, with the option to sort by various fields like "public_repos", "followers", etc.

## Frontend Documentation

### Technologies

- React.js : building user interfaces,
- React Router : client-side routing,
- Redux Toolkit : efficient state management,
- RTK Query : data-fetching and caching.

### Pages

1. **Home Page**

   - Route: `/`
   - Component: `<HomePage />`
   - Description: The initial page with an input box for entering a GitHub username and a submit/search button.

2. **User Repositories Page**

   - Route: `/user/:username/repos`
   - Component: `<RepositoryListPage />`
   - Description: Displays the list of repositories for the user entered on the home page. Also includes user information and a button/link to view the user's followers.

3. **Repository Details Page**

   - Route: `/user/:username/repos/:repoName`
   - Component: `<RepositoryDetailsPage />`
   - Description: Displays details about a specific repository when clicked from the repository list page.

4. **User Followers Page**
   - Route: `/user/:username/followers`
   - Component: `<FollowersPage />`
   - Description: Displays the list of followers for a specific GitHub user. Clicking on a follower navigates to their repository list page.

### Additional Pages

- Error Page: Displayed when there's an error fetching data from the GitHub API or when the user enters an invalid username.

---

## Assessments

Following is an API which gives GitHub data

Request Type: GET

```
https://api.github.com/users/:username
```

```
Eg: https://api.github.com/users/mralexgray
```

**Build the backend app that supports below APIs:**

1. Accept any GitHub username and save details from the GitHub API into the database. If
   a user’s data is already available in the database, do not call the GitHub API again.
2. For a given user, find all the users where users mutually follow each other and save
   them as friends. Eg: UserA ->; Follows UserB, UserC, UserD; UserA follows back by
   UserB, UserC. So, UserB and UserC would be friends of UserA
3. Search the saved data from the database based on username, location etc.
4. Soft delete a record based on a given username from the database.
5. Update fields like “location”, “blog”, “bio” etc for a given user in the database.
6. Return list of all users from the database sorted by given fields like “public_repos”,
   “public_gists”, “followers”, “following”, “created_at” etc.

Bonus points:

- Implement validation for API endpoint
- Use TypeScript
  Important Notes:
- Submit the code by pushing repository to GitHub or any hosting platform of your
- choice. Maintaining a reasonable commit history is recommended.
- Use only NodeJs, ExpressJS and any Database (preferably Relational Database).

#### FRONTEND

Requirements:

1. An initial page with a input box that accepts a GitHub username and a submit/search button.

2. On submit, show the list of repositories returned from above API (See image 1) for the username entered in the input box. Display some useful user info above the repository list. (Design not given in image1)

3. Clicking on any of the repositories should take us to a page which shows description about that repository (See image 2).

4. Also on the repository list page near the user info, add a button / link that should lead to a page with followers of the current user. (Design not given, you are free to choose any simple design or you may follow a design similar to the repository list)

5. Clicking on any follower should display the repository list page of that user

6. Also there has to be a way to go back to the repository list page with the input box

**_Important Notes:_**

1. Use only React hooks to build the app.
2. You may use Redux or store everything in React, structure your code appropriately
3. For any images use owner.avatar_url
4. Don’t call the GitHub API again for any information you already have. Eg. Do not make
5. API call again in the repository details page. Do not make API call again to get
6. repositories or followers info for a user if that info has already been fetched earlier for
7. that user.
8. For the pages with design images given, try to style it as close as possible to the given
9. images in terms of layout and presentation but beautification is not important
10. Do not use any CSS/UI frameworks
11. You do not need to manage browser history i.e all the pages can be on the same url
12. Submit the code by pushing repository to GitHub or any hosting platform of your choice.
13. Maintaining a reasonable commit history is recommended.
