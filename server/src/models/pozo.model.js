const execQuery = require('../helpers/execQuery');
const TYPES = require('tedious').TYPES;

const getAllPozos = () => {
    const query = `
        SELECT * FROM [dbo].[Pozos] ORDER BY Id DESC
    `;
    return execQuery.execReadCommand(query);
};

const getByIDPozo = (pozoID) => {
    console.log("pozo:", pozoID);
    const query = `
        SELECT * FROM [dbo].[Pozos]
        WHERE Id = 4
    `;

    const parameters = [
        {name: 'pozoID', type: TYPES.UniqueIdentifier, value: pozoID},
    ];

    return execQuery.execReadCommand(query, parameters);
};


const addPozo = (pozoData) => {
    console.log("data recibida en modelo addpozo:", pozoData);
    const {
        nombrePozo,
        operadora,
        ubicacion,
        comentario,
    } = pozoData;
    const query = `
        INSERT INTO [dbo].[Pozos] (NombrePozo, Operadora, Ubicacion, Comentario)
        VALUES ( @nombrePozo, @operadora, @ubicacion, @comentario)
    `;
    const parameters = [
        // {name: 'pozoID', type: TYPES.VarChar, value: pozoID},
        {name: 'nombrePozo', type: TYPES.VarChar, value: nombrePozo},
        {name: 'operadora', type: TYPES.VarChar, value: operadora},
        {name: 'ubicacion', type: TYPES.VarChar, value: ubicacion},
        {name: 'comentario', type: TYPES.VarChar, value: comentario},
    ];
    return execQuery.execWriteCommand(query, parameters);
};

const updatePozo = (pozoData) => {
    const {
        id,
        nombrePozo,
        ubicacion,
        operadora,
        comentario,
    } = pozoData;
    const query = `
        UPDATE [dbo].[Pozos]
        SET NombrePozo=@nombrePozo, Ubicacion=@ubicacion, Operadora = @operadora, Comentario = @comentario
        WHERE Id = @id
    `;
    const parameters = [
        {name: 'id', type: TYPES.UniqueIdentifier, value: id},
        {name: 'nombrePozo', type: TYPES.VarChar, value: nombrePozo},
        {name: 'ubicacion', type: TYPES.VarChar, value: ubicacion},
        {name: 'operadora', type: TYPES.VarChar, value: operadora},
        {name: 'comentario', type: TYPES.VarChar, value: comentario},
    ];
    return execQuery.execWriteCommand(query, parameters);
};

const deletePozo = (pozoID) => {
    console.log("DELETE POZO MODEL ID:", pozoID);
    const query = `
        DELETE FROM [dbo].[Pozos]
        WHERE Id = @pozoID
    `;
    const parameters = [
        {name: 'pozoID', type: TYPES.Int, value: pozoID}
    ];
    return execQuery.execWriteCommand(query, parameters);
};

module.exports = {
    addPozo,
    updatePozo,
    deletePozo,
    getAllPozos,
    getByIDPozo,
};