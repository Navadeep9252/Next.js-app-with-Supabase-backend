# Event RSVP Application

This project is a minimal, full-stack application designed to manage and track event RSVPs. It serves as a proof of concept for building data-driven applications using a modern serverless stack. The application allows users to view a list of upcoming events and submit their RSVP status (Yes/No/Maybe) to each.

### Technical Stack

*   **Frontend:** Next.js (App Router) with React
*   **Styling:** Tailwind CSS
*   **Backend:** Supabase (Database & API)
*   **Deployment:** Vercel

### Features

*   **Dynamic Event Listing:** Fetches and displays a list of upcoming events from a Supabase database.
*   **Event-Specific Pages:** Each event has a dedicated page for viewing details and submitting an RSVP.
*   **RSVP Functionality:** Users can select their attendance status, which is recorded in the Supabase database.
*   **Serverless Architecture:** Utilizes Next.js Server Components and Server Actions for efficient data fetching and manipulation, minimizing client-side overhead.

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up your Supabase project as follows:
    *   Create a new project in the Supabase Dashboard.
    *   Run the provided SQL scripts to create the `events` and `rsvps` tables.
    *   Configure Row Level Security (RLS) policies to ensure data is secure.
    *   Populate the `events` table with sample data.

4.  Configure environment variables. In the root of the project, create a `.env.local` file with your Supabase keys:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```

5.  Run the development server:
    ```bash
    npm run dev
    ```

### Live Demo

You can view a live deployment of this application here:
[https://next-js-app-with-supabase-ba-git-d89bbe-navadeepreddys-projects.vercel.app]

### Author

[karukonda Navadeep Reddy]
[https://navadeep9252.github.io/personal_portfolio/]