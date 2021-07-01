const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM usuarios;',
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
            'INSERT INTO usuarios (cliente_id, nome, sobrenome, telefone, email, senha) VALUES (?,?,?,?,?,?)', [req.body.cliente_id, req.body.nome, req.body.sobrenome, req.body.telefone, req.body.email, req.body.senha],
            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(201).send({
                    mensagem: 'Usuário inserido com sucesso',
                    id_usuario: result
router.get('/:id_usuario', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM usuarios WHERE id-usuario = ?;', [req.params.id_usuario,
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({ response: resultado }) const id = req.params.id_usuario
            }
        )
    });
});
router.patch('/', (req.res, next) => {
    mysql.getConnection((error, conn;) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            `UPDATE usuarios
            SET clientes_id = ? ,
            nome = ? ,
            sobrenome = ? ,
            telefone = ? ,
            email = ? ,
            senha = ? ,            
            WHERE id_usuario = ?`, 
            [
                req.body.cliente_id,
                req.body.nome,
                req.body.sobrenome,
                req.body.telefone,
                req.body.email,
                req.body.senha,                
                req.body.id_usuario
            ],
            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    mensagem: 'Usuário alterado com sucesso',
                });
            }
        )
    });
});

module.exports = router;