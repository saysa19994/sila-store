import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const email = 'sayedsaed2020@gmail.com';
    const password = 'Sila123456';

    console.log(`Fixing user: ${email}`);

    // 1. Try to find the user in Auth
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
    if (listError) throw listError;

    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      // Update existing user password and confirm email
      const { error: updateError } = await supabase.auth.admin.updateUserById(
        existingUser.id,
        { 
          password: password,
          email_confirm: true,
          user_metadata: { full_name: 'Sayed Saed (Admin)' }
        }
      );
      if (updateError) throw updateError;
    } else {
      // Create new user if not exists
      const { error: createError } = await supabase.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true,
        user_metadata: { full_name: 'Sayed Saed (Admin)' }
      });
      if (createError) throw createError;
    }

    return NextResponse.json({ 
      success: true, 
      message: `Account fixed! You can now login with: Email: ${email} | Password: ${password}` 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
