import { makeStyles, Typography, Grid, Box } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
const useStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: "#b6e3ff",
        borderRadius: 20,

        backgroundImage: props => `url(${props.data.image})`,
        backgroundSize: "cover",

        height: 400,
        textDecoration: "none",
        color: "#000",
        '&:hover': {
            backgroundColor: "#a6e3ff",

        },
        '&:hover $subtitle': {
            margin: 20,
            display: "block"
        }
    },
    content: {
        margin: 20,
        backdropFilter: "blur(4px)",
        padding: 10,
        borderRadius: theme.spacing(2)
    },
    subtitle: {
        margin: 20,
        // color: "white",
        fontSize: 20,
        display: "none",
        transition: "display 2s",
        backdropFilter: "blur(4px)",
        padding: 10,
        borderRadius: theme.spacing(2)

    },
    btn: {
        margin: 10,
        marginInline: 5
    },
    margin: {
        marginBottom: -10
    }
}))
const Card = (props) => {
    const classes = useStyle(props)
    return (
        <>
            < Box>

                <Grid
                    container
                    spacing={1}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="nowrap"
                    component={Link}
                    to={`/detail/${props.data.id}`}
                    className={classes.card}
                >

                    <Grid item>

                        <Typography variant="h1" color="initial" className={classes.content}>
                            {props.data.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" color="textSecondary" className={classes.subtitle}>
                            {props.data.desc}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate libero similique minus aperiam tenetur placeat et nesciunt quam velit eaque.

                        </Typography>
                    </Grid>
                </Grid>
            </Box ></>
    )
}

export default Card
