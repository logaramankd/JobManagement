/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('jobs').del();

  await knex.raw('ALTER TABLE jobs AUTO_INCREMENT = 1');

  await knex('jobs').insert([
    {
      job_title: 'Full Stack Developer',
      company_name: 'amazon',
      location: 'Bengaluru',
      job_type: 'Full-time',
      salary_min: 30000,
      salary_max: 50000,
      application_deadline: '2025-08-01',
      job_description:
        'A user friendly interface let you browse stunning photos and videos\nFilter destination based on interest and travel style, and create personalized',
    },
    {
      job_title: 'Node Js Developer',
      company_name: 'microsoft',
      location: 'Coimbatore',
      job_type: 'Part-time',
      salary_min: 30000,
      salary_max: 50000,
      application_deadline: '2025-08-01',
      job_description:
        'A user friendly interface let you browse stunning photos and videos\nFilter destination based on interest and travel style, and create personalized',
    },
    {
      job_title: 'UI/UX Designer',
      company_name: 'swiggy',
      location: 'Chennai',
      job_type: 'Internship',
      salary_min: 30000,
      salary_max: 50000,
      application_deadline: '2025-08-01',
      job_description:
        'A user friendly interface let you browse stunning photos and videos\nFilter destination based on interest and travel style, and create personalized',
    },
    {
      job_title: 'Full Stack Developer',
      company_name: 'amazon',
      location: 'Bengaluru',
      job_type: 'Part-time',
      salary_min: 10000,
      salary_max: 90000,
      application_deadline: '2025-08-01',
      job_description:
        'A user friendly interface let you browse stunning photos and videos\nFilter destination based on interest and travel style, and create personalized',
    },
    {
      job_title: 'Node Js Developer',
      company_name: 'microsoft',
      location: 'Coimbatore',
      job_type: 'Full-time',
      salary_min: 40000,
      salary_max: 80000,
      application_deadline: '2025-08-01',
      job_description:
        'A user friendly interface let you browse stunning photos and videos\nFilter destination based on interest and travel style, and create personalized',
    },
    {
      job_title: 'UI/UX Designer',
      company_name: 'swiggy',
      location: 'Chennai',
      job_type: 'Contract',
      salary_min: 10000,
      salary_max: 20000,
      application_deadline: '2025-08-01',
      job_description:
        'A user friendly interface let you browse stunning photos and videos\nFilter destination based on interest and travel style, and create personalized',
    },
    {
      job_title: 'Full Stack Developer',
      company_name: 'amazon',
      location: 'Bengaluru',
      job_type: 'Internship',
      salary_min: 10000,
      salary_max: 90000,
      application_deadline: '2025-08-01',
      job_description:
        'A user friendly interface let you browse stunning photos and videos\nFilter destination based on interest and travel style, and create personalized',
    },
    {
      job_title: 'Node Js Developer',
      company_name: 'microsoft',
      location: 'Coimbatore',
      job_type: 'Internship',
      salary_min: 40000,
      salary_max: 80000,
      application_deadline: '2025-08-01',
      job_description:
        'A user friendly interface let you browse stunning photos and videos\nFilter destination based on interest and travel style, and create personalized',
    },
  ]);
};

