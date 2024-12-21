import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'

const SignUpForm: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            // Add any additional user metadata here
          },
          emailRedirectTo: undefined,
        }
      })

      if (error) throw error

      // Force redirect to dashboard
      window.location.href = '/dashboard'
      // Alternative: router.push('/dashboard')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUpForm 