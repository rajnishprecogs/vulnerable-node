var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    // Use parameterized queries to prevent SQL injection
    var q = "SELECT * FROM users WHERE name = $1 AND password = $2;";

    return db.one(q, [username, password]);
}

module.exports = do_auth;

var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    return db.one(q);
}

module.exports = do_auth;


var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    return db.one(q);
}

module.exports = do_auth;

var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    return db.one(q);
}

module.exports = do_auth;
