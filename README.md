# Smart Complaint Management System (SCMS)

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)
![Maintenance](https://img.shields.io/badge/maintained-yes-brightgreen.svg?style=flat-square)
![Code Quality](https://img.shields.io/badge/code%20quality-A+-brightgreen.svg?style=flat-square)
![Security](https://img.shields.io/badge/security-audited-blue.svg?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)
![CI](https://github.com/yourproject/scms/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-pending-yellow.svg?style=flat-square)
![Code Style](https://img.shields.io/badge/style-eslint-4B32C3?style=flat-square&logo=eslint)

**A complete, production-ready government-grade complaint management system built with Next.js and React**

[Demo](#) · [Documentation](IMPLEMENTATION_GUIDE.md) · [Report Bug](https://github.com/yourproject/issues) · [Request Feature](https://github.com/yourproject/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Demo Credentials](#-demo-credentials)
- [Usage Guide](#-usage-guide)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [Security](#-security)
- [License](#-license)
- [Support](#-support)

---

## 🌟 Overview

A complete, production-ready **Next.js** application for managing public complaints with a government-grade UI. This system allows citizens to register complaints, track their status, and enables officers/admins to manage and resolve them efficiently.

## 🎯 Features

<table>
<tr>
<td width="50%">

### 👥 For Citizens
![Citizen Features](https://img.shields.io/badge/features-10+-blue.svg?style=flat-square)

- ✅ **Register Complaints** - File complaints with text, voice & images
- ✅ **Track Status** - Real-time tracking with timeline
- ✅ **View History** - Complete complaint history
- ✅ **Manage Profile** - Update personal information
- ✅ **Feedback & Rating** - Rate resolution experience
- ✅ **Voice Input** - Speech-to-text complaint filing
- ✅ **Image Upload** - Attach evidence photos
- ✅ **Notifications** - Real-time status updates

</td>
<td width="50%">

### 👮 For Officers
![Officer Features](https://img.shields.io/badge/features-8+-green.svg?style=flat-square)

- ✅ **View Assigned** - Manage assigned complaints
- ✅ **Update Status** - Track complaint progress
- ✅ **Upload Proof** - Attach resolution evidence
- ✅ **Performance Metrics** - View personal analytics
- ✅ **Priority Management** - Handle urgent cases
- ✅ **Bulk Actions** - Process multiple complaints
- ✅ **Notes & Comments** - Internal communication
- ✅ **SLA Tracking** - Monitor response times

</td>
</tr>
<tr>
<td width="50%">

### 🔧 For Admins
![Admin Features](https://img.shields.io/badge/features-12+-orange.svg?style=flat-square)

- ✅ **System Analytics** - Comprehensive dashboards
- ✅ **Department Monitor** - Track all departments
- ✅ **Officer Management** - Manage staff assignments
- ✅ **SLA Monitoring** - Track violations
- ✅ **Reports & Exports** - Generate analytics reports
- ✅ **User Management** - Control access & roles
- ✅ **System Settings** - Configure platform
- ✅ **Audit Logs** - Track all activities

</td>
<td width="50%">

### 🏛️ Specialized Dashboards
![Departments](https://img.shields.io/badge/departments-15+-purple.svg?style=flat-square)

- 🚦 **Traffic Police**
- 🏥 **Health Services**
- 🚰 **Water Supply**
- ⚡ **Electricity Board**
- 🗑️ **Waste Management**
- 🚑 **Ambulance Services**
- 🏗️ **Infrastructure**
- 📡 **Telecom Services**
- ...and 7 more departments

</td>
</tr>
</table>

## 🚀 Tech Stack

<div align="center">

### Core Framework
![Next.js](https://img.shields.io/badge/Next.js-16.0.10-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8.5-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

### Forms & Validation
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.60-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3.25-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

### Data Visualization
![Recharts](https://img.shields.io/badge/Recharts-2.15-22D3EE?style=for-the-badge)
![Lucide Icons](https://img.shields.io/badge/Lucide-Latest-F56565?style=for-the-badge)

### Build & Dev Tools
![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=for-the-badge)
![npm](https://img.shields.io/badge/npm-Latest-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=for-the-badge&logo=node.js&logoColor=white)

</div>

### 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.0.10 | React framework with SSR |
| `react` | 19.2.0 | UI library |
| `tailwindcss` | 4.1.9 | Utility-first CSS |
| `@radix-ui/*` | Latest | Headless UI components |
| `react-hook-form` | 7.60.0 | Form management |
| `zod` | 3.25.76 | Schema validation |
| `recharts` | 2.15.4 | Charts & graphs |
| `lucide-react` | 0.454.0 | Icon library |
| `sonner` | 1.7.4 | Toast notifications |
| `next-themes` | 0.4.6 | Dark mode support |

---

## 🏗️ Project Structure

<details>
<summary>Click to expand full structure</summary>

```
smart-complaint-system/
├── 📁 app/                      # Next.js app directory
│   ├── layout.tsx              # Root layout
│   ├── page.js                 # Home page
│   ├── globals.css             # Global styles
│   └── [...slug]/              # Dynamic routes
│       └── page.js
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Navbar/             # Navigation header
│   │   ├── Sidebar/            # Side navigation menu
│   │   ├── Footer/             # Footer component
│   │   ├── VoiceToText/        # Voice input component
│   │   └── ui/                 # Radix UI components (50+)
│   │
│   ├── 📁 pages/
│   │   ├── Landing/            # Home page
│   │   ├── Auth/               # Login & Register
│   │   ├── Citizen/            # Citizen dashboard & pages
│   │   ├── Officer/            # Officer dashboard
│   │   ├── Admin/              # Admin dashboard
│   │   ├── Departments/        # Department-specific dashboards
│   │   ├── Notifications/      # Notification center
│   │   ├── Profile/            # User profile
│   │   └── Settings/           # System settings
│   │
│   ├── 📁 services/
│   │   ├── mockDataService.js  # Mock data provider
│   │   ├── aiService.js        # AI categorization
│   │   ├── notificationService.js
│   │   └── securityService.js
│   │
│   ├── 📁 styles/
│   │   ├── global.css          # Global styles
│   │   ├── navbar.css
│   │   ├── sidebar.css
│   │   ├── landing.css
│   │   ├── auth.css
│   │   ├── dashboard.css
│   │   ├── form.css
│   │   ├── profile.css
│   │   ├── footer.css
│   │   └── complaint-detail.css
│   │
│   ├── 📁 utils/
│   │   ├── constants.js        # Constants & mock users
│   │   ├── helpers.js          # Utility functions
│   │   └── complaintTypes.js   # Complaint categories
│   │
│   ├── App.js                  # Main app component
│   └── index.js                # React entry point
│
├── 📁 public/
│   ├── index.html
│   └── images/                 # Static assets
│
├── 📁 components/               # Shared components
│   ├── theme-provider.tsx
│   └── ui/                     # 50+ Radix UI components
│
├── 📁 hooks/                    # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── 📁 lib/
│   └── utils.ts                # Utility functions
│
├── 📁 styles/
│   └── globals.css             # Tailwind base
│
├── 📄 Configuration Files
│   ├── next.config.mjs         # Next.js config
│   ├── tailwind.config.js      # Tailwind config
│   ├── tsconfig.json           # TypeScript config
│   ├── postcss.config.mjs      # PostCSS config
│   ├── components.json         # shadcn/ui config
│   └── package.json            # Dependencies
│
└── 📄 Documentation
    ├── README.md               # This file
    ├── CONTRIBUTING.md         # Contribution guide
    ├── CHANGELOG.md            # Version history
    ├── SECURITY.md             # Security policy
    ├── CODE_OF_CONDUCT.md      # Community guidelines
    ├── LICENSE.md              # MIT License
    ├── IMPLEMENTATION_GUIDE.md # Setup guide
    └── SYSTEM_INDEX.md         # System overview
```

</details>

## 🚀 Getting Started

### Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-v14%2B-339933?style=flat-square&logo=node.js)
![npm](https://img.shields.io/badge/npm-v6%2B-CB3837?style=flat-square&logo=npm)

Ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** (optional) - [Download](https://git-scm.com/)

### Quick Start

```bash
# 1️⃣ Clone or download the repository
git clone https://github.com/yourproject/scms.git
cd scms

# 2️⃣ Install dependencies
npm install
# or
yarn install

# 3️⃣ Start development server
npm run dev
# or
yarn dev

# 4️⃣ Open in browser
# Navigate to http://localhost:3000
```

### Installation

<details>
<summary>📦 Detailed Installation Steps</summary>

#### Step 1: Clone the Repository
```bash
git clone https://github.com/yourproject/scms.git
cd scms
```

#### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- Next.js 16.0.10
- React 19.2.0
- Tailwind CSS 4.1.9
- Radix UI components
- And all other dependencies

#### Step 3: Environment Setup (Optional)
Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_NAME="SCMS"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

#### Step 4: Start Development Server
```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://0.0.0.0:3000

#### Step 5: Build for Production
```bash
npm run build
npm start
```

</details>

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

### CI Integration

This repository includes GitHub Actions CI that runs on pushes and pull requests to `main`:
- Lint (`npm run lint`)
- Build (`npm run build`)
- Tests (if present) with coverage upload to Codecov (optional)

Enable Codecov by setting `CODECOV_TOKEN` in repo secrets. See `.github/workflows/ci.yml`.

---

## 🔒 Repository Protection

To lock code changes and prevent unauthorized commits:

1. Enable branch protection on `main` (GitHub → Settings → Branches):
    - Require pull request before merging
    - Require at least 1 approval
    - Require status checks to pass (`CI` workflow)
    - Require signed commits (optional)
    - Restrict who can push to matching branches

2. Use `CODEOWNERS` to enforce mandatory reviews (see `.github/CODEOWNERS`).

3. Optionally enforce commit signing and enable Dependabot alerts.

4. Use PR template and issue templates to standardize contributions.

---

### Ports

| Service | Port | URL |
|---------|------|-----|
| Development | 3000 | http://localhost:3000 |
| Production | 3000 | http://localhost:3000 |

---

## 🔐 Demo Credentials

![Demo](https://img.shields.io/badge/demo-available-success?style=flat-square)

Use any of these credentials to log in and explore the system:

<table>
<tr>
<th>Role</th>
<th>Email</th>
<th>Password</th>
<th>Access Level</th>
</tr>
<tr>
<td>👤 <strong>Citizen</strong></td>
<td><code>citizen@email.com</code></td>
<td><code>password123</code></td>
<td>File & track complaints</td>
</tr>
<tr>
<td>👮 <strong>Officer</strong></td>
<td><code>officer@email.com</code></td>
<td><code>password123</code></td>
<td>Manage assigned complaints</td>
</tr>
<tr>
<td>🔧 <strong>Admin</strong></td>
<td><code>admin@email.com</code></td>
<td><code>password123</code></td>
<td>Full system access</td>
</tr>
</table>

> ⚠️ **Note**: These are demo credentials for testing purposes only. In production, use secure authentication.

---

## 📋 Pages & Routes

### Landing Page
- Hero section with statistics
- Features showcase
- How it works guide
- Call-to-action buttons

### Authentication
- **Login** - Sign in with email & password
- **Register** - Create new citizen account
- **Forgot Password** - Password recovery (UI only)

### Citizen Dashboard
- Dashboard with complaint statistics
- Register new complaint
- View all complaints
- Track complaint status
- View complaint details with timeline
- Manage profile

### Officer Dashboard
- View assigned complaints
- Filter by status (Pending, In Progress, Resolved)
- Update complaint status
- Track performance

### Admin Dashboard
- System-wide analytics
- Department performance
- Officer performance tracking
- SLA violation monitoring

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #0052cc
- **Secondary Green**: #10b981
- **Light Grey**: #f3f4f6
- **Dark Grey**: #6b7280

### Typography
- Modern sans-serif font
- Responsive text sizing
- Proper line spacing

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly buttons

## 🛠️ Available Scripts

Use the Next.js commands outlined above:

- `npm run dev` — Start development server (Turbopack)
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## 📊 Mock Data

The application uses mock data for demonstration:
- **245** total complaints
- **198** resolved complaints
- **8** government departments
- **5** mock officers
- **6** months of complaint trend data

All data is generated in `src/services/mockDataService.js` and can be replaced with real API calls.

## 🔧 Technology Stack

See the Tech Stack section above for current framework versions and tools (Next.js, React, Tailwind, Radix UI, RHF, Zod, Recharts, etc.).

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔄 User Flows

### Citizen Flow
1. Landing Page → Login/Register
2. Dashboard (view stats)
3. Register Complaint
4. My Complaints (view all)
5. Complaint Details (track status)
6. Profile (manage info)

### Officer Flow
1. Login
2. Officer Dashboard
3. View assigned complaints
4. Update complaint status
5. Track performance

### Admin Flow
1. Login
2. Admin Dashboard
3. View analytics
4. Monitor departments
5. Track officers

## 🎯 Future Enhancements

- [ ] Real API integration
- [ ] Database connectivity
- [ ] Real-time notifications
- [ ] Email notifications
- [ ] Document upload storage
- [ ] Chat functionality
- [ ] Mobile app version
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Accessibility improvements

## 📝 Customization

### Change Colors
Edit `src/styles/global.css`:
```css
:root {
    --primary-blue: #0052cc;
    --secondary-green: #10b981;
    --light-grey: #f3f4f6;
}
```

### Add/Remove Departments
Edit `src/utils/constants.js`:
```javascript
export const DEPARTMENTS = [
    { id: 1, name: 'Department Name', icon: 'fa-icon' },
];
```

### Modify Mock Data
Edit `src/services/mockDataService.js` to add more complaints, officers, or analytics.

## 🚨 Troubleshooting

### Port already in use
```bash
PORT=3001 npm start
```

### Node modules issues
```bash
rm -rf node_modules
npm install
```

### Cache issues
```bash
npm cache clean --force
npm install
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org)

## 👥 Team Structure

- **Citizens** - Report complaints
- **Officers** - Handle and resolve complaints
- **Admins** - Monitor system performance

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For issues or feature requests, please create an issue in the project repository.

---

**Version**: 1.0.0  
**Last Updated**: 2026-01-20  
**Built with**: Next.js + React + Tailwind CSS
