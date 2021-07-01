const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM clientes;',
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({ response: resultado })
            }
        )
    })
});
router.post('/', (req.res.next) => {
    mysql.getConnection((error, conn;) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'INSERT INTO clientes (cnpj, nome_fantasia, razao_social, cep,endereco, numero, complemento, bairro, cidade, uf) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.cnpj, req.body.nome_fantasia, req.body.razao_social, req.body.cep, req.body.endereco, req.body.numero, req.body.complemento, req.body.bairro, req.body.cidade, req.body.uf],
            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(201).send({
                    mensagem: 'Cliente inserido com sucesso',
                    id_cliente: result
router.get('/:id_cliente', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM clientes WHERE id-cliente = ?;', [req.params.id_cliente],
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({ response: resultado }) const id = req.params.id_cliente
            }
        )
    });
});
router.patch('/', (req.res, next) => {
    mysql.getConnection((error, conn;) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            `UPDATE clientes
            SET cnpj = ? ,
            nome_fantasia = ? ,
            razao_social = ? ,
            cep = ? ,
            endereco = ? ,
            numero = ? ,
            complemento = ? ,
            bairro = ? ,
            cidade = ? ,
            uf = ? ,
            WHERE id_cliente = ?`, 
            [
                req.body.cnpj,
                req.body.nome_fantasia,
                req.body.razao_social,
                req.body.cep,
                req.body.endereco,
                req.body.numero,
                req.body.complemento,
                req.body.bairro,
                req.body.cidade,
                req.body.uf,
                req.body.id_cliente
            ],
            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    mensagem: 'Cliente alterado com sucesso',
                });
            }
        )
    });
});

module.exports = router;