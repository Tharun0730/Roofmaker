import { Box, Typography } from '@mui/material';

function HomeMsg() {
    return (
        <Box
            sx={{
                minHeight: '120px',
                bgcolor: 'rgb(29,182,238)',
                display: 'flex',
                justifyContent: 'center',
                paddingBlock: '2rem',
            }}
        >
            <Box
                sx={{
                    width: { xs: '90%', md: '90%', lg: '75%' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: {
                                xs: '1rem',
                                sm: '1.15rem',
                                md: '1.25rem',
                            },
                        }}
                    >
                        looking for a <b>quality roofing contractor </b>for your
                        project?
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Box
                        sx={{
                            minHeight: '30px',
                            width: 'fit-content',
                            bgcolor: '#a09d9d',
                            padding: '0.7rem',
                            color: 'white',
                        }}
                    >
                        View Our Projects
                    </Box>
                    <Box
                        sx={{
                            minHeight: '30px',
                            width: 'fit-content',
                            bgcolor: '#a09d9d',
                            padding: '0.7rem',
                            color: 'white',
                        }}
                    >
                        Contact Us
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HomeMsg;
