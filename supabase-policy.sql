-- Enable RLS on the waitlist table
alter table waitlist enable row level security;

-- Create a simple policy that allows anyone to insert
create policy "Enable insert for anonymous users" on waitlist
  for insert
  to anon
  with check (true);

-- Allow reading the inserted data
create policy "Enable read access for anonymous users" on waitlist
  for select
  to anon
  using (true); 