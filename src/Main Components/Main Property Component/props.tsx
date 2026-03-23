
 export const propertyButtonList = [
        {
            css: "text-white mt-6 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-xs text-sm px-6 py-3 focus:outline-none",
            text: "Submit",
        }
    ]

export const PropertyFields = [
        {
            type: "text", name: "propertyName", placeholder: "Property Name", label: "Property Name", validation: {
                required: "Property Name is Required",
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Property Name should contain only alphabets"
                }
            }, errorMsg: "Property Name is required"
        },
        {
            type: "text", name: "propertyDesc", placeholder: "Property Description", label: "Property Description", validation: {
                required: "Property Description is Required",
                pattern: {
                    value: /^[A-Za-z0-9\s,.\-]+$/,
                    message: "Property Description should contain only alphabets"
                }
            }, errorMsg: "Property Description is required"
        },
        {
            type: "text", name: "address", placeholder: "Address",label: "Address", validation: {
                required: "Address is required",
            }, errorMsg: "Address is required"
        },
        {
            type: "text", name: "city", placeholder: "City",label: "City", validation: {
                required: "City is required",
            }, errorMsg: "City is required"
        },
        {
            type: "number", name: "pincode", placeholder: "Pincode",label: "Pincode", validation: {
                required: "Pincode is required",
                Length:{value:6,message:"Pincode should be of 6 digits"}
            }, errorMsg: "Pincode is required"
        },
        {
            type: "number", name: "rent", placeholder: "Property Rent",label: "Property Rent", validation: {
                required: "Property Rent is required",
                min:{value:5000,message:"Property Rent must be greater then 5,000"}
            }, errorMsg: "Property Rent is required"
        },
        {
            type: "number", name: "electricityCost", placeholder: "Electricity Cost / Unit",label: "Electricity Cost / Unit", validation: {
            }
        }
    ]