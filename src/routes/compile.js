const Controller = require('../controllers').CompileController;
var router = require('express').Router();
const StatusCodes = require('http-status-codes').StatusCodes;

router.post('/', (req, res, next) => {
    Controller.compile(req.body, res, next)
        .then(result => {
            res.status(StatusCodes.OK).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false });
        })
});

module.exports = router;