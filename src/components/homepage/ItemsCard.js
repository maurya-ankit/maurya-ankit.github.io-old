import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Card from './card/Card'
import svgImage2 from '../../resources/undraw_Golden_gate_bridge_jkph.svg'
import svgImage from '../../resources/undraw_Code_thinking_re_gka2.svg'
import svgImage3 from '../../resources/undraw_Container_ship_ok1c.svg'
import svgImage4 from '../../resources/undraw_Outer_space_drqu.svg'
import { Box } from '@material-ui/core'
import { motion } from "framer-motion";

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
const images = [
    {
        img: svgImage
    },
    {
        img: svgImage2
    },
    {
        img: svgImage3
    },
    {
        img: svgImage4
    }

]
const ItemsCard = () => {
    const classes = useStyle()
    const [cards, setCard] = useState([
        {
            title: "Educations",
            desc: "My Education details so far",
            id: "Educations"
        },
        {
            title: "Projects",
            desc: "My Project details so far",
            id: "Projects"
        },
    ])

    return (
        <Box className={classes.root}>

            <Grid
                container
                spacing={3}
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
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ listStyle: "none" }} variants={item} >
                        <Card data={card} img={images[index % images.length].img} />
                    </Grid>
                ))}
            </Grid>


        </Box>
    )
}

export default ItemsCard
