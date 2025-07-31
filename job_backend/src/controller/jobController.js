const Job = require('../model/Job')
const createJob = async (req, res) => {
    try {
        const newjob = await Job.query().insert(req.body)
        res.status(201).json({ message: 'Job Created Succesfully', newjob, })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create job' });
    }
}
const getJobs = async (req, res) => {
    try {
        const jobs = await Job.query()
        res.status(200).json(jobs)
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
}

const deleteJobById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Job.query().deleteById(id);
        if (deleted) {
            res.status(200).json({ message: 'Job deleted successfully' });
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete job' });
    }
};
module.exports = { createJob, getJobs, deleteJobById }