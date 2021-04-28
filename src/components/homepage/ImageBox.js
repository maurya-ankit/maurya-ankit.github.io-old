import { makeStyles, Box } from '@material-ui/core'
import React, { useState } from 'react'
import { Skeleton } from '@material-ui/lab';
const useStyle = makeStyles(() => ({
    img: {
        borderRadius: 30,
        '&:hover': {

        }
    },
}))
const ImageBox = (props) => {
    const classes = useStyle()
    const { about } = props
    const [imageLoaded, setLoaded] = useState(false)

    return (
        <Box
            style={{ position: "relative" }}
        >   {about ? <>
            <img src={about.imgurl} hidden={!imageLoaded} alt="Rahul Dixit" width="300"
                onLoad={() => setLoaded(true)}
                height="auto" className={classes.img} />
            {!imageLoaded && <Skeleton variant="rect" width={300} height={400} animation="wave" className={classes.img} />}
        </>
            : <Skeleton variant="rect" animation="wave" width={300} height={400} className={classes.img} />
            }

        </Box >
    )
}

export default ImageBox
