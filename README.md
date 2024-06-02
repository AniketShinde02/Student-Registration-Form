# Student-Registration-Form
## Task Details (given by @bharatintern)

### 1. Front-End Development
**Technologies Used:** HTML, CSS

- **Registration Form:**
  - Designed a user-friendly registration form using HTML.
  - Included input fields for PRN, name, email, branch selection, password, and confirm password.
  - Ensured form validation to validate user input before submission.

- **CSS Styling:**
  - Applied CSS styling to enhance the visual appeal of the registration form and ensure consistency across different devices.
  - Used media queries to ensure responsiveness and adaptability of the form layout.

### 2. Back-End Development
**Technologies Used:** Node.js, Express.js, MongoDB

- **Server Setup:**
  - Implemented a server using Node.js and Express.js to handle HTTP requests.
  - Configured routes to serve the registration form and process form submissions.

- **Database Integration:**
  - Established a connection to a MongoDB database to store user information securely.
  - Defined a user schema using Mongoose to specify the structure of user data.

- **User Registration Logic:**
  - Implemented logic to handle user registration requests.
  - Validated user input and checked for existing users before saving new registrations to the database.
  - Utilized bcrypt for password hashing to ensure security of user credentials.

### 3. Front-End Feedback Pages
- **Registration Successful Page:**
  - Created an HTML page to display a success message when user registration is successful.
  - Provided a link to redirect users to the registration form to register again if needed.

- **User Already Exists Page:**
  - Developed an HTML page to notify users when a user with the provided PRN or email already exists.
  - Included a link to return users to the registration form to try again.

## Challenges and Solutions
- **Challenge:** Implementing secure password storage.
  - **Solution:** Implemented bcrypt for password hashing before saving to the database to enhance security.

- **Challenge:** Handling form validation both client-side and server-side.
  - **Solution:** Implemented comprehensive validation checks on both ends to ensure data integrity and user-friendly experience.

## Conclusion
Task 1 involved the successful development of a user registration system using HTML, CSS, Node.js, and MongoDB. The system provides users with a seamless registration experience while ensuring data security and integrity. Future enhancements may include implementing user authentication and session management features.

## Sign-Off
Prepared by: Aniket Shinde 
