# LinkFlow — Frontend

A modern, responsive frontend for **LinkFlow**, a URL shortening and analytics platform built with React. It provides an authenticated dashboard where users can create and manage short URLs, monitor click activity, and view useful analytics.

> **LinkFlow** — Shorten links. Track clicks. Understand your audience.

---

## ✨ Features

* 🔐 **Authentication**

  * User login and registration
  * JWT-based authentication using secure HTTP-only cookies
  * Protected and public routes
  * Automatic authentication state management

* 🔗 **URL Management**

  * Create short URLs
  * View all shortened URLs
  * Delete existing short URLs
  * Copy shortened URLs easily
  * Track URL creation and usage

* 📊 **Analytics Dashboard**

  * Total links
  * Total clicks
  * Average clicks per link
  * Clicks over time
  * Date-based analytics
  * Top countries by clicks
  * Top-performing links

* 🎨 **Modern UI**

  * Responsive dashboard
  * Sidebar navigation
  * Clean and professional interface
  * Loading states
  * Empty states
  * API error handling
  * Processing states for user actions

* ⚡ **Performance**

  * React component-based architecture
  * Axios API client
  * Efficient API requests
  * Reusable components

---

## 🛠️ Tech Stack

| Technology            | Purpose                  |
| --------------------- | ------------------------ |
| **React**             | Frontend UI              |
| **Vite**              | Development & build tool |
| **React Router**      | Client-side routing      |
| **Axios**             | HTTP/API communication   |
| **Tailwind CSS**      | Styling                  |
| **Recharts**          | Analytics charts         |
| **JavaScript (ES6+)** | Application logic        |

---

## 🏗️ Project Architecture

The frontend follows a component-based React architecture with separate pages, reusable components, authentication context, and API communication.

```text
src/
├── assets/
│
├── components/
│   ├── analytics/
│   ├── dashboard/
│   ├── layout/
│   └── ...
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── AnalyticsOverview.jsx
│   ├── LinksPage.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── ...
│
├── routes/
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

> The exact directory structure may evolve as the project is refactored and new features are introduced.

---

## 🔐 Authentication Flow

LinkFlow uses JWT authentication with **HTTP-only cookies**.

```text
User
 │
 ▼
Login / Signup
 │
 ▼
React Frontend
 │
 ▼
Spring Boot Backend
 │
 ▼
JWT generated
 │
 ▼
HTTP-only Cookie
 │
 ▼
Authenticated API Requests
```

The frontend does not need to manually store the JWT in `localStorage`. Authentication is maintained through the browser's cookie mechanism.

The `AuthContext` manages:

* Current authenticated user
* Authentication status
* Authentication loading state
* Logout functionality
* Initial authentication check

---

## 🔌 Backend API

The frontend communicates with the LinkFlow backend through REST APIs.

During local development, the backend runs on:

```text
http://localhost:8080
```

Example API operations include:

```text
POST   /auth/login
POST   /auth/signup
GET    /user/me

GET    /short-url/...
POST   /short-url/...
DELETE /short-url/...

GET    /analytics/...
```

> API endpoints may change as the backend evolves. Refer to the backend repository for the latest API contract.

### Backend Repository

**LinkFlow Backend:**
`https://github.com/sh8941/LinkFlow`

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 18+
* npm
* Git
* LinkFlow backend running locally

Check your versions:

```bash
node --version
npm --version
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/sh8941/LinkFlow-Frontend.git
cd LinkFlow-Frontend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Backend URL

If the API base URL is configurable through environment variables, create:

```text
.env
```

Example:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Do not commit sensitive credentials or private environment variables to GitHub.

---

### 4. Start Development Server

```bash
npm run dev
```

Vite will start the development server, typically at:

```text
http://localhost:5173
```

---

## 📦 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## 📱 Application Pages

### 🏠 Dashboard

Provides a high-level overview of the user's URL-shortening activity.

Displays metrics such as:

* Total links
* Total clicks
* Average clicks
* Recent activity

### 🔗 Links

Allows users to:

* View their shortened URLs
* Create new URLs
* Copy short links
* Delete links
* Monitor basic link information

### 📈 Analytics

Provides visual insights into URL performance.

Current analytics include:

* Clicks over time
* Date-range filtering
* Top countries
* Top links
* Click statistics

---

## 🔄 Data Flow

The application follows a simple frontend-to-backend data flow:

```text
React Component
      │
      ▼
      Axios
      │
      ▼
