
import { Box} from "@mui/system";
import { withStyles  } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from "@mui/material";


const useStyles = (theme) =>({
  container: {
      margin: '50px 100px',
  },
  image: {
      width: '100%',
      height: '50vh',
      objectFit: 'cover'
  },
  icons: {
      float: 'right'
  },
  icon: {
      margin: 5,
      padding: 5,
      border: '1px solid #878787',
      borderRadius: 10
  },
  heading: {
      fontSize: 38,
      fontWeight: 600,
      textAlign: 'center',
      margin: '50px 0 10px 0'
  },
  author: {
      color: '#878787',
      display: 'flex',
      margin: '20px 0',
  },
  link: {
      textDecoration: 'none',
      color: 'inherit'
  }
});


const Detailview = (props) => {
    console.log(props)
  const classes = props.classes
  console.log(classes)
  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8'
  return (

        <Box class={classes.container}>
          <img src={url} alt="banner" class={classes.image}/>
          {/* <Box className={classes.icons}> 
            
            </Box> */}

            <EditIcon/>
            <DeleteIcon variant='error'/>
            <Typography class={classes.heading}>Title of the Blog</Typography>
            <Box class={classes.subheading}>
              <Typography>Author:<span style={{fontWeight: 600 }}> Asjad</span></Typography>
              <Typography style={{marginLeft: 'auto'}}>25 jan 2022</Typography>
            </Box>
            <Typography>This is a ICode-Guru Blog</Typography>
        </Box>
        


  );
};

export default withStyles(useStyles)(Detailview);
