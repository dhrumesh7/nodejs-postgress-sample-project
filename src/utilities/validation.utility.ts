import ApiResponse from "./api-response.utility";
import httpStatusCodes from 'http-status-codes';

export default class ValidationUtility {
    static validateRequest = (schema) => {
        return (req, res, next) => {
          const result = schema.validate(req.body);
          console.log(result)
          if (result.error) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, result.error?.details?.[0]?.message)
          }
          if (!req.value) {
            req.value = {};
          }
          req.value['body'] = result.value;
          next();
        }
    }
}
