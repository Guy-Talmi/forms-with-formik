import React from 'react';
//import Header from './Components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  TextFieldWrapper,
  SelectWrapper,
  DateTimePickerWrapper,
  CheckboxWrapper,
  ButtonWrapper
} from './Components';
import countries from './countries.json';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  message: '',
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  //phone: Yup.integer().typeError('Please enter a valid phone number').required('Required'),
  phone: Yup.number().typeError('Please enter a valid phone number').required('Required'),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  arrivalDate: Yup.date().required('Required'),
  departureDate: Yup.date().required('Required'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <Header /> */}
      </Grid>
      
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              {({ values }) => (
                <Form>
                  <Grid container spacing={2}>

                    <Grid item xs={12}>
                      <Typography>
                        Your details
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextFieldWrapper
                        name="firstName"
                        label="First Name"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextFieldWrapper
                        name="lastName"
                        label="Last Name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextFieldWrapper
                        name="email"
                        label="Email"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextFieldWrapper
                        name="phone"
                        label="Phone"
                      />
                    </Grid>


                    <Grid item xs={12}>
                      <Typography>
                        Address
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <TextFieldWrapper
                        name="addressLine1"
                        label="Address Line 1"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextFieldWrapper
                        name="addressLine2"
                        label="Address Line 2"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextFieldWrapper
                        name="city"
                        label="City"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextFieldWrapper
                        name="state"
                        label="State"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <SelectWrapper
                        name="country"
                        label="Country"
                        options={countries}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>
                        Booking information
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <DateTimePickerWrapper
                        name="arrivalDate"
                        label="Arrival Date"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <DateTimePickerWrapper
                        name="departureDate"
                        label="Departure Date"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextFieldWrapper
                        name="message"
                        label="Message"
                        multiline={true}
                        rows={4}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <CheckboxWrapper
                        name="termsOfService"
                        legend="Terms Of Service"
                        label="I agree"

                      />
                    </Grid>

                    <Grid item xs={12}>
                      <ButtonWrapper>
                        Submit Form
                      </ButtonWrapper>
                    </Grid>


                  </Grid>

                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
};

export default App;
