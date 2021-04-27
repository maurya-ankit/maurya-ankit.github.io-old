import React from 'react'
import SchoolIcon from '@material-ui/icons/School';
import { Itemfm, Containerfm } from '../../animation/ItemAppear'
import { motion } from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';
const useStyle = makeStyles((theme) => ({
    listTitle: {
        fontWeight: "bold",
    },
    list: {
        // margin: 10,
        padding: 10,
        listStyle: "none",
        // marginLeft: -30
    },
}))
const ListItem = () => {
    const classes = useStyle()

    return (
        <Box component={motion.ul}
            variants={Containerfm}
            initial="hidden"
            animate="visible"
            padding={0}
        >
            {[1, 2, 3].map((index) => (
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    alignContent="flex-start"
                    wrap="nowrap"
                    key={index}
                    className={classes.list}
                    component={motion.li}
                    variants={Itemfm}

                >
                    <Grid item>
                        <SchoolIcon fontSize="large" className={classes.icon} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" color="initial" className={classes.listTitle}>Title</Typography>
                        <Typography variant="subtitle1" color="textPrimary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut doloribus veritatis quos provident fugit consectetur!
                                </Typography>
                    </Grid>
                </Grid>

            ))}
        </Box>
    )
}

export default ListItem
