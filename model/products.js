var config = require("../config"),
    pgp = require('pg-promise')(),
    db = pgp(config.db.connectionString);

function list_products() {
    
    var q = "SELECT * FROM products;";

    return db.many(q);
}

function getProduct(product_id) {

    var q = "SELECT * FROM products WHERE id = '" + product_id + "';";

    return db.one(q);
}

function search(query) {
    // FIX: Use parameterized queries to prevent SQL injection
    // Assuming 'db' is a pg-promise or similar library supporting parameterized queries
    // Use $1 for parameter substitution
    var q = "SELECT * FROM products WHERE name ILIKE $1 OR description ILIKE $1;";
    // Add wildcards to the parameter value, not the query string
    var param = '%' + query + '%';
    return db.many(q, [param]);
}
// This fix is secure because it uses parameterized queries, ensuring that user input is never directly concatenated into the SQL statement. The database driver will safely escape the input, preventing any possibility of SQL injection.

function purchase(cart) {

    var q = "INSERT INTO purchases(mail, product_name, user_name, product_id, address, phone, ship_date, price) VALUES('" +
            cart.mail + "', '" +
            cart.product_name + "', '" +
            cart.username + "', '" +
            cart.product_id + "', '" +
            cart.address + "', '" +
            cart.ship_date + "', '" +
            cart.phone + "', '" +
            cart.price +
            "');";

    return db.one(q);

}

function get_purcharsed(username) {

    var q = "SELECT * FROM purchases WHERE user_name = '" + username + "';";

    return db.many(q);

}

var actions = {
    "list": list_products,
    "getProduct": getProduct,
    "search": search,
    "purchase": purchase,
    "getPurchased": get_purcharsed
}

module.exports = actions;
