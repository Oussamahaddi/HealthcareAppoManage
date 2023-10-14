import Joi from "joi";
import exit from "express"
//  schema that defines custom Error Messages
const customErrorMessages = {
    "string.base": "The field must be a valid string.",
    "string.min": "The field must be at least {#limit} characters long.",
    "string.max": "The field must not exceed {#limit} characters.",
    "string.email": "The email address is not valid.",
    "any.required": "The {#label} field is required.",
    "string.empty": "the {#label} Field cannot be empty"
};

//  schemas for validating the request body when creating and updating a Succurcal
/**
 * @HELPER
 * @type object
 * @desc schemas for validating the request body when creating and updating
 *
 **/
const SuccurcalSchema = Joi.object({
    title: Joi.string().required().messages(customErrorMessages),
    description: Joi.string().required().messages(customErrorMessages)
});

const ServiceSchema = Joi.object({
    title: Joi.string().required().messages(customErrorMessages),
    description: Joi.string().required().messages(customErrorMessages)
});

const AdminSchema = Joi.object({
    first_name: Joi.string().max(20).required().messages(customErrorMessages),
    last_name: Joi.string().max(20).required().messages(customErrorMessages),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }).messages(customErrorMessages),
    password: Joi.string().min(10).required().messages(customErrorMessages),
    profile_image: Joi.string().required().messages(customErrorMessages)
})

/**
 * @HELPER
 * @type functions
 * @params schema , req.body object
 * @desc function validate sheama either return message or null , takes two parameter schema and req.body object
 *
 **/

const validateschema = (schema, data) => {
    const { error } = schema.validate(data);
    if (error) {
        return error.details.map((detail) => detail.message);
    }

    return null; // Return null if validation is successful
};

export { SuccurcalSchema, AdminSchema, ServiceSchema, validateschema };
