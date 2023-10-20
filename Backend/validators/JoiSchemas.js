import Joi from "joi";

/**
 * @HELPER
 * @type object
 * @desc schema that defines custom Error Messages
 *
 **/
const customErrorMessages = {
    "string.base": "The field must be a valid string.",
    "string.pattern.base": "Password cannot contain spaces",
    "string.min": "The field must be at least {#limit} characters long.",
    "string.max": "The field must not exceed {#limit} characters.",
    "string.email": "The email address is not valid.",
    "any.required": "The {#label} field is required.",
    "string.empty": "the {#label} Field cannot be empty",
    "number.base": "The {#label} field must be a valid id."
};

/**
 * @HELPER
 * @type object
 * @desc schemas for validating the request body when creating and updating
 *
 **/
const SuccurcalSchema = Joi.object({
    title: Joi.string().required().messages(customErrorMessages),
    description: Joi.string().required().messages(customErrorMessages),
    services: Joi.array(),
});

const ServiceSchema = Joi.object({
    title: Joi.string().required().messages(customErrorMessages),
    description: Joi.string().required().messages(customErrorMessages)
});

const UserSchema = Joi.object({
    first_name: Joi.string().required().messages(customErrorMessages),
    last_name: Joi.string().required().messages(customErrorMessages),
    last_name: Joi.string().required().messages(customErrorMessages),
    email: Joi.string().email().required().messages(customErrorMessages),
    password: Joi.string()
        .pattern(/^\S*$/)
        .min(6)
        .required()
        .messages(customErrorMessages),
    profile_image: Joi.string().required().messages(customErrorMessages)
});

const ExigenceServiceSchema = Joi.object({
    typeInput: Joi.string().required().messages(customErrorMessages),
    title: Joi.string().required().messages(customErrorMessages),
    required: Joi.string().required().messages(customErrorMessages),
    serviceId: Joi.required().messages(customErrorMessages)
});
/**
 * @HELPER
 * @type function
 * @params schema , req.body object
 * @desc function validate sheama either return message or null , takes two parameter schema and req.body object
 *
 **/

const validator = (schema, data) => {
    const { error } = schema.validate(data);

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        throw new Error(errors);
    }
};

export {
    SuccurcalSchema,
    ServiceSchema,
    UserSchema,
    ExigenceServiceSchema,
    validator
};
