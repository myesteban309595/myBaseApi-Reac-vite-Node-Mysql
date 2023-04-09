const pozosRoute = require('express').Router();
const {v4: uuidv4} = require('uuid');
const pozoModel = require('../models/pozo.model');

pozosRoute.get('/', async(req, res) => {
    pozoModel.getAllPozos()
    .then(data => {
        res.status(200).json({ data });
    })
    .catch(error => {
        res.status(500).json({ error });
    });
});

pozosRoute.get('/:id', async (req, res) => {
    const {id: pozoID} = req.params;
    pozoModel.getByIDPozo(pozoID)
    .then(data => {
        if(data.length > 0) {
            res.status(200).json({ data: { ...data[0] } });
        }
        else {
            res.status(404).json({ error: 'No se encuentra este pozo' });
        }
    })
    .catch(error => {
        res.status(500).json({error});
        console.log("error:::::", error);
    });
});

pozosRoute.post('/', async (req, res) => {
    const pozoID = uuidv4();
    console.log("req.body recibida desde el front:", req.body);
    const {
        nombrePozo,
        operadora,
        ubicacion,
        comentario,
    } = req.body;
    pozoModel.addPozo({
        nombrePozo,
        operadora,
        ubicacion,
        comentario,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                pozoID,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

pozosRoute.put('/:id', async (req, res) => {
    const {id: pozoID} = req.params;
    const {
        author,
        todoDate,
        description,
        state,
    } = req.body;
    pozoModel.updateTodo({
        pozoID,
        author,
        todoDate,
        description,
        state,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                pozoID,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

pozosRoute.delete('/:id', async (req, res) => {
    console.log("req.params:", req.params);
    const {id: pozoID} = req.params;
    pozoModel.deletePozo(pozoID)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more });
    })
    .catch(error => {
        res.status(500).json({ error });
    })
});

module.exports = pozosRoute;