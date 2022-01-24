
import {Box, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles';


const useStyle = makeStyles({
    container: {
        height: 350,
        margin: 10,
        border: '1px solid #d3cede',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection : 'column',
        '& > *':{
            padding: '0 5px 5px 5px ',
        }


    },
    image:{
        height: 150,
        width: '100%',
        objectFit:'cover',
        borderRadius: '10px 10px 0 0'
    },
    text:{
        color : "#878787",
        fontSize: '14px',
    },
    heading:{
        fontSize: '14px',
        fontWeight: "600",
    },
    detail:{
        fontSize: '14px',
        wordBreak: 'break-word'
    }
})

const Post = () => {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    // const addEllipsis = (str, limit) => {
    //     return str.length > limit ? str.substring(0, limit) + '...' : str;
    // } 

    return (
        <Box className={classes.container}>
            <img src={url} alt="Icode-Guru" className={classes.image} />
            <Typography class={classes.text}>Music</Typography>
            <Typography class={classes.heading}>ICode-Guru Blog</Typography>
            <Typography class={classes.text}>ICode-Guru</Typography>
            <Typography class={classes.detail}>our mission</Typography>
        </Box>
    );
};

export default Post;