import React, { useContext } from 'react';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AppointmentContext } from '../../context/AppointmentContext';
import { setAppointmentsToLS } from '../../services/appointmentService';

export default function TakeAppointmentForm() {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { isValid } } = useForm();
    const {appointments, setAppointments } = useContext(AppointmentContext);

    const handleFormSubmit = (data) => {
        const updated = [...appointments, data];
        setAppointments(updated);
        setAppointmentsToLS(updated);
        navigate('/history');
    }
    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Box
                    sx={{
                        maxWidth: 600,
                        mx: 'auto',
                        mt: 5,
                        p: 4,
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        boxShadow: 2,
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        Randevu Al
                    </Typography>


                    <Controller
                        name="clinic"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Klinik seçilmelidir" }}
                        render={({ field, fieldState: { error } }) => (
                            <FormControl fullWidth error={!!error} sx={{ mb: 2 }}>
                                <InputLabel>Klinik / Bölüm</InputLabel>
                                <Select {...field} label="Klinik / Bölüm">
                                    <MenuItem value="">-- Seçiniz --</MenuItem>
                                    <MenuItem value="Dahiliye">Dahiliye</MenuItem>
                                    <MenuItem value="Göz">Göz</MenuItem>
                                    <MenuItem value="Kardiyoloji">Kardiyoloji</MenuItem>
                                </Select>
                                {error && (
                                    <Typography variant="caption" color="error">
                                        {error.message}
                                    </Typography>
                                )}
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="doctor"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Doktor seçilmelidir" }}
                        render={({ field, fieldState: { error } }) => (
                            <FormControl fullWidth error={!!error} sx={{ mb: 2 }}>
                                <InputLabel>Doktor</InputLabel>
                                <Select {...field} label="Doktor">
                                    <MenuItem value="">-- Seçiniz --</MenuItem>
                                    <MenuItem value="Dr. Ayşe Yılmaz">Dr. Ayşe Yılmaz</MenuItem>
                                    <MenuItem value="Dr. Ahmet Demir">Dr. Ahmet Demir</MenuItem>
                                    <MenuItem value="Dr. Zeynep Kaya">Dr. Zeynep Kaya</MenuItem>
                                </Select>
                                {error && (
                                    <Typography variant="caption" color="error">
                                        {error.message}
                                    </Typography>
                                )}
                            </FormControl>
                        )}
                    />


                    <Controller
                        name="date"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Tarih seçilmelidir" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="date"
                                fullWidth
                                label="Tarih"
                                InputLabelProps={{ shrink: true }}
                                error={!!error}
                                helperText={error ? error.message : ""}
                                sx={{ mb: 2 }}
                            />
                        )}
                    />


                    <Controller
                        name="time"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Saat seçilmelidir" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="time"
                                fullWidth
                                label="Saat"
                                InputLabelProps={{ shrink: true }}
                                error={!!error}
                                helperText={error ? error.message : ""}
                                sx={{ mb: 2 }}
                            />
                        )}
                    />


                    {/* Açıklama */}
                    <TextField
                        name='note'
                        label="Not (Opsiyonel)"
                        multiline
                        rows={3}
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    {/* Buton */}
                    <Button
                        type='submit'
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={!isValid}
                    >
                        Randevuyu Al
                    </Button>
                </Box>
            </form>
        </LocalizationProvider>

    );
}
