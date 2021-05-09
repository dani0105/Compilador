const Controller = require('../controllers').CompileController;
var router = require('express').Router();
const StatusCodes = require('http-status-codes').StatusCodes;

router.post('/', (req, res, next) => {
    Controller.compile(req.body, res, next)
        .then(result => {
            res.status(StatusCodes.OK).json(result);
        })
        .catch(err => {
            console.error(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, result:{logs:[err]} });
        })
});

module.exports = router;