var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.json({
  "users ": [{
  "id ": 123,
  "name": "Juan Perez ",
  "phones": {
  "home ": "999 999 888 ",
  "mobile": "666 555 444"
  },
  "email": [
  "jp@example.com ",
  "jp@example.org "
  ],
  "dateOfBirth": "1980-01-02T00:00:00.000Z",
  "registered": true
  },
  {
  "id ": 456,
  "name": "Jose Garcia",
  "phones": {
  "home ": "999 888 777",
  "mobile": "666 333 999"
  },
  "email": [
  "jg@example.com ",
  "jg@example.org"
  ],
  "dateOfBirth": "1983-01-09T00:00:00.000Z",
  "registered": false
  }
  ]
  });
  });
  //Obtener usuario por id
  router.get('/:id', function(req, res) {
    if (req.params.id == '123') {
    res.json({
    "id ": 123,
    "name": "Juan Perez ",
    "phones": {
    "home ": "999 999 888 ",
    "mobile": "666 555 444"
    },
    "email": [
    "jp@example.com ",
    "jp@example.org "
    ],
    "dateOfBirth": "1980-01-02T00:00:00.000Z",
    "registered": true
    });
    } else
    res.status(404).send('¡Lo siento, el ítem no se ha encontrado!');
    });
    
module.exports = router;
