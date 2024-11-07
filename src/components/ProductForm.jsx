import { Button, Card, CardActions, CardContent, CardHeader, Grid2 as Grid, TextField } from '@mui/material';
import Joi from 'joi';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const ProductForm = ({onSubmit, initialValue}) => {
    const navigate = useNavigate();

    const [form, setForm] = useState(
        initialValue ?? {
        title: "",
        price: 0,
        image: "",
      }
    );

    const [errors, setErrors] = useState({});

    const schema = Joi.object({
        title: Joi.string().min(5).max(500).required(),
        price: Joi.number().min(1).required(),
        image: Joi.string().min(5).max(500).allow("").optional(),
      });

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form", form);
    onSubmit(form);
    navigate("/productsTable");
  }; 

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const result = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    console.log("errors", errors);
    if (result.error) {
      // set errors
      setErrors({
        ...errors,
        [input.name]: result.error.details[0].message,
      });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    console.log(!!result.error)
    return !!result.error;
    
  };

  return (
    <Grid container justifyContent={"center"} component={"form"} onSubmit={handleSubmit}>
        <Grid size={6}>
            <center><h1>Product Form</h1></center>
            <Card>
                <CardHeader></CardHeader>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                name="title"
                                type='text'
                                error={!!errors.title}
                                helperText={errors.title}
                                label="Product Name"
                                variant="standard"
                                onChange={handleChange}
                                value={form.title}
                                fullWidth
                                />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                name="price"
                                type='number'
                                error={!!errors.price}
                                helperText={errors.price}
                                label="Product Price"
                                variant="standard"
                                onChange={handleChange}
                                value={form.price}
                                fullWidth
                                />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                name="image"
                                type='text'
                                error={!!errors.image}
                                helperText={errors.image}
                                label="Product Image"
                                variant="standard"
                                onChange={handleChange}
                                value={form.image}
                                fullWidth
                                />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button  type="submit" disabled={isFormInvalid()} variant="contained">
                        Submit
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIosIcon />}
                        LinkComponent={Link}
                        to="/productsTable">
                        Back
                </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}

export default ProductForm