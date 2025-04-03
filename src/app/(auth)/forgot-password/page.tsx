import React from 'react'
import { ForgotPasswordForm } from '@/app/(auth)/components/forgot-password-form'

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export default ForgotPasswordPage