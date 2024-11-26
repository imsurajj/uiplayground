'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface PasswordCriteria {
  minLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

const CriteriaItem = ({ met, text }: { met: boolean; text: string }) => (
  <div className="flex items-center gap-2 text-sm">
    <FontAwesomeIcon 
      icon={met ? faCheck : faTimes} 
      className={met ? 'text-green-500' : 'text-red-500'}
    />
    <span className={met ? 'text-green-500' : 'text-gray-400'}>{text}</span>
  </div>
);

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordCriteria = {
    minLength: formData.password.length >= 8,
    hasUpperCase: /[A-Z]/.test(formData.password),
    hasLowerCase: /[a-z]/.test(formData.password),
    hasNumber: /\d/.test(formData.password),
    hasSpecialChar: /[!@#$%^&*()_+\-={};':"\\|,.<>?]/.test(formData.password),
  };

  const isPasswordValid = () => {
    return (
      passwordCriteria.minLength &&
      passwordCriteria.hasUpperCase &&
      passwordCriteria.hasLowerCase &&
      passwordCriteria.hasNumber &&
      passwordCriteria.hasSpecialChar
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (isSignUp && !isPasswordValid()) {
      setError('Please meet all password requirements');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/custom-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          isSignUp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        router.push('/documentation');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/social-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider,
          isSignUp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      window.location.href = data.authUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative isolate min-h-screen flex items-center justify-center bg-black px-6 py-24 sm:py-32 lg:px-8">
      {/* Animated dots */}
      <div 
        className="absolute h-3 w-3 rounded-full bg-green-500/20"
        style={{
          left: '10%',
          top: '20%',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute h-2 w-2 rounded-full bg-green-500/20"
        style={{
          left: '80%',
          top: '40%',
          animation: 'float 8s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-20px) }
        }
      `}</style>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm p-6 space-y-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-sm text-gray-400">
            {isSignUp ? 'Sign up to access documentation' : 'Sign in to access documentation'}
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm rounded-md p-3">
            {error}
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={() => handleSocialAuth('google')}
            disabled={isLoading}
            className="w-full px-4 py-2 flex items-center justify-center gap-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-lg" />
            Continue with Google
          </button>

          <button
            onClick={() => handleSocialAuth('github')}
            disabled={isLoading}
            className="w-full px-4 py-2 flex items-center justify-center gap-3 bg-white/5 text-white rounded-md hover:bg-white/10 transition-all duration-200 text-sm font-medium ring-1 ring-inset ring-white/10"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
            Continue with GitHub
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-black text-gray-400">Or continue with</span>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/5 border-0 text-white rounded-md ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 text-sm"
                placeholder="Enter your name"
                required={isSignUp}
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white/5 border-0 text-white rounded-md ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/5 border-0 text-white rounded-md ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 text-sm pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {isSignUp && formData.password && (
              <div className="mt-3 space-y-2">
                <CriteriaItem met={passwordCriteria.minLength} text="At least 8 characters" />
                <CriteriaItem met={passwordCriteria.hasUpperCase} text="One uppercase letter" />
                <CriteriaItem met={passwordCriteria.hasLowerCase} text="One lowercase letter" />
                <CriteriaItem met={passwordCriteria.hasNumber} text="One number" />
                <CriteriaItem met={passwordCriteria.hasSpecialChar} text="One special character" />
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
              setFormData({ name: '', email: '', password: '' });
            }}
            className="text-green-500 hover:text-green-400 font-medium"
          >
            {isSignUp ? 'Sign in' : 'Sign up'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
