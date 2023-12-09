# Project Name

Driving School Finder

## Technologies to Use:

- React
- Firebase Integration
- Material UI
- AJAX
- Google Maps API - to show on map
- Responsive Design

## SoftUni Requirements:

- ✅(>=3) dynamic pages
- Catalog View - list of all created record
- ✅Details View - information about a specific record
  -✅ At least one collection with all CRUD operations
  ✅- Logged in users – create records and request to the REST API, interaction with the records (via Likes, Dislikes, Comments, etc.)
  ✅- Logged in (author) – to be able to Edit / Delete their records
  ✅- A Guest should have access to basic website information (catalog, details), but not to the functional activities
- ✅Communicate to a remote service (via REST, sockets, GraphQL, or a similar client-server technique)
- ✅Implement authentication
- ✅Implement client-side routing
- ✅Demonstrate use of programming concepts, specific to the React library: stateless and state full components, bound forms, synthetic events, Component Styling, etc.
- ✅Apply error handling and data validation to avoid crashes when invalid data is entered.
- The application should be divided into components with separate CSS files.
- Brief documentation on the project and project architecture (as .md file)
- Demonstrate use of programming concepts - React Hooks, Context API

## SoftUni Bonuses:

- Use a state management solution (React Redux) instead of Context API
- ❌Write Unit Tests for your code
- ✅Good UI and UX
- ✅Use a file storage cloud API, e.g., Dropbox, Google Drive, or other for storing the files
- ❌Connect to an external API, like Google Maps, AccuWeather, etc.
- Deploy the application in a cloud (Heroku, Firebase)
- ✅Bonuses depend on the complexity of the implementation
- ✅Anything that is not described in the assignment is a bonus if it has some practical use

## Steps:

1. ✅Create Requirements
2. ✅Research Industry
3. ✅Update Requirements
4. ✅Describe Views
5. ✅Find a template
6. ✅Develop UI
7. ✅Setup database
8. ✅Setup storage
9. ✅Setup authentication
10. Develop App
11. ✅Connect to Backend
12. Refactor Code to css modules.
13. Optimize Code
14. ✅Move Static images to public
15. Test
16. ✅Populate with real data
17. Deploy
18. Update Documentation

## Requirements

### Driving Schools

**Main**

- ✅School Name
- ✅Logo
- ✅Address
- ❌Map Coordinates
- ✅Region in Sofia
- ✅Regions Served
- ✅Phone Number
- ✅Email Address
- ✅Description (short)

**Fleet**

- ❌Fleet by car - photos, model, year;
- ❌Instructors (list of instructors) + photos + short bio - years of experience; something worth noting;
- ✅Photos - gallery;
- ❌Videos - link to Youtube;
- ❌Why us? Up to three things. Five things if paid.

**Courses**

- ❌Types of Courses (filter by category)
- ✅Duration of courses
- ❌Types of Special courses - e.g. night driving, highway driving, winter driving, etc.
- ✅Price per course / program
- ❌Price per hour
- ❌Price per hour for special courses
- ✅Use table with predefined courses + ability to add special courses
- ❌Max two options per course

**Reviews**

- ✅Reviews - by users. (rating, comment, date, user).
- ✅Total Rating (average of all ratings) + number of users who rated

### Paid Subscription ❌

**Options**

- ❌More than 3 things in Why us
- ❌More than 2 options per course
- ❌Ability to add special courses
- ❌Video Introduction: Allow schools to embed or upload a short video introducing their institution, facilities, instructors, or showcasing testimonies from successful students.
- ❌Highlighted Reviews: Schools can pin or highlight certain positive reviews that they believe represent them best.
- ❌Special Badge: A "Premium" or "Featured" badge on their profile and listings which signifies that they are a paid subscriber.

## Project Scope

**Coverage**

- ✅Cover categories AM, A, A1, A2, B1, B, BA

## Examples

- Pricing matrix and good explanation -> https://y-sokolovi.com/?gclid=Cj0KCQjw4bipBhCyARIsAFsieCw3eGiAe5E-Uyi3UHhcW8O_Tu9eUFJVcOJgTk-LurytBrzvNHSptk0aAiwrEALw_wcB
- Types of courses - good example - example - https://www.idrive.bg/ceni.html#2
- https://www.bgpoll.net/avtomobili/avtoshkoli.html?gclid=Cj0KCQjw4bipBhCyARIsAFsieCw21X0dl6ZGc8gBlBKJA_B-pqtICIdQo2jGACqDaH2KAUxv5juHSQAaAm_lEALw_wcB
- FAQ - https://dc.bau.bg/%D1%87%D0%B5%D1%81%D1%82%D0%BE-%D0%B7%D0%B0%D0%B4%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8-%D0%B2%D1%8A%D0%BF%D1%80%D0%BE%D1%81%D0%B8
- Competition - https://avtoobuchenie.bg/
- Type of categories - http://avtoinstruktor.bg/polezno/kategorii_za_mps

## Pages

