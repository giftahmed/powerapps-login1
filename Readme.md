# Power Apps & React Developer Intern Assessment

## Project Overview
This project consists of two main tasks:
1. **Power Apps Canvas App** – A single-screen application for enrolling new joiners.
2. **React Landing Page** – A login page that embeds the Power Apps app via an iframe.

---

## Task 1: Power Apps - Joiner Enrolment App
### Features Implemented:
- **Dataverse Table**: Created a table named `NewJoiners` with the following fields:
  - FullName (Text)
  - Email (Text) – with validation using `IsMatch(EmailInput.Text, EmailPattern)`
  - PhoneNumber (Text)
  - Department (Choice: HR, IT, Sales, Marketing, Operations)
  - StartDate (Date)
  - Status (Choice: Pending, Approved, Rejected)
- **Canvas App Implementation**:
  - A form for users to input and submit new joiner details.
  - A **Submit** button that saves data to Dataverse.
  - A **Clear** button to reset form fields.
  - **Confirmation Message** using `Notify()` and a label with a timer to indicate successful submission.
  - **Email Validation** using `IsMatch(EmailInput.Text, "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")` to ensure correct email format before submission.
  - **UI/UX Enhancements**:
    - Required field validation to prevent empty submissions.
    - Intuitive layout with a professional design.
  
### Bonus Features:
- Implemented an **admin approval mechanism** where the status can be updated directly from the app.

---

## Task 2: React Landing Page
### Features Implemented:
- **Login Page (LoginPage.js)**:
  - Simple UI with email & password fields (no authentication logic required).
  - A **Login** button that triggers the embedding of Power Apps.
- **Embedding Power Apps in an iframe**:
  - Used the Power Apps embed URL format: `https://apps.powerapps.com/play/<APP_ID>`
  - The iframe takes **80% of the page width and height**.
  
### Bonus Features:
- **Session Persistence**: Stores login state to maintain iframe visibility.
- **Styling**: Implemented responsive design using Tailwind CSS for a modern look.

---

## Submission Details
- **GitHub Repository Includes**:
  - Power Apps `JoinerEnrolmentApp_20250205154316.zip` export file
  - Dataverse schema documentation (screenshots included)
  - React app source code
  - `README.md` (this document)
  - A **5-minute walkthrough video** explaining the implementation

---

## How to Run the Project
### **Power Apps**
1. Import the `JoinerEnrolmentApp_20250205154316.zip` file into Power Apps.
2. Ensure the **NewJoiners** Dataverse table exists.
3. Publish and play the app.

### **React App**
1. Clone the repository:
   ```sh
   git clone <https://github.com/giftahmed/powerapps-login1>
   cd react-landing-page
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000/` in a browser to test the login and iframe embedding.

---

## Evaluation Criteria
| Criteria | Weighting |
|----------|-----------|
| Functional correctness | 40% |
| UI/UX quality | 20% |
| Code readability & structure | 20% |
| Documentation & walkthrough | 20% |

---

## **Demo Video**
Watch a walkthrough of the app's features and codebase:  
**[Demo Video Link](https://youtu.be/Ur2OvG6RUho)**

