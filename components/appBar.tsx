import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


interface titleType {
  title?:string
  to:string
}

export default function Bar({title,to}:titleType):JSX.Element{
    const styles = useStyles();

    return(
    <nav className={styles.root}>
    
      <AppBar position="fixed" color='secondary'>
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={styles.title}>
            MyChart
          </Typography>
           <Button color="inherit" >
              <Link href={to}>{title ? title : "Favorites"}</Link>
           </Button>
        </Toolbar>
      </AppBar>
    
    </nav>
    )
}