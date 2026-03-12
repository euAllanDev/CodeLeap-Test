# CodeLeap Network

A simple social network application built with React.

## Features

- **Authentication:** Simple username entry with persistence using `localStorage`.
- **Feed:** Real-time list of posts (fetch, create, update, and delete).
- **CRUD Operations:** 
  - Create new posts.
  - Edit your own posts via modal.
  - Delete your own posts with confirmation modal.
- **UX/UI:** 
  - Responsive design.
  - Skeleton loading states.
  - Relative time formatting for posts.
  - "Logout" functionality.

## Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Data Management:** TanStack Query (React Query)
- **API Requests:** Axios
- **Build Tool:** Vite

## Getting Started

### Prerequisites
- Node.js installed (v16+)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd codeleap-test
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Assessment Notes
- **React Query:** Used to manage server state, handle loading/error states, and trigger automatic re-fetches after mutations (`invalidateQueries`).
- **Responsive Design:** Used mobile-first approach with `max-w-[600px]` to ensure it looks good on both desktop and mobile devices.
