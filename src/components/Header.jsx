import {AppBar , Toolbar , Typography} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles({
    component:{
        backgroundColor: "#FFFFFF",
        color:'black',
    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        '& > * ':{
            padding: 20
        },
    },
});



const Header =() =>{
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Typography>HOME</Typography>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Header;

