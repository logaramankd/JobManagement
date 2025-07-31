import React, { useState } from 'react'
import Header from '../components/Header'
import '../styles/Landing.css'
const LandingPage = () => {
    const [jobs, setJobs] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [filters, setFilters] = useState({
        search: '',
        location: '',
        jobType: '',
        salaryRange: [0, 90000]
    });

    return (
        <div className='main-container'>
            <div>
                <Header />
            </div>
        </div>
    )
}

export default LandingPage
