"use client";
import { useState } from 'react';

export default function RequestPitchdeck() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [position, setPosition] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/send-pitchdeck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, firstName, lastName, organization, comment }),
    });

    if (response.ok) {
      setSuccess(true);
    }

    setLoading(false);
  };

  return (

    <section className="flex items-center justify-center min-h-screen bg-black-100">
    <div className="container px-6 py-12 mx-auto">
        <div className="text-center mb-10">
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get the Pitchdeck</h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">Thank you for your interest. Please fill out this form so you get the pitchdeck by email.</p>
        </div>

        {success ? (
            <p className="mt-4 text-center">Pitchdeck has been sent to your email!</p>
        ) : (
        <div className="flex justify-center">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-black-400 md:p-8 w-full max-w-lg">
                <form onSubmit={handleSubmit}>
                    <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input 
                                type="text" 
                                placeholder="your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input 
                                type="text" 
                                placeholder="your last name" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required 
                                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input 
                        type="email" 
                        placeholder="youremail@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Organization</label>
                        <input 
                        type="text"
                        placeholder="organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}                        
                        required
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Position</label>
                        <input 
                        type="text"
                        placeholder="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}                        
                        required
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Comment</label>
                        <textarea
                        id="comment"
                        name="comment"
                        rows={5}
                        cols={33}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Please write your comment here..."
                        className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className='flex items-center justify-center'> 
                        <button type="submit" disabled={loading}
                        className="px-6 py-3 text-center mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        {loading ? 'Sending...' : 'Send Pitchdeck'}
                        </button>
                    </div>
                   
                </form>
            </div>
        </div>

        )}
    </div>
    </section>


  )
}
