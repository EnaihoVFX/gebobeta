-- Drop existing policies
drop policy if exists "Enable insert for anonymous users" on waitlist;
drop policy if exists "Enable read access for anonymous users" on waitlist;

-- Fix table structure
alter table waitlist
  -- Fix email column
  alter column email set not null,
  alter column email drop default,
  add constraint email_not_empty check (email <> ''),
  add constraint email_unique unique (email),
  
  -- Fix status column
  alter column status set not null,
  alter column status set default 'pending',
  add constraint status_valid check (status in ('pending', 'verified', 'rejected'));

-- Recreate policies
create policy "Enable insert for anonymous users" on waitlist
  for insert
  to anon
  with check (true);

create policy "Enable read access for anonymous users" on waitlist
  for select
  to anon
  using (true); 