# Celebrity Management System

This project is built with React.js. It allows users to view, add, edit, and delete user details such as name, age, gender, country, and description.

## Usage

- **View Users:** On the homepage, you will see a list of users. Click on the `+` icon to expand or collapse their details.
- **Search User:** Use the search bar to quickly find users by name or other details.
- **Edit User:** Click on the `Edit` button to enter edit mode. Modify the desired fields and click `Save` to apply changes or `Cancel` to discard changes.
- **Delete User:** Click on the `Delete` button, and a confirmation modal will appear. Confirm the deletion to remove the user from the list.

## Features

- **View User Details:** Display a list of users with their details like name, age, gender, country, and description.
- **Accordion Style Display:** User details are shown in an accordion style, allowing easy expansion and collapse of individual user information.
- **Edit User Details:** Edit existing user details including name, age, gender, country, and description. The user must be at least 18 years old to enter edit mode.
- **Validation:** Ensures fields are not empty and inputs are valid (e.g., no numbers in the country field, age must be a number, etc.).
- **Save Changes:** Save any changes made to user details with form validation to ensure completeness and correctness.
- **Cancel Changes:** Cancel editing mode without saving changes, reverting all fields to their previous state.
- **Auto-resizing Textarea:** The description field automatically resizes based on the content.
- **Delete User:** Delete a user after confirming the action through a modal dialog.
  Responsive Design: Built with a responsive design to work well on both desktop and mobile devices.

## Project Structure

```bash
    user-management-system/
    ├── public/
    │   └── data/
    │       └── celebrities.json
    ├── src/
    │   ├── components/
    │   │   ├── UserAccordion.jsx
    │   │   ├── UserHeader.js
    │   │   ├── UserDetails.jsx
    │   │   ├── UserDescription.jsx
    │   │   ├── FooterButtons.jsx
    │   │   └── ConfirmModal.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── eslint.config.js
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── Assignment Requirements
```

## Getting Started

### Prerequisites

To run this project locally, you will need to have Node.js and npm (Node Package Manager) installed on your machine.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nitishkumar31/celebrity-management-system.git
   cd celebrity-management-system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the development server:**

   - Vite.js provides a fast development server. Start it using:

     ```bash
     npm run dev
     ```

     or

     ```bash
     yarn dev
     ```

This will start the development server, and you can access your app at `http://localhost:5173`.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

or

```bash
yarn build
```

This will generate a dist folder with your compiled application.

## Running Tests

If you have tests configured, you can run them using:

```bash
npm run test
```

or

```bash
yarn test
```

## Contributing

We welcome contributions to this project! Here’s how you can get involved:

### How to Contribute

1. **Fork the Repository:**

   - Click the "Fork" button at the top-right corner of this repository’s GitHub page to create your own copy of the repository.

2. **Clone Your Fork:**

   - Clone your forked repository to your local machine:

     ```bash
     git clone https://github.com/nitishkumar31/celebrity-management-system.git
     cd celebrity-management-system
     ```

3. **Create a Branch:**

   - Create a new branch for your changes:

     ```bash
     git checkout -b your-feature-branch
     ```

4. **Make Changes:**

   - Make the necessary changes to the codebase. Ensure you follow the project’s coding style and guidelines.

5. **Commit Your Changes:**

   - Stage and commit your changes with a meaningful commit message:

     ```bash
     git add .
     git commit -m "Add a descriptive commit message"
     ```

6. **Push Your Changes:**

   - Push your changes to your forked repository:

     ```bash
     git push origin your-feature-branch
     ```

7. **Create a Pull Request:**
   - Go to the original repository’s GitHub page and open a pull request from your branch. Provide a clear description of the changes you made and why they are beneficial.

### Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) when participating in this project. Treat others with respect and communicate clearly.

### Reporting Issues

If you find a bug or have a feature request, please open an issue on our [Issues page](https://github.com/nitishkumar31/celebrity-management-system/issues). Provide as much detail as possible, including steps to reproduce the issue.

### Getting Help

If you need help or have questions about contributing, feel free to reach out via GitHub discussions or open an issue.

Thank you for contributing to this project!
