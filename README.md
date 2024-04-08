# User Management API Documentation
Welcome to the User Management API documentation. This API allows you to manage users within your application. Below, you'll find detailed information on how to interact with the API endpoints.
# Overview
The User Management API provides endpoints for performing CRUD operations on users. It allows you to create, retrieve, update, and delete user data.
# Base URL
The base URL for accessing the API is:
http://localhost:3000/users
Endpoints
Get All Users
GET /users 
Returns a list of all users in the system.
Get User by ID
GET /users/{id} 
Returns the user with the specified ID.
Create User
POST /users 
Creates a new user.
Update User
PUT /users/{id} 
Updates the user with the specified ID.
Delete User
DELETE /users/{id} 
Deletes the user with the specified ID.
Response Codes
•	200 OK: Successful request.
•	201 Created: User successfully created.
•	204 No Content: User successfully updated or deleted.
•	400 Bad Request: Invalid request format.
•	401 Unauthorized: Authentication failed.
•	404 Not Found: User not found.
•	500 Internal Server Error: Server encountered an error.

