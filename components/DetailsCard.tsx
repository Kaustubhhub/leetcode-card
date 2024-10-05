'use client'
import axios from 'axios'
import { useState } from 'react'

export const DetailsCard = () => {
    const [username, setUsername] = useState('')
    const [data, setData] = useState<any>({})
    const [loading, setLoading] = useState(false)
    const handleGetDetails = async () => {
        setLoading(true)
        try {
            const response = await axios.post('/api/getuserdetails', {
                username: username,
            })
            console.log('response : ', response)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="border border-black flex justify-center w-4/12 h-[100px] rounded-lg">
            <div className="p-2">
                <label className="block mb-2 text-sm font-medium">Leetcode username</label>
                <div className="flex justify-between items-center gap-2">
                    <input
                        type="text"
                        id="first_name"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="example: neal_wu"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        onClick={handleGetDetails}
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
