import React, { useEffect, useState } from 'react';
import {
    Card, CardHeader, CardActions, Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';

// Images

import killamockingbirdcover from '../assets/to-kill-a-mocking-bird.cover.jpg';
import kiterunnercover from '../assets/kiterunnercover.jfif';
import thebookthiefcover from '../assets/thebookthief.jfif';
import athousandsplendedsunscover from '../assets/athousandsplendedsunscover.jfif';
import jonathanlivingtonseagullcover from '../assets/jonathan livington seagull.jfif';
import thegoldfinchcover from '../assets/thegoldfinch.jfif';



import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ReactTypingEffect from 'react-typing-effect';

const useStyles = makeStyles((theme) => ({

    cardroot: {
        maxWidth: 245,
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        fontFamily: "Lucida Handwriting",
        fontWeight: "fontWeightBold",
        color: "gold"

    },
    description: {
        marginLeft: theme.spacing(2),
        flex: 1,
        fontFamily: "Times New Roman",
        color: "#03a9f4"
    },
    story: {
        marginLeft: theme.spacing(2),
        flex: 1,
        fontFamily: "Georgia",
        color: "#212121"
    },


    rating: {
        display: 'flex',
        marginLeft: '42px'
    },


}));



const ITEM_HEIGHT = 48;
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Homepage({ newbook }) {
    const classes = useStyles();
    const [images] = useState({
        killamockingbirdcover,
        kiterunnercover,
        thebookthiefcover,
        athousandsplendedsunscover,
        jonathanlivingtonseagullcover,
        thegoldfinchcover,


    })

    const [values, setValue] = useState({});
    const [hover, setHover] = useState({});

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
            title: "To Kill A Mocking Bird",
            author: "Harper Lee",
            cover: "killamockingbirdcover",
            description: "To Kill a Mockingbird by Harper Lee centres on Atticus Finch’s attempts to prove the innocence of Tom Robinson, a black man who has been wrongly accused of raping a white woman in 1930s Alabama.",
            editorHtml: "Part One, Chapter 1 The story is narrated by a young girl named Jean Louise Finch, who is almost always called by her nickname, Scout. Scout starts to explain the circumstances that led to the broken arm that her older brother, Jem, sustained many years earlier; she begins by recounting her family history. The first of her ancestors to come to America was a fur-trader and apothecary named Simon Finch, who fled England to escape religious persecution and established a successful farm on the banks of the Alabama River. The farm, called Finch’s Landing, supported the family for many years. The first Finches to make a living away from the farm were Scout’s father, Atticus Finch, who became a lawyer in the nearby town of Maycomb, and his brother, Jack Finch, who went to medical school in Boston. Their sister, Alexandra Finch, stayed to run the Landing."
        },

        {
            title: "The Kite Runner",
            author: "Khaled Hosseini",
            cover: "kiterunnercover",
            description: "Afghani immigrant Amir is summoned from his California home to Pakistan by Rahim Khan, an old, dying friend of his father. As a boy in Afghanistan, wealthy Amir was best friends with servant's son Hassan, but when Hassan was brutally assaulted by a local bully, Amir was too scared to save him, and has been tormented by guilt ever since.",
            editorHtml: "Part One, Chapter 1 The period is December 2001, and our narrator, who tells his story in the first person, recalls an event that occurred in 1975, when he was twelve years old and growing up in Afghanistan. He does not say what happened, but says the event made him who he is. He follows this recollection by telling us about a call he received last summer from a friend in Pakistan named Rahim Khan. Rahim Khan asks our narrator, whose name is Amir, to come to Pakistan to see him. When Amir gets off the phone, he takes a walk through San Francisco, where he lives now. He notices kites flying, and thinks of his past, including his friend Hassan, a boy with a cleft lip whom he calls a kite runner."
        },

        {
            title: "The Book Thief",
            author: "Markus Zusak",
            cover: "thebookthiefcover",
            description: "In 1938, young orphan Liesel (Sophie Nélisse) arrives at the home of her new foster parents, Hans (Geoffrey Rush) and Rosa (Emily Watson). When Hans, a kindly housepainter, learns that Liesel cannot read, he teaches the child the wonders of the written language. Liesel grows to love books, even rescuing one from a Nazi bonfire. Though Liesel's new family barely scrape by, their situation becomes even more precarious when they secretly shelter a Jewish boy whose father once saved Hans' life.",
            editorHtml: "Part One, Chapter 1 is called the grave digger's handbook after the first book Liesel steals. In this first chapter nine-year-old Liesel Meminger, known as the book thief, is on a train with her mother and six-year-old brother Werner, heading for the town of Molching, near Munich, to stay with a foster family. As Liesel is dreaming of Adolf Hitler, Werner dies suddenly on the train. The narrator, Death, watches Liesel's reaction to her brother's death. Knowing to stay away from Liesel but interested in her, Death attends the makeshift funeral and burial in the next town. At first Liesel has no reaction, but after the funeral she attempts to dig up the body with her bare hands. When she stops, she notices a book lying in the snow and she takes it, even though she cannot read. "
        },

        {
            title: "A Thousand Splendid Suns",
            author: "Khaled Hosseini",
            cover: "athousandsplendedsunscover",
            description: "The story covers three decades of anti-Soviet jihad, civil war and Taliban tyranny seen from the perspectives of two women. Mariam is the scorned illegitimate daughter of a wealthy businessman, forced at age fifteen into marrying Rasheed, who grows increasingly brutal when she fails to produce a child.",
            editorHtml: "Part One, Chapter 1  Mariam, an Afghani woman, remembers her mother calling her a harami when she was five years old — although it is many years later before she learns the word means bastard child. Before Mariam's birth, her mother, Nana, was a housekeeper for a wealthy businessman in Herat named Jalil. Jalil impregnates Nana, and she and Mariam live in a kolba (small cottage) outside of the town. As a girl, Miriam loves Thursday visits from Jalil, who tells her stories of Herat, although she never visits the city and her mother takes pains to remind the growing girl that her father brings her only stories, none of the wealth Jalil describes to her."

        },

        {
            title: "Jonathan Livingston Seagull",
            author: "Richard Bach",
            cover: "jonathanlivingtonseagullcover",
            description: "The book tells the story of Jonathan Livingston Seagull, a seagull who is bored with daily squabbles over food. Seized by a passion for flight, he pushes himself and learns everything he can about flying. His increasing unwillingness to conform finally results in his expulsion from the flock.",
            editorHtml: "Part One, Chapter 1 A mile from shore a fishing boat chummed the water, and the word for Breakfast Flock flashed through the air, till a crowd of a thousand seagulls came to dodge and fight for bits of food. It was another busy day beginning.But way off alone, out by himself beyond boat and shore, Jonathan Livingston Seagull was practicing. A hundred feet in the sky he lowered his webbed feet, lifted his beak, and strained to hold a painful hard twisting curve through his wings. The curve meant that he would fly slowly, and now he slowed until the wind was a whisper in his face, until the ocean stood still beneath him. He narrowed his eyes in fierce concentration, held his breath, forced one… single… more… inch… of… curve… Then his feathers ruffled, he stalled and fell. "

        },
        {
            title: "The Goldfinch",
            author: "Donna Tartt",
            cover: "thegoldfinchcover",
            description: "The novel is a coming-of-age tale told in the first person. The protagonist, 13-year-old Theodore Decker, survives a terrorist bombing at an art museum where his mother is killed. While staggering through the debris, he takes with him a small Dutch Golden Age painting called The Goldfinch.",
            editorHtml: "Part One, Chapter 1 In the first chapter, Theo is reflecting on the time he spends in Amsterdam; where he was hiding from authorities. As Theo narrates, he stayed in the hotel alone for over a week, afraid to go out or to telephone anyone. During this period, the narrator succumbs to a fever and dreams about his mother. This evokes the memory of the day when his mother perished during a terrorist attack at New York’s Metropolitan Museum of Art. At the event dedicated to the viewing of Dutch art masterpieces, Theo and his mother viewed many paintings, including The Goldfinch —and another of a boy holding a human skull. Back at the hotel, Theo also remembers his mother’s photos as a child and begins to think that his mother resembled the goldfinch bird in the painting."

        },



    ])

    useEffect(() => {
        if (newbook) {
            setBooks([
                ...books,
                newbook
            ])
        }
    }, [newbook])

    const [selectedBook, setSelectedBook] = useState(null);



    const handleClickOpen = (book) => {
        setSelectedBook(book);

    };
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // const handleClick = (event, book) => {
    //     setSelectedBook(book);
    //     console.log(book);
    //     setAnchorEl(event.currentTarget);
    // };

    const handleClose = (selectedBook) => {
        console.log(selectedBook);
        setSelectedBook(null);
    };




    const handleClick = (event) => {
        // console.log(event.currentTarget);
        // setAnchorEl(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };

    const handleCloseDots = () => {
        setAnchorEl(null);
    };

    const editBook = (book) => {
        console.log(book);

    };

    return (
        <div >
            <ReactTypingEffect
                style={{ color: 'white', fontSize: '50px', alignItems: 'center', marginTop: "5px" }}
                eraseDelay={3000}
                text={["LIBRARY"]}
            />
            <br />
            <br />
            <Grid container spacing={3} style={{ padding: "0 20px" }}>
                {books.map((book, index) => (
                    <Grid style={{ width: '250px' }} key={index} item md={2}>


                        <Card style={{ height: '100%', backgroundColor: "white", color: "#FFDF00", }} className={classes.cardroot}>
                            <div style={{ marginLeft: "175px", marginBottom: "-40px" }}>
                                <IconButton
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>

                            </div>
                            <CardHeader style={{ height: '150px' }} title={book.title} subheader={book.author || "N/A"} />



                            <img src={book.cover ? images[book.cover] : book.base64Image || ""} alt="book cover" style={{ height: '190px', width: "150px" }} />
                            <span>
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
                            </CardActions>

                            <div style={{ height: '50px' }}>

                                <Button variant="outlined" style={{ color: "#FFDF00" }} onClick={() => handleClickOpen(book)}  >
                                    View Story
                                </Button>
                            </div>

                        </Card>
                    </Grid>
                ))}
            </Grid>



            <Dialog fullScreen open={selectedBook} onClose={handleClose} TransitionComponent={Transition} style={{ backgrounds: "aqua", height: "100%" }}>

                <Toolbar>
                    <IconButton edge="start" color="black" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>


                </Toolbar>

                <List style={{ padding: "0 50px", }} >
                    <Box textAlign="center" m={1}>


                        <Typography variant="h3" fontFamily="Lucida Handwriting" className={classes.title} >
                            {selectedBook?.title}
                        </Typography>
                    </Box>
                    <br />
                    <Box textAlign="center" m={1}>
                        <Typography variant="h6" className={classes.title}>
                            {selectedBook?.author || "N/A"}
                        </Typography>
                    </Box>
                    <br />
                    <Divider />
                    <br />
                    <Box textAlign="center" m={1}>
                        <Typography variant="h6" className={classes.description}>
                            {selectedBook?.description || "N/A"}
                        </Typography>
                    </Box>
                    <br />
                    <Divider />
                    <br />
                    <Box textAlign="center" m={1}>
                        <Typography variant="h6" className={classes.story}>
                            {selectedBook?.editorHtml && ReactHtmlParser(selectedBook?.editorHtml)}
                        </Typography>
                    </Box>
                </List>
            </Dialog>

            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleCloseDots}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >

                <MenuItem onClick={editBook(newbook)} >Edit</MenuItem>
                <MenuItem >Delete</MenuItem>

            </Menu>
        </div >

    );

}

export default Homepage;