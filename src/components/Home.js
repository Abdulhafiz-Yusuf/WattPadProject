import React, { useState } from 'react';
import {
    Card, CardHeader, CardActions, Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Images

import killamockingbirdcover from '../assets/to-kill-a-mocking-bird.cover.jpg';
import prideandprejudicecover from '../assets/prideprejudice.cover.jpg';
import kiterunnercover from '../assets/kiterunnercover.jfif';
import allthelightwecannotseecover from '../assets/allthelightwecannotsee.jfif';
import thebookthiefcover from '../assets/thebookthief.jfif';
import andthemountainsechoedcover from '../assets/andthemountainsechoedcover.jfif';
import athousandsplendedsunscover from '../assets/athousandsplendedsunscover.jfif';
import jonathanlivingtonseagullcover from '../assets/jonathan livington seagull.jfif';
import thegoldfinchcover from '../assets/thegoldfinch.jfif';
import fireflylanecover from '../assets/fireflylane.jfif';
import thealchemistcover from '../assets/thealchemist.jfif';
import thenightingalecover from '../assets/the nightingale.jfif';

import { LibraryAdd } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
const drawerWidth = 180;
const useStyles = makeStyles((theme) => ({

    cardroot: {
        maxWidth: 245,
    },



    rating: {
        display: 'flex'
    },


}));




function Homepage() {
    const classes = useStyles();
    const [images] = useState({
        killamockingbirdcover,
        prideandprejudicecover,
        kiterunnercover,
        allthelightwecannotseecover,
        thebookthiefcover,
        andthemountainsechoedcover,
        athousandsplendedsunscover,
        jonathanlivingtonseagullcover,
        thegoldfinchcover,
        fireflylanecover,
        thealchemistcover,
        thenightingalecover,

    })

    const [values, setValue] = React.useState({});
    const [hover, setHover] = React.useState({});

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const [books, setBooks] = useState([
        {
            name: "To Kill A Mocking Bird",
            author: "Harper Lee",
            cover: "killamockingbirdcover",

        },
        {
            name: "Pride & Prejudice",
            author: "Jane Austen",
            cover: "prideandprejudicecover",

        },
        {
            name: "The Kite Runner",
            author: "Khaled Hosseini",
            cover: "kiterunnercover",

        },
        {
            name: "All the Light We Cannot See",
            author: "Anthony Doerr",
            cover: "allthelightwecannotseecover",

        },
        {
            name: "The Book Thief",
            author: "Markus Zusak",
            cover: "thebookthiefcover",

        },
        {
            name: "And The Mountains Echoed",
            author: "Khaled Hosseini",
            cover: "andthemountainsechoedcover",

        },
        {
            name: "A Thousand Splendid Suns",
            author: "Khaled Hosseini",
            cover: "athousandsplendedsunscover",

        },
        {
            name: "The Alchemist",
            author: "Paulo Coelho",
            cover: "thealchemistcover",

        },
        {
            name: "Jonathan Livingston Seagull",
            author: "Richard Bach",
            cover: "jonathanlivingtonseagullcover",

        },
        {
            name: "The Goldfinch",
            author: "Donna Tartt",
            cover: "thegoldfinchcover",

        },
        {
            name: "The Nightingale",
            author: "Kristin Hannah",
            cover: "thenightingalecover",

        },
        {
            name: "Firefly Lane",
            author: "Kristin Hannah",
            cover: "fireflylanecover",

        },

    ])
    return (
        <Grid container spacing={3}>

            {books.map((book, index) => (
                <Grid style={{ width: '250px' }} key={index} item md={2}>
                    <Card style={{ height: '100%', backgroundColor: "white", color: "orange", }} className={classes.cardroot}>
                        <CardHeader style={{ height: '150px' }} title={book.name} subheader={book.author} />

                        <img src={images[book.cover]} alt="book cover" style={{ height: '190px', width: "150px" }} />
                        <span style={{

                        }}>
                            {<Box style={{ height: '2px', fontSize: '10px', }} ml={2}>{labels[hover[index] !== -1 ? hover[index] : values[index]]}</Box>}
                        </span>

                        <CardActions>

                            <div className={classes.rating}>
                                <Rating
                                    name={`hover-feedback${index}`}
                                    value={values[index]}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        console.log(index, newValue);
                                        setValue({ ...values, [index]: newValue });

                                    }}
                                    onChangeActive={(event, newHover) => {
                                        console.log(newHover)
                                        setHover({ ...hover, [index]: newHover });
                                    }}
                                />


                            </div>
                            <span style={{
                                position: "relative",
                                right: "-45px",
                                top: "4px",
                                cursor: "pointer"
                            }}>
                                <LibraryAdd />
                            </span>
                            {/*<IconButton
                            style={{
                                height: '100%',
                                backgroundColor: "black",
                                color: favorites[index] ? "red" : "white"
                                
                            }}
                            onClick={() => changeColor(index)}
                              </CardActions> 
                            aria- label="add to favorites">
                            <Favorite />
                        </IconButton>*/}


                        </CardActions>
                    </Card>
                </Grid>
            ))}

        </Grid>



    );

}

export default Homepage;