export const OwnerProfileFields = [
        {
            type: "text", name: "name", placeholder: "Name", label: "Name", validation: {
                required: "Name is Required",
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name should contain only alphabets"
                }
            }, errorMsg: "Name is required"
        },
        {
            type: "text", name: "address",placeholder: "Address", label: "Address", validation: {
                required: "Address is required",
            }, errorMsg: "Address is required"
        },
        {
            type: "text", name: "city", label: "City",placeholder: "City" ,validation: {
                required: "City is required",
            }, errorMsg: "City is required"
        },
        {
            type: "number", name: "pincode", placeholder: "Pincode", label:"Pincode",validation: {
                required: "Pincode is required",
                Length:{value:6,message:"Pincode should be of 6 digits"}
            }, errorMsg: "Pincode is required"
        },
        {
            type: "number", name: "age", placeholder: "Age",label:"Age", validation: {
                required: "Age is required",
            }, errorMsg: "Age is required"
        },
        {
            type: "text", name: "gender", placeholder: "Gender",label:"Gender", validation: {
                required: "Gender is required",
            }, errorMsg: "Gender is required"
        },
        {
            type: "text", name: "occupation", placeholder: "Occupation",label:"Occupation",validation:{
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name should contain only alphabets"
                }
            }
        },
    ]

export const TenantProfileFields=[
    {
            type: "text", name: "firstName", placeholder: "First Name", label: "First Name", validation: {
                required: "First Name is Required",
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "First Name should contain only alphabets"
                }
            }, errorMsg: "First Name is required"
        },
        {
            type: "text", name: "lastName", placeholder: "Last Name", label: "Last Name", validation: {
                required: "Last Name is Required",
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Last Name should contain only alphabets"
                }
            }, errorMsg: "Last Name is required"
        },
        {
            type: "text", name: "address", placeholder: "Home Address", label:"Home Address", validation: {
                required: "Address is required",
            }, errorMsg: "Address is required"
        },
        {
            type: "text", name: "city", placeholder: "Home City",label:"Home City", validation: {
                required: "City is required",
            }, errorMsg: "City is required"
        },
        {
            type: "number", name: "pincode", placeholder: "Pincode",label:"Pincode", validation: {
                required: "Pincode is required",
                Length:{value:6,message:"Pincode should be of 6 digits"}
            }, errorMsg: "Pincode is required"
        },
        {
            type: "number", name: "age", placeholder: "Age",label:"Age", validation: {
                required: "Age is required",
            }, errorMsg: "Age is required"
        },
        {
            type: "text", name: "gender", placeholder: "Gender",label:"Gender", validation: {
                required: "Gender is required",
            }, errorMsg: "Gender is required"
        },
        {
            type: "text", name: "occupation", placeholder: "Occupation",label:"Occupation",validation:{
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name should contain only alphabets"
                }
            }
        },
    ]

 export const buttonList = [
        {
            css: "mt-4 text-white border-indigo-500 btn btn-outline hover:bg-black bg-indigo-500 px-12 py-6",
            text: "Submit"
        }
    ]