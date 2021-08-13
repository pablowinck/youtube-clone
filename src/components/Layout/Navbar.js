import { Drawer, Hidden, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    mobileDrawer: {
        width: 240,
    },
    desktopDrawer: {
        width: 240,
        top: 56,
        height: "calc(100% - 64px)",
        borderRight: "none",
    },
    avatar: {
        cursor: "pointer",
        width: 24,
        height: 24,
    },
    listItem: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: theme.spacing(3),
    },
    listItemText: {
        fontSize: 14,
    },
}));
const Navbar = () => {
    const classes = useStyles();

    return (
        <Hidden mdDown>
            <Drawer
                anchor="left"
                classes={{ paper: classes.desktopDrawer }}
                open
                variant="persistent"
            >
                teste
            </Drawer>
        </Hidden>
    );
};

export default Navbar;
