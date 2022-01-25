import {AppBar , Toolbar , Typography} from '@mui/material';
import {makeStyles} from '@mui/styles'
import { Link} from "react-router-dom";



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
                <Link to={'/'} style={{textDecoration : 'none' , color: 'inherit'}}>
                <Typography>HOME</Typography>
                </Link>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Header;

