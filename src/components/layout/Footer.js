import React from 'react'
import { Grid, Typography, IconButton, makeStyles, Box, Link } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const socials = [
    {
        "icon": <LinkedInIcon color="primary" />,
        "url": "https://www.linkedin.com/in/maurya-ankit"
    },
    {
        "icon": <FacebookIcon color="primary" />,
        "url": "https://www.facebook.com/me.vector.ankitmaurya/"
    },
    {
        "icon": <InstagramIcon color="error" />,
        "url": "https://www.instagram.com/__maurya___/"
    },

]
const useStyle = makeStyles((theme) => ({
    footer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(2),

    },
    contact: {
        borderRadius: theme.spacing(2),
        padding: theme.spacing(1)
    },
}))
const Footer = () => {

    const classes = useStyle()
    return (
        <Box>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="flex-start"
                alignContent="center"
                className={classes.footer}
            >
                <Grid item xs={12} sm={6}>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        alignContent="center"
                        className={classes.contact}


                    >
                        <Grid item>
                            <Typography variant="h5" color="primary" align="center">Stay Tuned</Typography>
                            <Typography variant="subtitle1" color="initial" align="center">Connect with me here 👇</Typography>

                        </Grid>
                        <Grid
                            container
                            spacing={1}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            alignContent="center"
                            wrap="nowrap"

                        >

                            {socials.map((social, index) => (
                                <Grid item key={index}>
                                    <IconButton aria-label="fb" component={"a"} href={social.url} target="_blank">
                                        {social.icon}
                                    </IconButton>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={6} >
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        alignContent="center"
                        className={classes.contact}

                    >
                        <Grid item>
                            <Typography variant="subtitle1" color="initial" align="center">
                                Feel free to reach out for collaborations or just a friendly hello 😀
                    </Typography>

                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" color="initial" align="center">
                                mail me here --> <kbd><Link href="mailto:mauryankit20@gmail.com" target="_blank">Ankit Maurya</Link></kbd>
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid></Box>
    )
}

export default Footer
