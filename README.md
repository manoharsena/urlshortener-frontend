# URL Shortener Web Application

This project consists of a URL shortener web application, providing users with the ability to shorten long URLs into more manageable and shareable links. The application includes both frontend and backend components.

### Frontend

The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces. Here's a breakdown of the frontend components:

#### Components

1. **Registerpage**: Allows users to register for a new account.
2. **LoginPage**: Provides users with the ability to log in to their accounts.
3. **HomePage**: Displays the home page content after successful login.
4. **ForgotPasswordPage**: Allows users to initiate the process of resetting their passwords.
5. **ResetPassword**: Enables users to reset their passwords after receiving a reset link.
6. **UrlShortener**: Component for shortening URLs, accessible to logged-in users.
7. **NavBar**: Navigation bar component for easy navigation between pages.
8. **AdminDashboard**: Dashboard component for administrative tasks and URL management.
9. **CreatedUrls**: Component to display the list of URLs created by the user.
10. **UrlDashboard**: Dashboard component to display URL analytics and statistics.

#### Features

- User authentication and authorization.
- URL shortening functionality.
- User-friendly interface for managing URLs.
- Responsive design for compatibility across different devices.

#### Deployment

The frontend of the application is deployed on Netlify. To view it in browser [Click Here](https://urlshortener-frontend-3411.netlify.app/).

### Backend

The backend of the application is responsible for handling API requests, database operations, and business logic. It's built using Node.js and Express.js, with MongoDB as the database. Here's an overview of the backend components:

#### Components

1. **User Router**: Defines routes for user-related operations such as registration, login, password management, URL shortening, and URL analytics.
2. **User Controller**: Contains the business logic for handling user-related operations.
3. **User Schema**: Defines the MongoDB schema for user data storage.
4. **Auth Middleware**: Middleware for user authentication and authorization.
5. **Database Configuration**: Configures the MongoDB database connection.

#### Features

- User registration and authentication using JWT tokens.
- Password management (forgot password, reset password).
- URL shortening and analytics.
- Role-based access control with an admin dashboard for managing URLs.

#### Deployment

The backend of the application is deployed on Render [Click Here](https://urlshortener-backend-o30n.onrender.com/).

### Repository Links

- Frontend GitHub Repository: [URL Shortener Frontend](https://github.com/manoharsena/urlshortener-frontend.git)
- Backend GitHub Repository: [URL Shortener Backend](https://github.com/manoharsena/urlshortener-backend.git)

### Additional Notes

- Ensure that the backend server is running and accessible before using the frontend application.
- Make sure to set up environment variables or configuration files for both frontend and backend applications as per the provided instructions in their respective README files.
- For any issues or feedback, please open an issue on the GitHub repository.
