import Joi from "joi";

//  schema that defines custom Error Messages
const customErrorMessages = {
    "string.base": "The field must be a valid string.",
    "string.min": "The field must be at least {#limit} characters long.",
    "string.max": "The field must not exceed {#limit} characters.",
    "string.email": "The email address is not valid.",
    "any.required": "The {#label} field is required.",
    "string.empty": "the {#label} Field cannot be empty"
};

//  schema for validating the request body when creating and updating a Succurcal
const Succurcalschema = Joi.object({
    title: Joi.string().required().messages(customErrorMessages),
    description: Joi.string().required().messages(customErrorMessages)
});

// function validate sheama either return message or null
// takes two parameter schema and req.body object

const validateschema = (schema, data) => {
    const { error } = schema.validate(data);

    if (error) {
        return error.details.map((detail) => detail.message);
    }

    return null; // Return null if validation is successful
};

export { Succurcalschema, validateschema };
