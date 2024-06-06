import * as express from 'express';
import * as joi from 'joi'
const schemaValidator = require('express-joi-validator');

// Controller
import userController from '../../controllers/user.controller';

// Schema
import userSchema from '../../validations/schemas/user.schema';

//Utility
import ValidationUtility from '../../utilities/validation.utility';

const router = express.Router();

router.post(
  '/register',
  ValidationUtility.validateRequest(userSchema.register),
  userController.create,
);

router.post(
  '/login',
  ValidationUtility.validateRequest(userSchema.login),
  userController.login,
);

export default router;