Spring Boot REST API
      │
      ▼
    Database
      │
      ▼
JSON Response
      │
      ▼
React State
      │
      ▼
UI / Charts
```

---

## 🧩 Routing

The application separates public and authenticated routes.

### Public Routes

Examples:

```text
/login
/signup
```

### Protected Routes

Examples:

```text
/dashboard
/links
/analytics
```

Protected routes require a valid authenticated session.

---

## 🚨 Error & Loading Handling

The frontend is designed to handle common API states gracefully:

```text
Loading
   │
   ├── Success ──► Display Data
   │
   ├── Empty ────► Display Empty State
   │
   └── Error ────► Display Error State
```

Actions such as deleting a URL or loading analytics can also provide processing/loading feedback to prevent duplicate requests.

---

## 🔒 Security

Security considerations implemented on the frontend include:

* JWT stored in HTTP-only cookies
* Credentials included in authenticated API requests
* Protected routes
* Authentication state validation
* No client-side storage of sensitive JWT tokens
* Backend-controlled authorization

> Frontend security should always be treated as complementary to backend authorization. Sensitive operations must be validated by the backend.

---

## 🌐 Production Build

Create an optimized production build:

```bash
npm run build
```

The generated files will be available inside:

```text
dist/
```

To locally preview the production build:

```bash
npm run preview
```

---

## 🚀 Deployment

The frontend can be deployed to platforms such as:

* Vercel
* Netlify
* Render
* Cloudflare Pages
* Any static hosting provider supporting Vite applications

For production deployment, make sure the frontend API URL points to the deployed LinkFlow backend rather than:

```text
http://localhost:8080
```

The backend must also be configured to allow requests from the production frontend origin.

---

## 🧪 Development Workflow

A typical development workflow:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📌 Current Project Scope

LinkFlow focuses on the core URL-shortening experience rather than unnecessary complexity.

### Implemented

* User authentication
* Secure cookie-based JWT authentication
* Protected routes
* URL creation
* URL listing
* URL deletion
* Dashboard statistics
* Click analytics
* Date-based analytics
* Charts
* Responsive dashboard UI

### Future Improvements

Potential improvements include:

* Improved accessibility
* More detailed analytics
* Better mobile navigation
* Advanced filtering
* Pagination for large URL collections
* More comprehensive automated frontend testing
* Performance optimizations
* Improved notification/feedback system

---

## 🤝 Contributing

Contributions are welcome.

### Fork the repository

```bash
git fork https://github.com/sh8941/LinkFlow-Frontend
```

### Create a feature branch

```bash
git checkout -b feature/your-feature
```

### Commit your changes

```bash
git commit -m "feat: add your feature"
```

### Push the branch

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

---

## 📝 Commit Convention

Recommended commit prefixes:

```text
feat:     New feature
fix:      Bug fix
refactor: Code restructuring
style:    Styling changes
docs:     Documentation
test:     Tests
chore:    Maintenance
```

Example:

```bash
git commit -m "feat: add date range analytics"
```

---

## 👨‍💻 Author

**Samoon Haider**

MCA | Java & Spring Boot Developer

* GitHub: https://github.com/sh8941
* LinkedIn: Search for **Samoon Haider**

---

## 📄 License

This project is currently intended for learning, portfolio, and development purposes.

If a formal open-source license is added in the future, this section should be updated accordingly.

---

## ⭐ Support

If you find **LinkFlow** useful, consider giving the repository a ⭐ on GitHub.

**LinkFlow — Simple URLs. Powerful Analytics.**
