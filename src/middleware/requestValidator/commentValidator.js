const { body } = require('express-validator');

module.exports = [
  body('content')
    .trim(' ')
    .notEmpty()
    .withMessage('input a content')
    .isLength({ max: 500 })
    .withMessage('content must be a more than 500 characters')
    .escape(),
];
