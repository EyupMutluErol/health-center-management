import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DashboardBody() {
    const navigate = useNavigate();
    return (
        <div>
            <Box sx={{ p: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ height: 400 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                                alt="Randevu Al"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom sx={{textAlign:'center'}}>
                                    Randevu Al
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={() => {
                                            navigate('/appointments')
                                        }}
                                    >
                                        Git
                                    </Button>
                                </Typography>
                            </CardContent>
                        </Card>
                        
                    </Grid>
                     <Grid item xs={12} sm={6}>
                        <Card sx={{ height: 400 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                                alt="Randevularım"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom sx={{textAlign:'center'}}>
                                    Randevularım
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={() => {
                                            navigate('/history')
                                        }}
                                    >
                                        Git
                                    </Button>
                                </Typography>
                            </CardContent>
                        </Card>
                        
                    </Grid>
                </Grid>
                
            </Box>
            
        </div>
    )
}

export default DashboardBody
