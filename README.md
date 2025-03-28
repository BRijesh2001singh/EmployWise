# EmployWise Frontend Assignment
## DEMO
 [Live Demo](#) (https://employ-wise-mu.vercel.app/)
## Overview
This is a React application that integrates with the Reqres API to perform basic user management functions. The application includes authentication, user listing with pagination, and user update/delete functionalities.

## Features
### Level 1: Authentication Screen
- Users can log in using credentials:
  - **Email**: eve.holt@reqres.in
  - **Password**: cityslicka
- Authentication API: `POST /api/login`
- Stores the token upon successful login and redirects to the Users List page.

### Level 2: List All Users
- Fetches and displays users from `GET /api/users?page=1`
- Shows first name, last name, and avatar
- Implements pagination for easy navigation

### Level 3: Edit & Delete Users
- **Edit:**
  - Clicking Edit opens a pre-filled form.
  - Users can update first name, last name, and email.
  - API: `PUT /api/users/{id}`
- **Delete:**
  - Clicking Delete removes the user from the list.
  - API: `DELETE /api/users/{id}`
- Displays success/error messages for all operations

## Tech Stack
- **React.js** (Frontend framework)
- **Axios** (HTTP Requests)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)
- **LocalStorage** (Token Persistence)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/employwise-assignment.git
   cd employwise-assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set environment variables in a `.env` file:
   ```sh
   VITE_API_BASE_URL=https://reqres.in/
   ```
4. Start the application:
   ```sh
   npm run dev
   ```

## Usage
- Navigate to `/login` to authenticate.
- After login, users will be redirected to `/users`.
- Use pagination buttons to navigate through users.
- Click Edit to modify user details and Delete to remove users.

## Additional Features (Bonus Implementations)
- **Client-side search & filtering** on the user list.
- **React Router** for navigation between Login, User List, and Edit User pages.
- **Hosted Version**: [Live Demo](#) (https://employ-wise-mu.vercel.app/)

## Contributing
Feel free to fork this repository and contribute. Create a pull request for any improvements!

## License
This project is open-source and available under the MIT License.

