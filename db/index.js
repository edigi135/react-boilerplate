'use strict';

var Sequelize = require('sequelize');

var databaseURI = 'postgres://localhost:5432/PROJECT';

var db = new Sequelize(databaseURI, {
    define: {
        timestamps: false,
        underscored: true
    },
    logging: false
});

// db Relationships go here:

module.exports = db;