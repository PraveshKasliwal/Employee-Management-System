# Employee Management System

A full-stack web application for managing employee records, built with the MERN stack (MongoDB, Express.js, React, Node.js). The application provides a clean, user-friendly interface for performing CRUD (Create, Read, Update, Delete) operations, along with real-time search functionality.



## ✨ Features

* **View All Employees**: Displays a list of all employees in a clean, organized table.
* **Add New Employee**: A modal form allows for the easy addition of new employee records.
* **Edit Employee Details**: Update an existing employee's information through the same modal form.
* **Delete Employee**: Remove an employee from the database with a confirmation prompt.
* **Real-time Search**: Dynamically filter employees by name, email, or position as you type.

***

## 🛠️ Tech Stack

* **Frontend**: React, Axios, React Icons
* **Backend**: Node.js, Express.js
* **Database**: MongoDB with Mongoose
* **Styling**: Custom CSS

***

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

* Node.js (v14 or later)
* npm or yarn
* MongoDB (local instance or a cloud URI from MongoDB Atlas)
* A code editor like VS Code

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/PraveshKasliwal/Employee-Management-System.git
    cd Employee-Management-System
    ```

2.  **Setup the Backend:**
    ```bash
    # Navigate to the backend directory
    cd backend

    # Install dependencies
    npm install

    # Create a .env file in the /backend directory
    # Add your MongoDB connection string to it
    MONGO_URI=your_mongodb_connection_string_here
    PORT=

    # Start the backend server (runs on http://localhost:8000)
    npm start
    ```

3.  **Setup the Frontend:**
    ```bash
    # Open a new terminal and navigate to the frontend directory
    cd frontend

    # Install dependencies
    npm install

    # Create a .env file in the /backend directory
    # Add your MongoDB connection string to it
    VITE_API_URL=

    # Start the React development server (runs on http://localhost:5173)
    npm start
    ```

4.  **Access the Application:**
    Open your web browser and navigate to `http://localhost:5173`. You should see the application running and connected to the backend.

***

## 🎨 Assumptions & Design Choices

* **State Management**: The project uses React's built-in hooks (`useState`, `useEffect`) for state management. This choice was made because the application's state is relatively simple and does not necessitate a more complex global state management library like Redux or Zustand.

* **Component Structure**: The UI is broken down into small, reusable components (`Sidebar`, `Header`, `EmployeeTable`, `Modal`, etc.) to promote maintainability and separation of concerns.

* **Custom Modal**: A custom modal component was built from scratch to keep the project lightweight and avoid external dependencies. For a larger-scale application, a third-party library like **Mantine UI** or **Material-UI** could be a better choice to leverage pre-built features, accessibility, and theming.

* **API Design**: The backend exposes a simple and intuitive RESTful API for managing employees. The endpoints are clearly defined and follow standard conventions.

* **Error Handling**: Error handling is implemented on both the client and server. The frontend logs errors to the console, while the backend sends back appropriate status codes and error messages in a JSON format.