'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function RsvpForm({ eventId }) {
  const [rsvpStatus, setRsvpStatus] = useState('Maybe')

  const handleRsvp = async (status) => {
    setRsvpStatus(status)
    const fakeUserId = 'e2c3952a-9e12-40f4-a093-41a457492c90'

    const { data, error } = await supabase
      .from('rsvps')
      .upsert(
        { event_id: eventId, user_id: fakeUserId, status },
        { onConflict: 'user_id,event_id' }
      )

    if (error) {
      console.error('Error updating RSVP:', error)
      alert('Failed to update RSVP.')
    } else {
      alert('RSVP updated successfully!')
    }
  }

  return (
    <div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleRsvp('Yes')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${rsvpStatus === 'Yes'? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-300'}`}
        >
          Yes
        </button>
        <button
          onClick={() => handleRsvp('No')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${rsvpStatus === 'No'? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-red-300'}`}
        >
          No
        </button>
        <button
          onClick={() => handleRsvp('Maybe')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${rsvpStatus === 'Maybe'? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-yellow-300'}`}
        >
          Maybe
        </button>
      </div>
      <p className="text-center mt-6 text-gray-600">Your RSVP status: <span className="font-bold">{rsvpStatus}</span></p>
    </div>
  )
}