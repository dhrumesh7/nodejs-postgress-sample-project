import express from 'express';

// Controller
import userController from '../../controllers/user.controller';

// Schema
import userSchema from '../../validations/schemas/user.schema';

//Utility
import ValidationUtility from '../../utilities/validation.utility';

const router = express.Router();

router.get(
  '/',
  userController.me,
);

router.put(
  '/',
  ValidationUtility.validateRequest(userSchema.updateMe),
  userController.updateMe,
);

export default router;
