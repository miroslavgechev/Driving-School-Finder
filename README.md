# Project Name

Driving School Finder

## Technologies to Use:

- React
- Firebase Integration
- Material UI
- AJAX
- Google Maps API - to show on map
- Responsibe Design

## SoftUni Requirements:

- > = 3 dynamic pages
- Catalog View - list of all created record
- Details View - information about a specific record
- At least one collection with all CRUD operations
  - Logged in users – create records and request to the REST API, interaction with the records (via Likes, Dislikes, Comments, etc.)
  - Logged in (author) – to be able to Edit / Delete their records
  - A Guest should have access to basic website information (catalog, details), but not to the functional activities
- Communicate to a remote service (via REST, sockets, GraphQL, or a similar client-server technique)
- Implement authentication
- Implement client-side routing
- Demonstrate use of programming concepts, specific to the React library: stateless and state full components, bound forms, synthetic events, Component Styling, etc.
- Apply error handling and data validation to avoid crashes when invalid data is entered.
- The application should be divided into components with separate CSS files.
- Brief documentation on the project and project architecture (as .md file)
- Demonstrate use of programming concepts - React Hooks, Context API

## SoftUni Bonuses:

- Use a state management solution (React Redux) instead of Context API
- Write Unit Tests for your code
- Good UI and UX
- Use a file storage cloud API, e.g., Dropbox, Google Drive, or other for storing the files
- Connect to an external API, like Google Maps, AccuWeather, etc.
- Deploy the application in a cloud (Heroku, Firebase)
- Bonuses depend on the complexity of the implementation
- Anything that is not described in the assignment is a bonus if it has some practical use

## Steps:

1. Create Requirements
2. Research Industry
3. Update Requirements
4. Develop Basic Architecture
5. Describe Views
6. Develop UI
7. Connect to Backend
8. Test
9. Deploy
10. Update Documentation

## Requirements

**Driving Schools**

- School Name
- Logo
- Address
- Map Coordinates
- Region in Sofia
- Regions Served
- Phone Number
- Email Address

- Fleet by car - photos, model, year;
- Instructors (list of instructors) + photos + short bio - years of experience; something worth noting;
- Photos - gallery;
- Videos - link to Youtube;

- Types of Courses (filter by category)
- Duration of courses
- Types of Special courses - e.g. night driving, highway driving, winter driving, etc.
- Price per course / program
- Price per hour
- Price per hour for special courses
- Use table with predefined courses + ability to add special courses
- Max two options per course

- Reviews - by users. (rating, comment, date, user).
- Total Rating (average of all ratings) + number of users who rated

- Why us? Up to three things. Five things if paid.

**Paid Subscription**

- More than 3 things in Why us
- More than 2 options per course
- Ability to add special courses
- Video Introduction: Allow schools to embed or upload a short video introducing their institution, facilities, instructors, or showcasing testimonies from successful students.
- Highlighted Reviews: Schools can pin or highlight certain positive reviews that they believe represent them best.
- Special Badge: A "Premium" or "Featured" badge on their profile and listings which signifies that they are a paid subscriber.

**Project Scope**

- Cover categories A, B, B+, M

**Examples**

- Pricing matrix and good explanation -> https://y-sokolovi.com/?gclid=Cj0KCQjw4bipBhCyARIsAFsieCw3eGiAe5E-Uyi3UHhcW8O_Tu9eUFJVcOJgTk-LurytBrzvNHSptk0aAiwrEALw_wcB
- Types of courses - good example - example - https://www.idrive.bg/ceni.html#2
- https://www.bgpoll.net/avtomobili/avtoshkoli.html?gclid=Cj0KCQjw4bipBhCyARIsAFsieCw21X0dl6ZGc8gBlBKJA_B-pqtICIdQo2jGACqDaH2KAUxv5juHSQAaAm_lEALw_wcB
- FAQ - https://dc.bau.bg/%D1%87%D0%B5%D1%81%D1%82%D0%BE-%D0%B7%D0%B0%D0%B4%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8-%D0%B2%D1%8A%D0%BF%D1%80%D0%BE%D1%81%D0%B8

