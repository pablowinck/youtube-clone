import { Hidden, makeStyles } from "@material-ui/core";
import Head from "next/head";
import { useState } from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        width: "100vw",
    },
    wrapperOpen: {
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
        paddingTop: 64,
        [theme.breakpoints.up("lg")]: {
            paddingLeft: 256,
        },
    },
    contentContainer: {
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
    },
    content: {
        flex: "1 1 auto",
        height: "100%",
        overflow: "auto",
    },
    wrapperClose: {
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
        paddingTop: 64,
        [theme.breakpoints.up("lg")]: {
            paddingLeft: 10,
        },
    },
}));

const Layout = ({ children, title }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width-device-width"
                />
            </Head>
            <div className={classes.root}>
                <Topbar setOpen={setOpen} open={open} />
                <Hidden smDown>
                    <Navbar open={open} />
                </Hidden>
                <Hidden smUp>
                    <Navbar open={!open} />
                </Hidden>

                <div
                    className={
                        open ? classes.wrapperOpen : classes.wrapperClose
                    }
                >
                    <div className={classes.contentContainer}>
                        <div className={classes.content}>{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
