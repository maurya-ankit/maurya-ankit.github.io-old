import { makeStyles, Typography, Grid, Button, Box, CircularProgress } from '@material-ui/core'
import React, { useState, lazy, Suspense } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
const useStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: "#b6e3ff",
        borderRadius: 20,

        backgroundImage: props => `url(${props.img})`,
        height: 400,
        textDecoration: "none",
        color: "#000",
        '& hover': {
            backgroundColor: "#fff",

        }
    },
    content: {
        margin: 20,
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
    const { isAuthenticated, editing } = props
    const isLoggedIn = isAuthenticated && editing;
    const [edit, setEdit] = useState(isLoggedIn && false)
    return (
        <>
            < Box>

                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    alignContent="center"
                    wrap="nowrap"
                    // component={motion.li}
                    component={isLoggedIn ? "div" : Link}
                    to={`/detail/${props.data.id}`}
                    // className={classes.blur}
                    className={classes.card}
                // whileHover={{ scale: 0.95 }}
                // whileTap={{ scale: 0.9 }}
                >

                    <Grid item>

                        <Typography variant="h3" color="initial" className={classes.content}>
                            {props.data.title}
                        </Typography>
                        <Typography variant="subtitle1" color="initial" className={classes.content}>
                            {props.data.desc}

                        </Typography>

                        <Button variant="text" color="default" endIcon={<ArrowForwardIcon />} className={classes.btn}
                            component={Link}
                            to={`/detail/${props.data.id}`}
                        >
                            Read More
                    </Button>
                    </Grid>
                </Grid>
            </Box ></>
    )
}

export default Card
