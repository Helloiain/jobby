var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {

  axios.get('https://indreed.herokuapp.com/api/jobs?q=Web%20Developer')
    .then(response => {
      let jobsArray = []

      response.data.map((job) => {
        jobsArray.push(job)
      })

      res.render('index', {
        jobs: jobsArray,
        title: 'Jobby'
      })
    })
    .catch(err => {
      console.log('error')
    })
});

module.exports = router;
