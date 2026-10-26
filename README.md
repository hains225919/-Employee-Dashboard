# 🏢 Employee Dashboard (React)

A responsive Employee Dashboard single-page application built with **React**, **React Router v6**, and **Bootstrap 5**.

This project fulfills all assignment requirements by fetching employee data from an external REST API, rendering both tabular and card directory views, and providing an interactive employee registration form with client-side validation.

---

## 📋 Features & Requirements Checklist

| Requirement | Implementation Details | Status |
| :--- | :--- | :---: |
| **React Library** | Built using React 18 & Vite for fast build and optimal performance | ✅ |
| **Navbar with Links** | Navigation bar with active styling for **Home** and **Employee Form** links | ✅ |
| **External API Integration** | Fetches live user data from `https://jsonplaceholder.typicode.com/users` | ✅ |
| **Dashboard Display** | Displays **ID**, **Name**, and **Email** in **Tabular View** with a toggle for **Card View** | ✅ |
| **Employee Form** | Form containing fields: **Name**, **Designation**, **Location**, and **Salary** | ✅ |
| **Appropriate Routes** | Configured routes: `/` (Home/Dashboard) and `/employee-form` (Employee Form) | ✅ |
| **CSS Library** | Styled with **Bootstrap 5** and custom modern CSS | ✅ |
| **No Backend POST** | Pure frontend submission with client-side validation and live summary preview | ✅ |
| **Submission** | Ready for GitHub push with clean repository structure | ✅ |

---

## 🚀 Live Views & Pages

1. **Employee Dashboard / Home (`/`)**:
   - Fetches users from `https://jsonplaceholder.typicode.com/users` using `fetch` API and `useEffect`.
   - Displays required fields: **ID**, **Name**, and **Email**.
   - Includes view switcher: toggle between **Tabular View** and **Card View**.
   - Search & filter functionality to quickly search by ID, name, or email.
   - Graceful loading indicators and error recovery with a retry button.

2. **Employee Form (`/employee-form`)**:
   - Form fields: **Name**, **Designation**, **Location**, and **Salary**.
   - Form validation ensures all required fields are filled.
   - Includes a **Live Form Preview** card.
   - Frontend-only submission with success notification (no backend POST request is made, adhering to instructions).
   - Reset button to clear inputs.

3. **Navigation**:
   - Persistent top Navbar with links to **Home** and **Employee Form**.
   - Active route highlighting using React Router's `NavLink`.
   - Wildcard fallback redirecting unknown routes back to `/`.

---

## 🛠️ Tech Stack

- **Frontend Library:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM (v6)
- **Styling / CSS Library:** Bootstrap 5 + Custom Modern CSS
- **Data Source:** JSONPlaceholder Users API (`https://jsonplaceholder.typicode.com/users`)

---

## 💻 How to Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open your browser and navigate to the local URL displayed in the terminal (typically `http://localhost:5173/`).

### 3. Build for Production
To create an optimized production build:
```bash
npm run build
```

---

## 📤 GitHub Submission Instructions

To submit your **GitHub Repo Link**, push this project to your GitHub account:

### Step 1: Initialize Git and Push from your Terminal
Open PowerShell, Command Prompt, or Git Bash in this project directory (`C:\Users\ASUS\OneDrive\Desktop\employee-dashboard`):

```bash
# 1. Initialize Git repository
git init

# 2. Stage all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Employee Dashboard using React"

# 4. Set branch to main
git branch -M main

# 5. Link remote repository
git remote add origin https://github.com/hains225919/-Employee-Dashboard.git

# 6. Push code to GitHub
git push -u origin main
```

---

## 🔗 Submission Details

- **GitHub Repository Link:** [https://github.com/hains225919/-Employee-Dashboard](https://github.com/hains225919/-Employee-Dashboard)

