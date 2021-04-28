import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Grid, Container } from '@material-ui/core'
import {
    Link
} from "react-router-dom";
const useStyle = makeStyles((theme) => ({
    root: {
        padding: 0,
        marginBottom: theme.spacing(2),
    },
    title: {
        textDecoration: "none",
        fontWeight: "bold",
    },
    navbtn: {
        marginInline: 20,
        paddingInline: 15,
        textDecoration: "none",
        [theme.breakpoints.down('md')]: {
            marginInline: 4,
            paddingInline: 0,
        }

    }
}))
const Header = () => {
    const classes = useStyle()
    return (

        <AppBar position="relative" color="transparent" elevation={0} className={classes.root}>
            <Container maxWidth="lg">

                <Toolbar>

                    <Grid container spacing={1}

                        alignItems="center"
                        alignContent="center"
                        justify="space-between"
                    >
                        <Grid item>
                            <Typography variant="h6" component={Link}
                                to="/" className={classes.title}
                            >
                                Ankit Maurya
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Link to="/" className={classes.navbtn}>Home</Link>



                            <Link to="/contact" className={classes.navbtn}>Contact</Link>


                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header;
