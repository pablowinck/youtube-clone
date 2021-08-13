import {
    Box,
    Button,
    Hidden,
    IconButton,
    InputBase,
    Paper,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Apps from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,
    },
    toolbar: {
        minHeight: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        cursor: "pointer",
        height: 18,
        marginLeft: theme.spacing(3),
    },
    search: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        height: 35,
        width: 700,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
}));

const Topbar = ({ setOpen, open }) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} color="default">
            <Toolbar className={classes.toolbar}>
                <Box display="flex" alignItems="center">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => {
                            setOpen(!open);
                        }}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>

                    <img
                        src="/new-youtube-logo.svg"
                        alt="logo"
                        className={classes.logo}
                    />
                </Box>
                <Hidden smDown>
                    <Box>
                        <Paper component="form" className={classes.search}>
                            <InputBase
                                className={classes.input}
                                placeholder="Pesquisar"
                                inputProps={{
                                    "aria-label": "search google maps",
                                }}
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                </Hidden>
                <Box display="flex">
                    <Hidden smDown>
                        <IconButton className={classes.icons}>
                            <VideoCall />
                        </IconButton>
                        <IconButton className={classes.icons}>
                            <Apps />
                        </IconButton>
                        <IconButton className={classes.icons}>
                            <MoreVert />
                        </IconButton>
                        <Button
                            color="secondary"
                            component="a"
                            variant="outlined"
                            startIcon={<AccountCircleIcon />}
                            // onClick={() => signIn("google")}
                        >
                            Fazer Login
                        </Button>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton className={classes.icons}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton className={classes.icons}>
                            <AccountCircleIcon />
                        </IconButton>
                    </Hidden>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
