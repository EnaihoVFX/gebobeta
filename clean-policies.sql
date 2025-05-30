-- Drop all existing policies
drop policy if exists "Allow public to read own email" on waitlist;
drop policy if exists "Allow public insert to waitlist" on waitlist;
drop policy if exists "Enable insert for anonymous users" on waitlist;
drop policy if exists "Enable read access for anonymous users" on waitlist;

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