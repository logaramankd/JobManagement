/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('jobs', table => {
        table.increments('id').primary();
        table.string('job_title').notNullable();
        table.string('company_name').notNullable();
        table.string('location').notNullable();
        table.enu('job_type', ['Full-time', 'Part-time', 'Contract', 'Internship']).notNullable();
        table.bigInteger('salary_min').defaultTo(0);
        table.bigInteger('salary_max').defaultTo(0);
        table.date('application_deadline');
        table.text('job_description');

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
