import {AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

export default function DenseAppBar() {
    return (
            <Box sx={{flexGrow: 1,}}>
                <AppBar position="static" sx={{bgcolor: 'white'}}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <WorkIcon sx={{color: 'black'}} />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div" sx={{flexGrow: 1, color: 'black'}}>
                           Jobbies
                        </Typography>
                        <Button color="inherit" sx={{color: 'black'}}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
    );
}