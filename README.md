## User Management API Documentation
Welcome to the User Management API documentation. This API allows you to manage users within your application. Below, you'll find detailed information on how to interact with the API endpoints. <br>
> Start by using `npm run dev`
# Overview
The User Management API provides endpoints for performing CRUD operations on users. It allows you to create, retrieve, update, and delete user data.
# Base URL
The base URL for accessing the API is: <br>
> http://localhost:3000/users
# Endpoints
# Get All Users
GET /users <br>
Returns a list of all users in the system.
![2024-04-08 (1)](https://github.com/Sandeepmopidevi/User-Management-Backend-System/assets/67825641/4f3d2b52-dca8-447a-8a3f-cd64f6602d7c)

# Get User by ID
GET /users/{id} <br>
Returns the user with the specified ID.
![2024-04-08 (2)](https://github.com/Sandeepmopidevi/User-Management-Backend-System/assets/67825641/57034f2b-f033-46b9-aad0-3453855b3485)

# Create User
POST /users <br>
Creates a new user.
![2024-04-08 (3)](https://github.com/Sandeepmopidevi/User-Management-Backend-System/assets/67825641/cbe0b295-27bd-440a-8bc7-6dce49fdf962)

# Update User
PUT /users/{id} <br>
Updates the user with the specified ID.
# Delete User
DELETE /users/{id} <br>
Deletes the user with the specified ID.
![2024-04-08](https://github.com/Sandeepmopidevi/User-Management-Backend-System/assets/67825641/88ad10e3-a0ed-4271-8c90-59b3c25084d2)

# Response Codes
•	200 OK: Successful request. <br>
•	201 Created: User successfully created. <br>
•	204 No Content: User successfully updated or deleted. <br>
•	400 Bad Request: Invalid request format. <br>
•	401 Unauthorized: Authentication failed. <br>
•	404 Not Found: User not found. <br>
•	500 Internal Server Error: The server encountered an error.
