import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { InputBase, Button, Grid, Typography, Box } from '@material-ui/core';
import clsx from 'clsx';
import { useHistory } from 'react-router'
const useStyle = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(2),
        backgroundColor: theme.palette.alternate.primary,
        // margin: 10,
        padding: 20,
    },
    uploadImg: {
        // padding:20,
        marginTop: 10,
        marginBottom: 20,
    },
    url: {
        marginTop: 10,
        borderRadius: theme.spacing(2),
        background: theme.palette.info.light,
    },
    markdown: {
        width: "100%",
        marginBottom: 10,
        "& h1": theme.typography.h1,
        "& h2": theme.typography.h2,
        "& h3": theme.typography.h3,
        "& h4": theme.typography.h4,
        "& h5": theme.typography.h5,
        "& h6": theme.typography.h6,
        "& li": {
            // listStyle: "none",
            ...theme.typography.subtitle1,
            paddingLeft: 0,
            margin: theme.spacing(2),
            fontSize: theme.spacing(2)
        },
        "& p": theme.typography.body1,
        "& code": {
            // color: "blue",
            padding: 10,
            fontFamily: "Courier Prime",
            // backgroundColor:theme.palette.grey
        },
        "& img": {
            borderRadius: theme.spacing(2),
            display: "block",
            height: "auto",
            maxWidth: "100%"
        },
        "& iframe": {
            borderRadius: theme.spacing(2),
            // display: "block",
            // height: "auto",
            maxWidth: "100%",
            [theme.breakpoints.down('sm')]: {
                height: 315
                // aspectRatio: "inherit"
            }
        }
    }
}))
const EditDetail = (props) => {
    const classes = useStyle()
    const [content, setContent] = useState("")
    const history = useHistory()

    const handleOnChange = (e) => {
        setContent(e.target.value)
    }
    return (
        <Box display="flex" flexDirection="column" alignItems="stretch" padding={0}
        > <>
                <Typography variant="h6" color="initial" style={{ margin: 10, color: "blue" }}>
                    Update the Detail here - <kbd> Markdown Supported</kbd>
                </Typography>
                <InputBase
                    fullWidth
                    multiline
                    defaultValue={content}
                    onChange={handleOnChange}
                    className={classes.root}
                />


                {content && <><Typography variant="h6" color="initial" style={{ margin: 10, color: "blue" }}>
                    Markdown Preview
            </Typography>
                    <ReactMarkdown plugins={[gfm]} allowDangerousHtml className={clsx(classes.root, classes.markdown)} children={content} />
                </>}
                <Grid container spacing={1}
                    justify="space-around"
                >
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={() => history.goBack()}>
                            Back
                    </Button>
                    </Grid>
                    {content && <Grid item>
                        <Button variant="contained" color="primary"
                        // onClick={handleSubmit}
                        >
                            Submit
                    </Button>
                    </Grid>}


                </Grid>

            </>
        </Box>
    )
}

export default EditDetail
