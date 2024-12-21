import { supabaseServer } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Use supabaseServer instead of creating a new client
    const { data, error } = await supabaseServer
      .from('waitlist')
      .insert([{ email }])

    if (error) throw error

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}
