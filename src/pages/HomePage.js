import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import AboutMe from '../components/homepage/AboutMe'
import ImageBox from '../components/homepage/ImageBox'
import { Divider, makeStyles } from '@material-ui/core'
import ItemsCard from '../components/homepage/ItemsCard'
import svg2 from '../resources/ankit.jpg'
import { motion } from 'framer-motion'
import Box from '@material-ui/core/Box'
import pageTransition from '../animation/PageTransition'
import { Itemfm, Containerfm } from '../animation/ItemAppear'
import axios from 'axios'
// import aboutme from '../data/aboutme.json'
const useStyle = makeStyles(() => ({
    root: {
        marginTop: 20,
        padding: 0
    },
    footer: {
        marginTop: 20,
    }
}))


const HomePage = () => {
    const classes = useStyle();
    const [about, setAbout] = useState({})
    useEffect(() => {
        axios.get(`/data/aboutme.json`).then(res => setAbout(res.data))
    }, [])

    return (
        <Box display="flex" flexDirection="column" alignItems="stretch" padding={0}
            component={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            style={{ overflow: "hidden" }}
            variants={pageTransition}
        >
            <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="stretch"
                wrap="wrap-reverse"
                className={classes.root}
                component={motion.ul}
                variants={Containerfm}
                initial="hidden"
                animate="visible"

            >
                <Grid item xs={12} sm component={motion.li} style={{ listStyle: "none" }} variants={Itemfm}>
                    <AboutMe about={about} />
                </Grid>
                <Grid item component={motion.li} style={{ listStyle: "none" }} variants={Itemfm}>
                    <ImageBox about={about} />
                </Grid>
            </Grid>

            <ItemsCard />
            <Divider />
        </Box>

    )
}

export default HomePage
