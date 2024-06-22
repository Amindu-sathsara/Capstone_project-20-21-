import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material';
import './ChildProfile.css'; // If needed for additional custom styles

function ChildProfile() {
    const [formData, setFormData] = useState({
        childName: "",
        childBirthday: "",
        parentName: "",
        parentEmail: "",
        parentPhone: "",
        birthHeight: "",
        birthWeight: "",
        index: "",
        childGender: "",
        childAllergiesAndDiseases: "",
        vaccinesToBeGiven: "",
        vaccinesGiven: "",
        MedicalRecords: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit is done and dusted.");
        console.log(formData);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Let's create a Child profile here...
            </Typography>
            <form onSubmit={handleSubmit} className="form-container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Child full name"
                            name="childName"
                            value={formData.childName}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Child birthday"
                            name="childBirthday"
                            value={formData.childBirthday}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Parent full name"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="email"
                            label="Parent email"
                            name="parentEmail"
                            value={formData.parentEmail}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="tel"
                            label="Parent phone"
                            name="parentPhone"
                            value={formData.parentPhone}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Birth height (cm)"
                            name="birthHeight"
                            value={formData.birthHeight}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Birth weight (Kg)"
                            name="birthWeight"
                            value={formData.birthWeight}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Index"
                            name="index"
                            value={formData.index}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Child gender"
                            name="childGender"
                            value={formData.childGender}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Child allergies and diseases"
                            name="childAllergiesAndDiseases"
                            value={formData.childAllergiesAndDiseases}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Vaccines to be given"
                            name="vaccinesToBeGiven"
                            value={formData.vaccinesToBeGiven}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Vaccines given"
                            name="vaccinesGiven"
                            value={formData.vaccinesGiven}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Medical records"
                            name="MedicalRecords"
                            value={formData.MedicalRecords}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default ChildProfile;
