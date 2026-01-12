'use client'

import { Calendar } from 'lucide-react'
import { useBooking } from '@/components/providers/booking-provider'
import { cn } from '@/lib/utils/cn'

interface BookNowButtonProps {
  service?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
}

export function BookNowButton({ 
  service, 
  variant = 'primary',
  size = 'md',
  className,
  children,
  showIcon = true,
}: BookNowButtonProps) {
  const { openBookingModal } = useBooking()

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all'
  
  const variants = {
    primary: 'bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white shadow-lg',
    secondary: 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-lg',
    outline: 'border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white',
    ghost: 'bg-transparent hover:bg-slate-100 text-[var(--color-primary)]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      onClick={() => openBookingModal(service)}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {showIcon && <Calendar className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />}
      {children || 'Schedule Online'}
    </button>
  )
}
