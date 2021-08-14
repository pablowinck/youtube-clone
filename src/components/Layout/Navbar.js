import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import History from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import Whatshot from "@material-ui/icons/Whatshot";
import { useRouter } from "next/router";

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

const primaryMenu = [
    { id: 1, label: "Início", path: "/", icon: HomeIcon },
    { id: 2, label: "Em alta", path: "/trendding", icon: Whatshot },
    {
        id: 3,
        label: "Inscrições",
        path: "/subscriptions",
        icon: Subscriptions,
    },
];

const secondaryManu = [
    { id: 1, label: "Biblioteca", icon: VideoLibrary },
    { id: 2, label: "Histórico", icon: History },
];

const Navbar = ({ open }) => {
    const classes = useStyles();
    const isSelected = (item) => router.pathname === item.path;
    const router = useRouter();
    const content = (
        <Box height="100%" display="flex" flexDirection="column">
            <List>
                {primaryMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                        <ListItem
                            key={item.id}
                            button
                            classes={{ root: classes.listItem }}
                            selected={isSelected(item)}
                        >
                            <ListItemIcon>
                                <Icon
                                    style={{
                                        color: isSelected(item) && "#f44336",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={item.label}
                            />
                        </ListItem>
                    );
                })}
            </List>
            <Divider />
            <List>
                {secondaryManu.map((item) => {
                    const Icon = item.icon;
                    return (
                        <ListItem
                            key={item.id}
                            button
                            classes={{ root: classes.listItem }}
                            selected={isSelected(item)}
                        >
                            <ListItemIcon>
                                <Icon
                                    style={{
                                        color: isSelected(item) && "#f44336",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={item.label}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    return (
        // <Hidden mdDown>
        <Drawer
            anchor="left"
            classes={{ paper: classes.desktopDrawer }}
            open={open}
            variant="persistent"
        >
            {content}
        </Drawer>
        // </Hidden>
    );
};

export default Navbar;
