import { supabase } from '@/lib/supabase'

// This is a Server Component, it fetches data on the server
export default async function HomePage() {
  const { data: events, error } = await supabase.from('events').select('*')

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mt-4">{event.description}</p>
            {/* The dynamic link correctly routes to the RSVP page with the event's ID */}
            <a href={`/event/${event.id}`} className="block mt-4 text-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              View & RSVP
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}