const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');

router.post('/', (req.res.next) => {
    mysql.getConnection((err, conn;) => {
        if (err) { return res.status(500).send({ error: error }) }
        conn.query('SELECT * FROM user WHERE email = ?', [req.body.email], (error, results) => {
            if (error) { return res.status(500).send({ error: error }) }
            if (results.length > 0) {
                res.status(409).send({ mensagem: 'Usuário já cadastrado' })
            } else {
                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
                    con.query(
                        `INERT INTO user (email, senha) VALUES (?, ?)`,
                        [req.body.email, hash],
                        (error, results) => {
                            conn.realease();
                            if (error) { return res.status(500).send({ error: error }) }
                            response = {
                                mensagem: 'Usuário criado com sucesso',
                                usuarioCriado: {
                                    id_usuario: results.insertId,
                                    email: req.body.email
                                }
                            }
                            return res.status(201).send(response);
                        })
                    });
                }
            })
        })
    })
})
module.exports = router;
                     
            
