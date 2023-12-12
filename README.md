# Driving School Finder

## Description

Driving School Finder is a pioneering React application designed to bridge the gap in the driving school market, initially focusing on Sofia, Bulgaria. This platform serves as a dynamic marketplace for driving schools and prospective students.

Schools can manage their presence by creating, editing, and deleting their profiles. They provide comprehensive information including school descriptions, unique selling points, categories served (A, A1, A2, AM, B, B1, BA), regions covered within Sofia, a detailed pricing matrix for courses, and contact information.

Students, on the other hand, can register to explore and evaluate these schools. The app facilitates this by allowing them to rate and comment on schools, aiding their peers in making informed decisions.

Key Features:

- A catalog with advanced search functionality, enabling users to filter schools by name, region, rating, and category.
- Individual pages for each school, showcasing detailed information, offerings, pricing, and user-generated reviews and ratings.
- An FAQ section addressing common queries.
- Distinct profile management options for schools and students. Schools have the capability to edit their school information and profile details, whereas students can update their personal information and manage their own reviews and ratings.

This platform is more than just a directory; it's a community-driven tool that empowers students to find their ideal driving school, while providing schools with a robust channel to showcase their offerings.

## Screenshots

- Catalog Page

<img src="./screenshots/catalog.png" width="550" alt="Catalog"> | <img src="./screenshots/catalog-mobile-view.png" height="270" alt="Catalog-mobile-view">

- Create-Edit Page

<img src="./screenshots/create-edit.png" width="550" alt="Create-edit"> | <img src="./screenshots/create-edit-mobile-view.png" height="270" alt="Create-edit-mobile-view">

<img src="./screenshots/create-edit2.png" width="550" alt="Create-edit-2"> | <img src="./screenshots/create-edit-mobile-view2.png" height="270" alt="Create-edit-mobile-view-2">

- Details Page

<img src="./screenshots/details.png" width="550" alt="Details"> | <img src="./screenshots/details-mobile-view.png" height="270" alt="Details-mobile-view">

- Rating Page

<img src="./screenshots/rating.png" width="550" alt="Rating"> | <img src="./screenshots/rating-mobile-view.png" height="270" alt="Rating-mobile-view">

## Installation

1. Clone the repository to your local machine.
2. Inside the project directory, install all required dependencies running `yarn install`.
3. Launch a development server using `yarn start`.
4. Set up your Firebase account, including Firestore, Firebase Storage, and Firebase Authentication services.
5. Create a `.env` file in the root directory of the project. Populate this file with your Firebase configuration details, ensuring that the variable names correspond with those in the app's `firebaseConfig.js`.

## Stack

