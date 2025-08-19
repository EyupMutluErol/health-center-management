import { getPatientAppointments } from '../../services/appointmentService'
import { Card, CardContent, Typography,Grid } from "@mui/material";

function Appointments() {
  const appointments = JSON.parse(getPatientAppointments());
  return (
    <Grid container spacing={2}>
      {appointments.map((appt, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              marginLeft:3,
              marginTop:3,
              borderRadius: 3,
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {appt.clinic}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {appt.doctor}
              </Typography>
              <Typography variant="body2">📅 {appt.date}</Typography>
              <Typography variant="body2">⏰ {appt.time}</Typography>
              {appt.note && (
                <Typography
                  variant="body2"
                  sx={{ mt: 1, fontStyle: "italic", color: "gray",width:'100px' }}
                >
                  📝 {appt.note}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

}

export default Appointments
