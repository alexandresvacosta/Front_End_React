//db.js
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(" mysql://root:root@localhost:3306/cadastro");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
connect();

async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}

async function insertCustomers(customer) {
    const conn = await connect();
    const sql = 'INSERT INTO clientes(cnpj,nome_fantasia,razao_social,cep,endereco,numero,complemento,bairro,cidade,uf) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);';
    const values = [customer.cnpj, customer.nome_fantasia, customer.razao_social, customer.cep, customer.endereco, customer.numero, customer.complemento, customer.bairro, customer.cidade, customer.uf];
    return await conn.query(sql, values);
}

async function updateCustomer(id, customer) {
    const conn = await connect();
    const sql = 'UPDATE clientes SET cnpj=?, nome_fantasia=?, razao_social=?, cep=?, endereco=?, complemento=?, bairro=?, cidade=?, uf=?, WHERE id=?';
    const values = [customer.cnpj, customer.nome_fantasia, customer.razao_social, customer.cep, customer.endereco, customer.numero, customer.complemento, customer.bairro, customer.cidade, customer.uf, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id) {
    const conn = await connect();
    const sql = 'DELETE FROM clientes where id=?;';
    return await conn.query(sql, [id]);
}

async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM usuarios;');
    return rows;
}

async function insertCustomers(customer) {
    const conn = await connect();
    const sql = 'INSERT INTO usuarios(cliente_id, nome, sobrenome, telefone, email, senha) VALUES (?,?,?,?,?,?);';
    const values = [customer.cliente_id, customer.nome, customer.sobrenome, customer.telefone, customer.email, customer.senha];
    return await conn.query(sql, values);
}

async function updateCustomer(id, customer) {
    const conn = await connect();
    const sql = 'UPDATE usuarios SET cliente_id=?, nome=?, sobrenome=?, telefone=?, email=?, senha=?, WHERE id=?';
    const values = [customer.cliente_id, customer.nome, customer.sobrenome, customer.telefone, customer.email, customer.senha, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id) {
    const conn = await connect();
    const sql = 'DELETE FROM usuarios where id=?;';
    return await conn.query(sql, [id]);
}

module.exports = { selectCustomers, insertCustomers, updateCustomer, deleteCustomer }

