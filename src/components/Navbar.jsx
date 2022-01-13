import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-center space-x-4">
                <a href="/dashboard" className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Home</a>
                <a href="/reports" className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Poke Team</a>
                <a href="/projects" className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Project</a>
            </nav>
        </>
    )
}

export default Navbar
