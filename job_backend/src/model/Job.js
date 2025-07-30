const { Model } = require("objection");

class Job extends Model {
    static get tableName() {
        return 'jobs';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['job_title', 'company_name', 'location', 'job_type'],
            properties: {
                id: { type: 'integer' },
                job_title: { type: 'string' },
                company_name: { type: 'string' },
                location: { type: 'string' },
                job_type: { type: 'string', enum: ['Full-time', 'Part-time', 'Contract', 'Internship'] },
                salary_min: { type: 'integer' },
                salary_max: { type: 'integer' },
                application_deadline: { type: 'string', format: 'date' },
                job_description: { type: 'string' },
                created_at: { type: 'string', format: 'date-time' }
            }
        }
    }
}
module.exports=Job