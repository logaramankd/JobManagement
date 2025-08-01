import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../styles/Landing.css'
import { Box } from '@mui/material'
import JobForm from './JobForm'
import axios from 'axios'
import JobCard from '../components/JobCard'
const LandingPage = () => {
    const [jobs, setJobs] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [filters, setFilters] = useState({
        search: '',
        location: '',
        job_type: '',
        salaryRange: [0, Infinity]
    });

    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    const handleClose = () => setShowForm(false);
    const fetchJobs = () => {
        axios.get(https://jobmanagement-lfij.onrender.com/api/jobs')
            .then((res) => {
                console.log("Fetched jobs:", res.data);
                setJobs(res.data)
            })
            .catch((err) => console.error(err));
    }
    useEffect(() => {
        fetchJobs()
    }, []);

    const jobFilters = jobs.filter((job) => {
        const FilterBySearch = job.job_title.toLowerCase().includes(filters.search.toLowerCase());
        const FilterByLocation = (filters.location && filters.location !== 'All Locations')
            ? job.location === filters.location
            : true;
        const FilterByJobTypes = filters.job_type ? job.job_type.toLowerCase() === filters.job_type.toLowerCase() : true;
        const FilterBySalary =
            Number(job.salary_min) >= filters.salaryRange[0] &&
            Number(job.salary_max) <= filters.salaryRange[1];
        return FilterBySearch && FilterByLocation && FilterBySalary && FilterByJobTypes;
    })

    return (
        <div className='main-container'>
            <div style={{ position: "static" }} >
                <Header
                    handleOpen={() => setShowForm(true)}
                    filters={jobFilters}
                    onFilterChange={handleFilterChange}
                />
            </div>

            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "16px",
                width: "1312px",
                padding: "48px 65px",
            }} >
                {jobFilters.length === 0
                    ? <p>No jobs found</p>
                    : jobFilters.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}

            </Box>
            <Box sx={{
                background: "#0000006e",
                position: "absolute",
                display: showForm ? "block" : "none",
                width: "1440px",
                height: "200vh",
                top: 0,
            }} >
                <JobForm handleClose={handleClose} refreshJobs={fetchJobs} />
            </Box>
        </div>
    )
}

export default LandingPage
