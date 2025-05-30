# Gebo - AI-Powered Content Creation Platform

A modern web application for AI-powered content creation and monetization.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Supabase Setup

1. Create a new Supabase project
2. Create the waitlist table:
   ```sql
   create table waitlist (
     id uuid default gen_random_uuid() primary key,
     email text unique not null,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     status text default 'pending' not null
   );
   ```
3. Enable Row Level Security (RLS):
   ```sql
   alter table waitlist enable row level security;
   ```
4. Add RLS policies:
   ```sql
   -- Create single insert policy
   create policy "enable_insert_for_all" on waitlist
     for insert
     to anon, authenticated
     with check (true);

   -- Create single read policy
   create policy "enable_read_for_all" on waitlist
     for select
     to anon, authenticated
     using (true);
   ```

## Deployment to Vercel

1. Push your code to GitHub
2. Create a new project on Vercel
3. Connect your GitHub repository
4. Add the following environment variables in Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy!
