import express from 'express';
import Semestre from '../models/semestre.js';
// import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    // app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
    //     res.sendStatus(200);
    // });

    var semestre = new Semestre();

    // app.post('/login', semestre.connect);

    router.get('/', semestre.findAll);

    // router.get('/:id', semestre.findById);

    router.post('/', semestre.create);

    // router.put('/:id', semestre.update);

    // router.delete('/:id', semestre.delete);

    app.use('/semestres', router);

};
