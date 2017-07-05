import mongoose from 'mongoose';
import semestre from './semestre.js';


const semestreSchema = new mongoose.Schema({
  number : {
    type: String,
  },
  describeSemestre : {
    type: String,
  },
  ue : {
    type: String
  },
  describeUe : {
    type: String
  },
  image : {
    type: String
  },
  pdf : {
    type: String
  },
});

let model = mongoose.model('Semestre', semestreSchema);

export default class Semestre {

  create(req, res) {
    model.create(req.body, (err, semestre) => {
      if (err) {
        res.status(500).send({
          error: err
        });
      } else {
        res.json({
          success: true,
          semestre: semestre
        });
      }
  });
 }

 findAll(req, res) {
   model.find({})
   .exec((err, semestres) => {
       if (err || !semestres) {
         res.sendStatus(403);
       } else {
         res.json(semestres);
         console.log('getAll');
       }
     });
 }
}