1. ❌**Home Page**:

   - ❌**Description**: A welcoming page that gives users a clear idea of the platform's purpose.
   - **Functionalities**:
     - ❌Search bar to search for driving schools by name, area, category, rating;
     - ❌Featured driving schools (based on user reviews or sponsored listings).
     - ❌Quick links or buttons for primary actions (e.g., "Find a Driving School", "Register as a Driving School", "Register as Driver", "Leave a Review" (one review every 4 months allowed)).

2. **Catalog Page**:

   - ✅**Description**: Displays all the driving schools in the platform's database.
   - **Functionalities**:
     - ✅List of driving schools with photo/logo, basic details like name, average rating, and location.
     - ✅Pagination or infinite scroll for a large number of results.

3. ✅**Search Results Page**:

- ✅**Description**: Displays the results of a user's search query. - search by name, area, category, rating;
- **Functionalities**:
  - ✅Built on top of catalogue page.
  - ✅Filters to narrow down results (e.g., location, services offered, ratings).

4. ✅**Driving School Details Page**:

   - ✅**Description**: Detailed view of a specific driving school.
   - **Functionalities**:
     - ✅School name, logo, address, contact details, ratings.
     - ✅Description and history of the school.
     - ✅User reviews and ratings.
     - ✅List of courses/services offered with pricing in a table.
     - ✅Photo gallery / videos.
     - ❌Fleet of cars - basic information about a car.
     - ❌Instructors - photos and short bio.
     - ❌Booking or inquiry form for lessons.
     - ❌Map integration showing the school's location.

5. ✅**Login/Signup Page**

   - ✅**Description**: Allows users and driving schools to create accounts or log into existing ones.✅
   - **Functionalities**:
     - ✅Form for logging in.
     - ✅Option to sign up.
     - ✅Password reset functionality.

6. ✅**Driving School Create/Edit/Delete Page**: ✅

   - ✅**Description**: Allows driving schools to register and create a profile on the platform.
   - **Functionalities**:
     - ✅Form to input details like school name, address, services offered, etc. - listed above.
     - ✅Option to upload photos.
     - ❌Optinal: Verification process to ensure authenticity within 24 hours.
     - ❌Load premium vs free table of features.
   - **Driving Schools** - predefined categories example -> https://y-sokolovi.com/?gclid=Cj0KCQjw4bipBhCyARIsAFsieCw3eGiAe5E-Uyi3UHhcW8O_Tu9eUFJVcOJgTk-LurytBrzvNHSptk0aAiwrEALw_wcB
   - **Others** - setSchoolContext -> add reducers into context

7. ✅**User Review & Rating Page**:

   - ✅**Description**: Allows users to leave reviews and ratings for driving schools they've attended (one review every 4 month allowed).
   - **Functionalities**:
     - ✅Rating - 5 stars.
     - ✅Text input for detailed reviews.
     - ✅View All Page - list of all reviews for specific school.
     - ❌Optional: Ability for users to upload images (e.g., of their driving license or the school's facility).
     - ❌Optional: Ability for users to upvote/downvote reviews.
     - ❌Optional: Ability for users to report reviews.
     - ❌Optional: Ability for the author to reply to reviews.

8. ✅**User Account Page**:

   - ✅**Description**: Allows users to manage their personal details.
   - **Functionalities**:
     - ✅Personal details editing (name, email, password, etc.).
     - ✅History of reviews left.

9. ❌**Admin Dashboard** (if you plan to have one):

   - ❌**Description**: Allows administrators to manage and oversee the platform's operations.
   - **Functionalities**:
     - ❌Manage user accounts.
     - ❌Approve/reject driving school registrations.
     - ❌Manage reviews (e.g., remove inappropriate content).

10. ✅**About Page**:

    - ✅**Description**: Provides information about the platform, the team behind it, and its mission.
    - ✅**Functionalities**: Static content.

11. **FAQ**:

    - **Description**: Provides answers to frequently asked questions to users.
    - **Functionalities**:
      - FAQs. (e.g. how to choose a driving school. What documents are needed, etc.)

12. ❌**Compare Schools** (optional)

    - ❌**Description**: Allows users to compare courses from specfic schools side by side in a table.
    - **Functionalities**:
      - ❌Select schools to compare.
      - ❌Select courses to compare.
      - ❌Compare courses side by side in a table.

13. ✅**Error Page**

    - ✅**Description**: Displays a friendly error message when a user tries to access a page that doesn't exist.

14. **Nice to haves**

    - Use moments.js for dates
    - ❌Add to favorites button
    - ❌Change the theme on sign-in and sign-up pages depending on the user role
    - ✅Add paralax effect to the home page and the about page
    - Add animation transition between pages / on start of page
    - Secure Firebase further
    - Add Reducer somewhere - e.g. setSchoolContext
    - Make pages to start at the top

15. **Global Error Handling**
    - Add a global error handler to catch all errors and display a friendly error message to the user.
    - Add routeGuard to protect routes that require authentication.

---- TO BE REVISED AFTER PROJECT COMPLETION---

## Description

TBA...

## Features

- TBA...

## Screenshots

- TBA...

## Installation

1. TBA...

## Technologies Used

- TBA...

## Code Structure

TBA...
