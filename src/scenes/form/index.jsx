import {Box, Button, TextField } from "@mui/material";
import { Formik, } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
 
const initialValues ={
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2:"",
};

// const phoneRegExp = 
//     (\+254|^){1}[ ]?[7]{1}([0-3]{1}[0-9]{1})[ ]?[0-9]{3}[ ]?[0-9]{3}\z;

//  define validation logic for each field 
const userSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    // contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Contact number is required"),/
    address1: yup.string().required("Address 1 is required"),
    address2: yup.string().required("Address 2 is required"),
});

// form component

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)"); //avoids using css

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return(
        <Box m="20px">
            <Header title="CREATE A USER" subtitle="Create a New User Profile" />
            <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
            >
            {({values,handleChange,handleBlur,errors,touched}) => (
            <form onSubmit={handleFormSubmit}>
                <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{"& > div": {gridColumn: isNonMobile ? undefined : "span 4"},
                    }}
                >
                    <TextField fullWidth  variant="filled"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2"}}
                    />

                    <TextField fullWidth  variant="filled"
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2"}}
                    />

                    <TextField fullWidth  variant="filled"
                    type="text"
                    label="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4"}}
                    />

                    <TextField fullWidth  variant="filled"
                    type="text"
                    label="Contact Number"
                    name="contact"
                    value={values.contact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ gridColumn: "span 4"}}
                    />

                    <TextField fullWidth  variant="filled"
                    type="text"
                    label="Address 1"
                    name="adress1"
                    value={values.adress1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.adress1 && !!errors.adress1}
                    helperText={touched.adress1 && errors.adress1}
                    sx={{ gridColumn: "span 4"}}
                    />

                    <TextField fullWidth  variant="filled"
                    type="text"
                    label="Address 2"
                    name="adress2"
                    value={values.adress2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.adress2 && !!errors.adress2}
                    helperText={touched.adress2 && errors.adress2}
                    sx={{ gridColumn: "span 2"}}
                    />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                     Create New User
                </Button>
                    
                </Box>
            </form>
            )}
            </Formik>
        </Box>
    )
}
export default Form;