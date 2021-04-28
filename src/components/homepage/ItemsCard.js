import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Card from './card/Card'
import { Box } from '@material-ui/core'
import { motion } from "framer-motion";
import axios from 'axios'
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const useStyle = makeStyles(() => ({
    root: {
        marginTop: 20,
        marginBottom: 20,
        padding: 0
    }
}))

const ItemsCard = () => {
    const classes = useStyle()
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios.get(`/data/cards.json`).then(res => setCards(res.data))
    }, [])

    return (
        <Box className={classes.root}>

            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="center"
                alignContent="stretch"
                component={motion.ul}
                variants={container}
                initial="hidden"
                animate="visible"
                className={classes.root}

            >
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={6} key={index} component={motion.li}
                        whileHover={{ scale: 0.98 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ listStyle: "none" }} variants={item} >
                        <Card data={card} />
                    </Grid>
                ))}
            </Grid>


        </Box>
    )
}

export default ItemsCard
