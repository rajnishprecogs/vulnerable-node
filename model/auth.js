var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    // FIX: Use parameterized queries to prevent SQL injection
    var db = pgp(config.db.connectionString);
    var q = "SELECT * FROM users WHERE name = $1 AND password = $2;";
    return db.one(q, [username, password]);
}
// This fix uses parameterized queries (with $1 and $2 placeholders) and passes user input as parameters, ensuring that user-supplied values are safely escaped and cannot alter the query structure. This robustly prevents SQL injection.

module.exports = do_auth;

var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";

    return db.one(q);
}

module.exports = do_auth;