## Pages

1. **Home Page**:

   - **Description**: A welcoming page that gives users a clear idea of the platform's purpose.
   - **Functionalities**:
     - Search bar to search for driving schools by name, area, category, rating;
     - Featured driving schools (based on user reviews or sponsored listings).
     - Quick links or buttons for primary actions (e.g., "Find a Driving School", "Register as a Driving School", "Register as Driver", "Leave a Review" (one review every 4 months allowed)).

2. **Search Results Page**:

   - **Description**: Displays the results of a user's search query.
   - **Functionalities**:
     - List of driving schools with photo/logo, basic details like name, average rating, and location.
     - Filters to narrow down results (e.g., location, services offered, ratings).
     - Pagination or infinite scroll for a large number of results.

3. **Driving School Profile Page**:

   - **Description**: Detailed view of a specific driving school.
   - **Functionalities**:
     - School name, logo, address, contact details, ratings.
     - Description and history of the school.
     - User reviews and ratings.
     - List of courses/services offered with pricing in a table.
     - Photo gallery / videos.
     - Fleet of cars - basic information about a car.
     - Instructors - photos and short bio.
     - Booking or inquiry form for lessons.
     - Map integration showing the school's location.

4. **User Review & Rating Page**:

   - **Description**: Allows users to leave reviews and ratings for driving schools they've attended (one review every 4 month allowed).
   - **Functionalities**:
     - Rating - 5 stars.
     - Text input for detailed reviews.
     - Optional: Ability for users to upload images (e.g., of their driving license or the school's facility).
     - Optional: Ability for users to upvote/downvote reviews.
     - Optional: Ability for users to report reviews.
     - Optional: Ability for the author to reply to reviews.

5. **User Account Page**:

   - **Description**: Allows users to manage their personal details and view their activity.
   - **Functionalities**:
     - Personal details editing (name, email, password, etc.).
     - History of reviews left.

6. **Driving School Registration Page**:

   - **Description**: Allows driving schools to register and create a profile on the platform.
   - **Functionalities**:
     - Form to input details like school name, address, services offered, etc. - listed above.
     - Option to upload photos.
     - Optinal: Verification process to ensure authenticity within 24 hours.
     - Load premium vs free table of features.

7. **Admin Dashboard** (if you plan to have one):

   - **Description**: Allows administrators to manage and oversee the platform's operations.
   - **Functionalities**:
     - Manage user accounts.
     - Approve/reject driving school registrations.
     - Manage reviews (e.g., remove inappropriate content).

8. **About Page**:

   - **Description**: Provides information about the platform, the team behind it, and its mission.
   - **Functionalities**: Static content.

9. **FAQ**:

   - **Description**: Provides answers to frequently asked questions to users.
   - **Functionalities**:
     - FAQs. (e.g. how to choose a driving school. What documents are needed, etc.)

10. **Login/Signup Page**:
    - **Description**: Allows users and driving schools to create accounts or log into existing ones.
    - **Functionalities**:
      - Form for logging in.
      - Option to sign up.
      - Password reset functionality.
    - **Driving Schools** - predefined categories example -> https://y-sokolovi.com/?gclid=Cj0KCQjw4bipBhCyARIsAFsieCw3eGiAe5E-Uyi3UHhcW8O_Tu9eUFJVcOJgTk-LurytBrzvNHSptk0aAiwrEALw_wcB




---- TO BE REVISED AFTER PROJECT COMPLETION---

## Description

#CuratedPurifiers is an online store that offers a curated range of indoor air purifiers to enhance the indoor air quality and provide a healthy living environment. The platform allows users to signup and signin, providing a personalized shopping experience. Users can browse through the curated collection of purifiers, view detailed product information, add items to their cart, checkout, and see placed orders.

## Features

- User Authentication: Registration and login functionality for personalized access to the store.
- Product Catalog: A well-curated selection of indoor air purifiers.
- Product Details: Detailed information and specifications and image for each purifier.
- Shopping Cart: Users can add multiple items to their cart and review their selections before checkout.
- Checkout Process: dummy checkout process, ready made for integration with a payment gateway.
- Order History: Users can view a list of all their placed orders with order details.

## Screenshots

- Catalog Page

<img src="./screenshots/catalog.png" width="500" alt="Catalog"> | <img src="./screenshots/catalog-mobile-view.png" height="280" alt="Catalog-mobile-view">

- Product Page

<img src="./screenshots/product.png" width="500" alt="Product"> | <img src="./screenshots/product-mobile-view.png" height="280" alt="Product-mobile-view">

- Cart Page

<img src="./screenshots/cart.png" width="500" alt="Cart"> | <img src="./screenshots/cart-mobile-view.png" height="280" alt="Cart-mobile-view">

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `ng serve` for a dev server.
4. Navigate to `http://localhost:4200/` in your browser.

5. You can access a running version of the app on this link: https://purifiers.netlify.app

## Technologies Used

- Angular 16
- TypeScript
- HTML/CSS/Responsive Design
- Firebase Realtime Database (with REST API)
- Third-party libraries

# Code Structure

## Auth Module

The `AuthModule` handles authentication-related features in the application.

#### Components

- `SignInComponent`: Responsible for user sign-in functionality.
- `SignUpComponent`: Handles user registration functionality.

#### Services

- `AuthService`: Provides methods for authentication, login, and registration.
- `SignOutService`: Handles user sign-out functionality.

#### Validators

- `EmailValidator`: Custom validator to validate email input.
- `PasswordMatchValidator`: Custom validator to validate password match.

## Core Module

The `CoreModule` contains core components and services used throughout the application.

#### Components

- `FooterComponent`: Renders the footer of the application.
- `HeaderComponent`: Renders the header of the application.
- `PageNotFoundComponent`: Renders the 404 error page.

## Feature Module

The `FeatureModule` contains different features of the application.

#### Components

- `AboutComponent`: Renders information about the application.
- `CartComponent`: Displays the items in the user's shopping cart.
- `CatalogComponent`: Displays the catalog of products available.
- `DetailsComponent`: Displays details of a selected product.
- `ProfileComponent`: Displays user profile information.

#### Services

- `CartDataService`: Manages cart data and operations.
- `OrderDataService`: Manages order data and operations.

#### Directives

- `OnMouseHoverDirective`: Adds functionality on mouse hover.

## Shared Module

The `SharedModule` contains shared components, directives, pipes, and services.

#### Guards

- `AuthGuard`: Protects routes that require authentication.
- `NotAuthGuard`: Protects routes that should not be accessible to authenticated users.

#### Interceptors

- `ApiInterceptor`: Handles HTTP requests and responses.

#### Components

- `LoaderComponent`: Displays a loading indicator during asynchronous operations.
- `LoaderSmallComponent`: A smaller version of the loader component.

#### Pipes

- `ElapsedTimePipe`: Converts a date into elapsed time.

#### Services

- `ApiService`: Handles API calls.
- `GlobalErrorHandlerService`: Handles global error handling.
- `IsCartEmptyService`: Checks if the cart is empty.
- `IsUserLoggedInService`: Checks if the user is logged in.
- `PreviousUrlService`: Keeps track of the previous URL.
- `UtilityService`: Contains utility methods.

#### Constants

- `Constants`: Contains application constants.

## Types

The `Types` folder contains TypeScript type definitions and interfaces used in the application.

## Assets

The `Assets` folder holds static assets like images, fonts, etc.

## CSS

The `CSS` folder contains global CSS files for styling the application.
