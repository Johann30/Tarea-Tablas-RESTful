const express = require('express');

function list(req, res, next){
    res.send('respond with list');
}

function index(req, res, next){
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const result = n1 + n2;
    res.send(`${n1} + ${n2} = ${result}`);
}

function create(req, res, next){
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const result = n1 * n2;
    res.send(`${n1} * ${n2} = ${result}`);
}

function replace(req, res, next){
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const result = n1 / n2;
    res.send(`${n1} / ${n2} = ${result}`);
}

function update(req, res, next){
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const result = Math.pow(n1, n2);
    res.send(`${n1} ^ ${n2} = ${result}`);
}

function destroy(req, res, next){
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const result = n1 - n2;
    res.send(`${n1} - ${n2} = ${result}`);
}

module.exports = { list, index, create, replace, update, destroy};