[![React](https://skillicons.dev/icons?i=react)](https://react.dev/)
[![JavaScript](https://skillicons.dev/icons?i=js)](https://javascript.com/)
[![MUI](https://skillicons.dev/icons?i=materialui)](https://mui.com/material-ui/)
[![CSS3](https://skillicons.dev/icons?i=css)](https://www.w3.org/Style/CSS/Overview.en.html)
[![HTML5](https://skillicons.dev/icons?i=html)](https://html.spec.whatwg.org/multipage/)
[![Firebase](https://skillicons.dev/icons?i=firebase)](https://firebase.google.com/)

<!-- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) -->

## Project Architecture

### Overview

The Driving School Finder application is structured following a modern React application architecture, designed for scalability, maintainability, and efficient data flow. The architecture is primarily client-side driven, utilizing Firebase services for backend functionalities.

### Front-End Architecture

- **React Components**: The application's user interface is built using React 18.2 components, organized into reusable and modular units, allowing for efficient development and testing.
- **Routing**: Utilized `react-router-dom` for handling navigation and routing, ensuring seamless user experience across different views and states.
- **JavaScript**: The primary programming language used for scripting and adding interactivity.

### Back-End and Database

- **Firebase Firestore**: Serves as the primary database, providing real-time data storage and retrieval.
- **Firebase Storage**: Handles storage and retrieval of user-uploaded files, like images.
- **Firebase Authentication**: Manages user authentication, offering secure sign-up, sign-in, and profile management.

### Data Flow

- **Firestore Services**: Handle data interactions with real-time capabilities to keep the application data up-to-date.
- **Firebase Authentication Integration**: Seamlessly integrates with the front-end for user sessions and profile management.

### Styling and UI

- **Material UI**: Provides a consistent and modern UI design, complemented with custom CSS modules for component-specific styling.
- **HTML/CSS with modules**: HTML structures the web content while CSS modules provide styling in an encapsulated manner.
- **CssBaseline**: Ensures cross-browser consistency in the baseline CSS.
- **jssStyles**: Enhances dynamic styling capabilities within the React components.
- **AOS (Animate on Scroll)**: Adds smooth and visually appealing scroll animations to web elements.
- **Responsive Design**: Guarantees optimal user experience on various devices, from desktops to mobile phones.

### Utility and Additional Libraries

- **ESLint/Prettier**: Maintains code quality and consistency.
- **dotenv**: Manages environment variables, especially for Firebase configuration.
- **moment.js**: Parses, validates, manipulates, and displays dates and times.
- **Other Third-Party Libraries**: Enhances functionality, performance, and user experience.

## Project Structure

The Driving School Finder application is organized into a well-structured and modular architecture, facilitating ease of navigation, development, and maintenance. Below is an overview of the key directories and their contents:

### Main Directories

- **components**: Houses all React components, each dedicated to specific features like `About`, `Catalog`, `Faq`, and functionalities such as `ManageAccount` and `SchoolDetails`.

- **config**: Contains configuration files, such as `firebaseConfig.js`, essential for backend connectivity.

- **contexts**: Includes React context files like `authContext.js` and `setSchoolContext.js` for global state management.

- **hooks**: Features custom React hooks, e.g., `useAuth.js`, for encapsulating and reusing logic.

- **layouts**: Comprises structural components like `Container`, `Main`, and `Page`, along with subcomponents like `Footer`, `Sidebar`, and `Topbar`.

- **services**: Hosts service files, such as `firebaseStorageService.js` and `firestoreService.js`, for handling interactions with Firebase.

- **theme**: Stores theming-related files for Material UI customization.

- **utils**: Contains utility functions, such as `dateFormatter.js` and `fileMapper.js`, for shared helper functionalities.

<!--
### Component Details

- **About, Catalog, Faq, NotFound, Signin, Signup**: Contain components for specific sections of the application, like the About page and catalog browsing.

- **ManageAccount, SchoolCreateEdit, SchoolDetails**: Include components for managing user accounts, creating/editing school details, and displaying school information.

- **Shared**: Holds reusable components like alerts, authentication guards, and common UI elements used throughout the application.
-->

### Component Details

The `components` directory is the heart of the React UI, structured into feature-specific subdirectories. Each subdirectory contains components and their associated style modules:

- **About**:

  - `About.js`: The main component for the About section.
  - `Hero.js`: A subcomponent for showcasing the main features or highlights.
  - `Story.js`: A component detailing the story or background information.

- **Catalog**:

  - `Catalog.js`: The main component for the catalog functionality.
  - `FilterBar.js`: A component for filtering catalog items.
  - `Header.js`: The header component specific to the catalog.
  - `SchoolsList.js`: Displays a list of schools.

- **Faq**:

  - `Faq.js`: The FAQ section component.

- **ManageAccount**:

  - `ManagerAccount.js`: Main component for account management.
  - `ChangePasswordForm.js`: A form for changing the user's password.
  - `EditPersonalDataForm.js`: A form for editing personal data.
  - `ManageReviews.js`: Component for managing user reviews.
  - `DeleteFeedbackForm.js`: A form for deleting feedback.
  - `EditFeedbackForm.js`: A form for editing feedback.
  - `ManageSchools.js`: Component for managing school information.
  - `DeleteSchoolForm.js`: A form for deleting a school's information.
  - `SchoolTableContainer.js`: Displays school information in a table format.

- **NotFound**:

  - `NotFound.js`: A component displayed when a page is not found.

- **SchoolCreateEdit**:

  - `SchoolCreateEdit.js`: Component for creating or editing school information.
  - `ConfirmForm.js`: A confirmation form component.
  - `ContactsForm.js`: A form for editing contact information.
  - `CoursesForm.js`: A form for managing course information.
  - `ImgForm.js`: A form for managing images.
  - `SchoolForm.js`: The main form for school information.

- **SchoolDetails**:

  - `SchoolDetails.js`: Main component for displaying school details.
  - `Courses.js`: Displays course information.
  - `Details.js`: Shows detailed information about the school.
  - `Image.js`: Displays images related to the school.
  - `Reviews.js`: Component for displaying reviews.
  - `FeedbackForm.js`: A form for submitting feedback.
  - `FeedbackList.js`: Lists all feedback entries.

- **Shared**:

  - `AlertMessage.js`, `AuthGuard.js`, `Headline.js`, etc.: Shared components like alerts, authentication guards, and common UI elements.

- **Signin/Signup**:
  - `Signin.js`, `Signup.js`: Components for the sign-in and sign-up processes.
  - `FormSignin.js`, `FormSignup.js`: Specific forms for signing in and signing up.

## SoftUni Requirements

| Requirement                                                      | Status |
| ---------------------------------------------------------------- | ------ |
| Public Part (Accessible without authentication)                  | ✓      |
| Private Part (Available for Registered Users)                    | ✓      |
| At least 3 different dynamic pages                               | ✓      |
| Specific views: Catalog, Details of a record                     | ✓      |
| At least one collection with all CRUD operations                 | ✓      |
| Logged in users' interactions (Likes, Dislikes, Comments, etc.)  | ✓      |
| Authors can Edit/Delete their records                            | ✓      |
| Guest access to basic information (catalog, details)             | ✓      |
| Use React.js for the client-side                                 | ✓      |
| Communicate with a remote service (REST, sockets, GraphQL, etc.) | ✓      |
| Implement authentication                                         | ✓      |
| Implement client-side routing                                    | ✓      |
| Demonstrate use of React concepts                                | ✓      |
| Use of a source control system (e.g., GitHub)                    | ✓      |
| Regular commits in GitHub for at least 3 days                    | ✓      |
| Apply error handling and data validation                         | ✓      |
| Application divided into components with separate CSS files      | ✓      |
| Documentation on the project and architecture (as .md file)      | ✓      |
| Demonstrate use of React Hooks, Context API                      | ✓      |

| Bonus Requirement                                                    | Status |
| -------------------------------------------------------------------- | ------ |
| Usage of Material UI for UI design                                   | ✓      |
| Use of a cloud file storage API for storing files - Firebase Storage | ✓      |
| Deployment of the application in the cloud (Firebase)                | ✓      |
| Use of AOS for scroll animations                                     | ✓      |
| Use of third-party libraries                                         | ✓      |
