<!-- this is how we fire a query  -->

const { Client, Pool } = require("pg");

const client = new Pool({
port: 5432,
host: "3.7.44.41",
user: "openerp",
password: "openerp",
database: "commondb",
});

client.connect();

client.query(
"select data from farmstore where docType='VARIANT' limit 1 ",
(err, res) => {
if (!err) {
console.log(JSON.stringify(res.rows));
} else {
console.log(err);
}
}
);

Pooling
If your application is using the database frequently, using a single client connection to the database will likely slow down the application when you have many user requests. The easiest and most convenient way to address that problem is to use a connection pool.

Usually, when a new client connects to the database, the process of establishing a connection and authenticating takes around 20-30 milliseconds. This is significant when you're running more queries leading to seconds of delay, which will likely end up being an unsatisfactory end-user experience.

Also, the PostgreSQL server can only handle a limited number of clients at a given time which will depend on your server memory. So if 100 queries are going on in a second - this limitation might crash your server.

Additionally, the client can process only one request at a time for a single connection which further slows things down.

In a situation like this, you can use the pg-pool module to solve that.

//please go through the documenation why we use pooling

https://www.cockroachlabs.com/blog/what-is-connection-pooling/
