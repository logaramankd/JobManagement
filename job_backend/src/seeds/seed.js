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
      company_name: 'Amazon',
      location: 'Benagluru',
      job_type: 'Full-time',
      salary_min: 0,
      salary_max: 1200000,
      application_deadline: '2025-08-10',
      job_description: 'Build frontend and backend for scalable applications.'
    }
  ]);
};

