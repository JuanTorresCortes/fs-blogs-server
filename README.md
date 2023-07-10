# Blogging Application Backend

This is the backend code for the blogging application. It is built using Express.js and MongoDB as the database. The backend handles the routing, middleware, and error handling for the application.

## Technology Stack

- Express: A fast and minimalist web application framework for Node.js.
- MongoDB: A NoSQL document database for storing blog data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Folder Structure

The backend code follows a typical structure:

- `db`: Contains the MongoDB connection setup.
- `routes`: Contains the route handler modules for different routes.
- `views`: Contains the view templates for rendering error pages.
- `public`: Contains static files served by Express.
- `models`: Contains the Mongoose models for interacting with the MongoDB database.
- `controller`: Contains the controller modules for handling business logic.
- `app.js`: The main entry point of the backend code.

## Setup and Configuration

To set up the backend code:

1. Install the required dependencies by running `npm install`.
2. Configure the MongoDB connection by setting the appropriate environment variables, such as `ATLAS_URI`, in a `.env` file.
3. Start the server by running `npm start`.

## MongoDB Connection

The backend code uses Mongoose to connect to a MongoDB database. The connection is established by calling the `mongoose.connect()` function with the provided Atlas URI. The MongoDB connection setup can be found in the `db` directory.

## Models and Schemas

The backend code defines the following Mongoose model and schema:

- `Blog`: Represents a blog post in the application. It has properties such as `_id`, `title`, `author`, `content`, and `lastModified`. The `Blog` model is defined in the `models` directory.

## Controllers

The backend code includes controller modules for handling business logic. The controllers can be found in the `controller` directory. The following controllers are available:

- `createBlog`: Handles the creation of a new blog post.
- `allBlogs`: Retrieves all blog posts.

## Endpoints and Route Handlers

The backend code defines the following endpoints and route handlers:

- `/`: Renders the home page with the title "Express".
- `/all-blogs`: Retrieves all blog posts.
- `/new-blog`: Creates a new blog post.

Each route handler module defines the logic for handling requests and generating responses for specific routes. The route handlers can be found in the `routes` directory.

## Middleware

The backend code uses the following middleware:

- `logger`: Logs HTTP requests to the console.
- `express.json()`: Parses incoming request bodies in JSON format.
- `express.urlencoded()`: Parses incoming request bodies in URL-encoded format.
- `cookie-parser`: Parses cookie headers and populates `req.cookies` with an object keyed by the cookie names.
- `static`: Serves static files from the `public` directory.
- `cors`: Enables Cross-Origin Resource Sharing (CORS).

## Error Handling

The backend code includes error handling for handling 404 (Not Found) errors and other application errors. The error handler middleware is defined in the `app.js` file and renders the error pages located in the `views` directory.
