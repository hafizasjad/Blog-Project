

import { Button, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { categories } from '../../constants/data';

const useStyles = makeStyles({
    create:{
        width: '80%',
        margin: 20,
        color: '#FFFFFF',
        background: '#24A0ED',
        border: 10,
        borderRadius:5,
        padding : 10
        
    },
    table: {
        fontFamily: "sans-serif",
        border: '1px solid rgba(224, 224, 224, 1)'
    },
})


const Categories = () => {
    const classes = useStyles();

  return (
  <div>
      <Button variant="contained" class={classes.create}>Create Blog</Button>
      <Table className={classes.table}>
          <TableHead>
              <TableRow>
                  <TableCell>All Categories</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {
                categories.map(category => (
                    <TableRow>
                        <TableCell>{category}</TableCell>
                    </TableRow>
                ))
            }
          </TableBody>
      </Table>
  </div>
  );
};

export default Categories;


