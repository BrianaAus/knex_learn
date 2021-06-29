
exports.up = function(knex) {
  return knex.schema.createTable('movies', table =>{
      table.increments('id');//adds an auto incrementing pk column
      table.string('title').notNullable();
      table.string('genre');
      table.date('release_date');
      table.timestamps(true, true); //adds created@ and updated@
  })
};

exports.down = function(knex) {
  
    return knex.schema.dropTableIfExists('movies')
};
