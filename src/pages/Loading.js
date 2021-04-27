import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { motion } from "framer-motion"

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.info.main,
        marginTop: 100,
        marginBottom: 100,
    },
}
))
const Loading = (theme) => {
    const classes = useStyle()
    const main = "#2196f3"
    const primary = "#1976d2"
    return (
        <center>
            <Box component={motion.div}
                className={classes.root}
                width={100}
                height={100}

                animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    backgroundColor: [main, main, primary, primary, main]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            />
        </center>


    )
}

export default Loading
