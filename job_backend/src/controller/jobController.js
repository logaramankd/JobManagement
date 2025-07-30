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
module.exports = createJob