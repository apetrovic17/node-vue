const express = require('express');
const Joi = require('joi');
const mysql = require('mysql');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'andrija98',
    database: 'patikedb'
});

const route = express.Router();

const validacija = Joi.object().keys({
    naziv: Joi.string().trim().min(2).max(20).required(),
    model: Joi.string().max(512).required(),
    opis: Joi.string().max(512).required(),
    velicina: Joi.number().required(),
    cena: Joi.number().required()
});


const validacijaReg = Joi.object().keys({
    Ime: Joi.string().trim().min(2).max(100).required(),
    Username: Joi.string().trim().min(2).max(100).required(),
    Sifra: Joi.string().trim().min(2).max(100).required()

});

const validacijaLog = Joi.object().keys({
    Username: Joi.string().trim().min(2).max(100).required(),
    Sifra: Joi.string().trim().min(2).max(100).required()

});

route.use(express.json());

route.get('/patike', (req, res) => {

    pool.query('select * from patike', (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else
            res.send(rows);
    });
});


route.post('/patike', (req, res) => {

    let { error } = validacija.validate(req.body);
    if (error)
        res.status(400).send(error.details[0].message);

    else {

        let query = "insert into patike (naziv, model, opis, velicina, cena) values (?, ?, ?, ?, ?)";
        let formated = mysql.format(query, [req.body.naziv, req.body.model,req.body.opis,req.body.velicina,req.body.cena]);


        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {

                query = 'select * from patike where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});


route.post('/kupi', (req, res) => {

  let token = req.headers.token; //token


   jwt.verify(token, 'secretkey', (err, decoded) => {
       if (err) return res.status(401).json({
           title: 'unauthorized'
       })

       pool.query('insert into korpa (idPatike,idKorisnika) values ('+req.body.idPatike+','+decoded.korisnik+')' , (err, rows) => {
           if (err){
               console.log(decoded.korisnik);
               res.status(500).send(err.sqlMessage);
               }
           else{

               res.send(rows);
               }

       });
   });
});


route.post('/register', (req, res) => {

    let { error } = validacijaReg.validate(req.body);
    if (error)
        res.status(400).send(error.details[0].message);

    else {

        var salt = bcrypt.genSaltSync(10);
        let sifra = bcrypt.hashSync(req.body.Sifra, salt);

        let query = "insert into korisnik (Ime, Username, Sifra) values (?, ?, ?)";
        let formated = mysql.format(query, [req.body.Ime, req.body.Username,sifra]);


        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {

                query = 'select * from korisnik where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});



route.post('/login', (req, res) => {

    let { error } = validacijaLog.validate(req.bod);
    if (error)
        res.status(400).send(error.details[0].message);
    else {
        let query = "SELECT * FROM korisnik where Username=?";

        let formated = mysql.format(query, [req.body.Username]);

        // Izvrsimo query
        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {


                if (response.length != 0) {
                    bcrypt.compare(req.body.Sifra, response[0]['Sifra'], (err, result) => {
                        if (err) {
                            console.log('bcrypt - error - ', err);
                            return res.status(401).json({
                                tite: 'login failed',
                                error: 'invalid credentials'
                            })
                        } else {
                            if (!result) {
                                return res.status(401).json({
                                    tite: 'login failed',
                                    error: 'invalid credentials'
                                })
                            } else {
                                let token = jwt.sign({ korisnik: response[0]['id'] }, 'secretkey');
                                return res.status(200).json({
                                    title: 'login sucess',
                                    token: token,
                                    korisnik: response[0]
                                })
                            }

                        }
                    });
                }else{
                    return res.status(401).json({
                        tite: 'login failed',
                        error: 'invalid credentials'
                    })
                }

            }
        });
    }
});



route.get('/patike/:id', (req, res) => {
    let query = 'select * from patike where id=?';
    let formated = mysql.format(query, [req.params.id]);

    pool.query(formated, (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else

            res.send(rows[0]);
    });
});


route.put('/patike/:id', (req, res) => {
  let { error } = validacija.validate(req.body);

    if (error)
        res.status(400).send(error.details[0].message);
    else {
        let query = "update patike set naziv=?, model=?, opis=?, velicina=?, cena=? where id=?";
        let formated = mysql.format(query, [req.body.naziv, req.body.model, req.body.opis, req.body.velicina, req.body.cena, req.params.id]);

        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                query = 'select * from patike where id=?';
                formated = mysql.format(query, [req.params.id]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
      }
});


route.delete('/patike/:id', (req, res) => {
    let query = 'select * from patike where id=?';
    let formated = mysql.format(query, [req.params.id]);

    pool.query(formated, (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else {
            let patika = rows[0];

            let query = 'delete from patike where id=?';
            let formated = mysql.format(query, [req.params.id]);

            pool.query(formated, (err, rows) => {
                if (err)
                    res.status(500).send(err.sqlMessage);
                else
                    res.send(patika);
            });
        }
    });
});

module.exports = route;
