import { Card } from '@mui/material'
import logo from '../mapping/logo';
import exp from '../assets/exp.svg';
import salary from '../assets/salary.svg'
import site from '../assets/site.svg'

import '../styles/Card.css'
const JobCard = ({ job }) => {
    const descriptionLines = job.job_description.split('\n');
    console.log("Rendering JobCard:", job);
    return (
        <Card sx={{
            width: "315px",
            height: "360px",
            borderRadius: "13px",
        }} >
            <div className="company-image">
                <div className="logo-image">
                    <img
                        src={logo(job.company_name)}
                        alt={`${job.company_name} logo`}
                        style={{ width: '65px', height: '65px' }}
                    />
                </div>
                <div className="timing">
                    <p>24h Ago</p>
                </div>
            </div>
            <div className="role">
                <p>
                    {job.job_title}
                </p>
            </div>
            <div className="job-details">
                <span>
                    <img src={exp} />&nbsp;1-3 yr Exp
                </span>
                <span>
                    <img src={site} />&nbsp;OnSite
                </span>
                <span>
                    <img src={salary} />&nbsp;12LPA
                </span>
            </div>
            <div className="description-area">
                <ul>
                    {
                        descriptionLines.map((line, index) => (
                            <li key={index}>{line.replace(/^•\s*/, '')}</li>
                        ))}
                </ul>

            </div>
            <div className="btn-section">
                <button className='apply-btn' >Apply Now</button>
            </div>
        </Card>
    )
}

export default JobCard
