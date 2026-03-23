
    export const signupFields = [
        {
            type: "email", name: "email", placeholder: "Email Address", label: "Email Address", validation: {
                required: "Email is Required"
            }, errorMsg: "Email Address is required"
        },
        {
            type: "password", name: "password",placeholder: "Password", label: "Password", validation: {
                required: "Password is required",
                minLength: { value: 7, message: "Password must be at least 7 characters" }
            }, errorMsg: "Password should be of minimum 7 digits"
        },
        {
            type: "password", name: "confirmPassword",placeholder: "Confirm Password", label: "Confirm Password", validation: {
                required: "Confirm Password is required",
                validate: (value: string, formValues: any) =>
                    value === formValues.password || "Passwords do not match"
            },
            errorMsg: "Passwords must match"
        }
    ]
    export const loginFields = [
        {
            type: "email", name: "email", placeholder: "Email Address", label: "Email Address", validation: {
                required: "Email is Required"
            }, errorMsg: "Email Address is required"
        },
        {
            type: "password", name: "password",placeholder: "Password", label: "Password", validation: {
                required: "Password is required",
                minLength: { value: 7, message: "Password must be at least 7 characters" }
            }, errorMsg: "Password should be of minimum 7 digits"
        }
    ]

