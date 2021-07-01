//index.js
(async() => {
    const db = require("./db");
    console.log('começou!');

    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({});
    console.log(result);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE CLIENTES');
    const result = await db.updateCustomer({});
    console.log(result);

    console.log('DELETE FROM CLIENTES');
    const result = await db.deleteCustomer();
    console.log(result);

    console.log('INSERT INTO USUARIOS');
    const result = await db.insertCustomer({});
    console.log(result);

    console.log('SELECT * FROM USUARIOS');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE USUARIOS');
    const result = await db.updateCustomer({});
    console.log(result);

    console.log('DELETE FROM USUARIOS');
    const result = await db.deleteCustomer();
    console.log(result);


})();
