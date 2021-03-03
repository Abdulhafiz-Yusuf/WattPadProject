import React, { useState } from 'react';
import Homepage from './Home.js';
import Createbook from './Create.js';
import {
    Drawer,
    CssBaseline,
    AppBar,
    IconButton,
    Avatar, Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText, InputBase,
} from '@material-ui/core';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
// Images
import wattpadlogo from '../assets/wattpadlogo.png';
import { LibraryBooks, Menu, ChevronLeft, Home, ChatRounded, Search, Create, ChevronRight, AccountCircle } from '@material-ui/icons';

const drawerWidth = 220;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,


    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    search: {

        left: '690px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(4),
        marginLeft: 30,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //right: "-45px",
        top: "2px",
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },



    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },




}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);






    /* const [favorites, setFavorites] = useState({});*/


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    /*
        const changeColor = (currentIndex) => {
            // let tempBooks = [...books];
    
            // tempBooks.map((book, index) => index === currentIndex ? { ...book, isFavorite: !book.isFavorite } : book)
    
            // console.log(tempBooks);
            setFavorites({
                ...favorites,
                [currentIndex]: !Boolean(favorites[currentIndex])
            })
        };*/
    /* const [rating, setRating] = useState({});*/
    /*
    const changeRating = (currentIndex) => {
        
        setRating({
            ...rating,
            [currentIndex]: !Boolean(rating[currentIndex])
        })
    };*/


    return (
        <>

            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    style={{ height: '70px', backgroundColor: "black", width: '100%', }}
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <Menu />
                        </IconButton>

                        <img style={{ height: "70px", }} src={wattpadlogo} className="Login-logo" alt="logo" />

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />

                        </div>

                        <Avatar alt="Profile Picture" style={{ backgroundColor: "#f44336", color: "black", right: "-950px", }}  >S</Avatar>

                    </Toolbar>


                </AppBar>
                <Drawer

                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >

                    <div style={{ height: '100%', backgroundColor: "#f44336", color: "black", }}>
                        <div

                            className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List >


                            <ListItem button>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <LibraryBooks />
                                </ListItemIcon>
                                <ListItemText primary="Library" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Create />
                                </ListItemIcon>
                                <ListItemText primary="Create" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <ChatRounded />
                                </ListItemIcon>
                                <ListItemText primary="Update" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>

            {/*<Homepage />*/}
            <Createbook />
        </>

    );
}