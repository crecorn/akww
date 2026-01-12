'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { BookingModal } from '@/components/forms/booking-modal'

interface BookingContextType {
  openBookingModal: (service?: string) => void
  openBooking: (service?: string) => void  // Alias for convenience
  closeBookingModal: () => void
  isBookingModalOpen: boolean
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState<string | undefined>()

  const openBookingModal = useCallback((service?: string) => {
    setPreselectedService(service)
    setIsOpen(true)
  }, [])

  const closeBookingModal = useCallback(() => {
    setIsOpen(false)
    setPreselectedService(undefined)
  }, [])

  return (
    <BookingContext.Provider value={{ openBookingModal, openBooking: openBookingModal, closeBookingModal, isBookingModalOpen: isOpen }}>
      {children}
      <BookingModal 
        isOpen={isOpen} 
        onClose={closeBookingModal} 
        preselectedService={preselectedService}
      />
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
