import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';


import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './Explore.css';
// Images
import logo from '../assets/bluelogo.png';
//components
import Homepage from '../components/Home';
import Createbook from '../components/Create';

const useStyles = makeStyles((theme) => ({

    navigationContainerimg: {
        cursor: 'pointer',
    },
    menuItems: {
        position: 'absolute',
        right: '4.7rem',
        color: '#fff',
        padding: "10px 10px"
    },



}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Explore() {
    const classes = useStyles();
    const [newbook, setNewBook] = useState(null);

    const addBook = (data) => {
        setNewBook(data);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <AppBar style={{ height: "60px", width: "100%", backgroundColor: "#7986cb" }}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {

                            <img className={classes.navigationContainerimg} style={{ height: '61px', width: '181px', marginLeft: '-24px' }} src={logo} alt="logo" />


                        }
                    </Typography>
                    <div className={classes.menuItems}>
                        {

                            <div style={{ alignItems: "right" }}>

                                <Button color="inherit">About</Button>

                                <Button color="inherit" variant="outlined" color="primary" onClick={handleClickOpen}>Create</Button>

                                <Button color="inherit">Library</Button>

                                <Button color="inherit">Updates</Button>

                                <Button color="inherit">Login</Button>

                            </div>

                        }
                    </div>
                </Toolbar>
            </AppBar>
            <div class="container" style={{ height: "570px", }} >
                <div id="slideshow">
                    <div class="elemnt"><span></span></div>
                    <div class="elemnt1"><span></span></div>
                    <div class="elemnt2"><span></span></div>
                    <div class="elemnt3"><span></span></div>
                    <div class="elemnt4"><span></span></div>

                    <div class="introduction">
                        <div class="form">
                            <h1>Wattpad</h1>
                            <h2>Writing Patner</h2>
                            <p>
                                Where stories come to life
                              </p>


                        </div>

                    </div>


                </div>
            </div>

            <br />
            <br />
            <Homepage newbook={newbook} />
            <br />
            <br />
            <br />
            <br />
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} style={{ overflow: "hidden" }}>

                <Toolbar style={{ backgroundColor: "rgb(130, 95, 228)", marginBottom: "-30px" }}>
                    <IconButton edge="start" color="black" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>


                </Toolbar>
                <Createbook addBook={addBook} style={{ overflow: "hidden" }} />



            </Dialog>



        </>

    );
}