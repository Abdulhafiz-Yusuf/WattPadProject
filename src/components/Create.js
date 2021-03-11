import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ProfileImage from "@daym3l/react-profile-image";
import addcover from '../assets/addbookcover.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import 'react-quill/dist/quill.snow.css'; // ES6
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

export default function Create({ addBook }) {

    const [values, setValues] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };


    const getImages = (base64Image) => {
        setValues({ ...values, base64Image });
    };



    const handleChangeEditor = (html) => {
        setValues({ ...values, editorHtml: html });
    }

    const onSubmit = () => {

        addBook({ ...values });

        setTimeout(() => {
            setValues({
                ...values,
                editorHtml: ""
            })
        }, 0);

        setTimeout(() => {
            setValues({
                title: "",
                author: "",
                description: "",
                base64Image: "",

            })
        }, 0);

    }

    console.log(values)

    return (
        <div style={{ backgroundColor: "rgb(130, 95, 228)", alignItems: "center" }}>
            <br />
            <div style={{ backgroundColor: "rgb(130, 95, 228)", }}>
                <ReactTypingEffect
                    style={{ color: 'white', fontSize: '40px', marginLeft: "600px" }}
                    eraseDelay={3000}
                    text={["Create Your Book"]}
                />
                <br />
            </div>
            <form style={{ padding: "0 20px" }}>
                <div >
                    <Grid container spacing={6}>
                        <Grid item ProfileImage>
                            <div className="upload-file">
                                <ProfileImage
                                    camera={false}
                                    clearPreview={!Boolean(values["base64Image"])}
                                    defaultImage={values["base64Image"] || ""}
                                    uploadBtnProps={{ variant: "contained", label: "Add a cover" }}
                                    defaultImage={addcover}
                                    styles={{ borderRadius: '4px', marginLeft: "35px", marginTop: "35px", height: '180px', width: '150px', backgroundColor: '#fff' }}
                                    returnImage={getImages}
                                />
                            </div>
                        </Grid>
                        <Grid item TextEditor style={{ width: "84%", }}>

                            <div style={{ marginTop: "45px", width: "100%", }}>
                                <TextField
                                    style={{ width: "50%", color: "white", backgroundColor: "#e1bee7" }}
                                    multiline
                                    rows={2}
                                    variant='filled'
                                    variant="outlined"
                                    name="title"
                                    value={values["title"] || ""}
                                    onChange={handleChange}
                                    placeholder={'Story Title...'} />
                                <TextField
                                    style={{ width: "50%", color: "white", backgroundColor: "#e1bee7" }}
                                    multiline
                                    rows={2}
                                    variant='filled'
                                    variant="outlined"
                                    name="author"
                                    value={values["author"] || ""}
                                    onChange={handleChange}
                                    placeholder={'Story Author...'} />
                            </div>

                            <br />

                            <div style={{ width: "100%", }}>
                                <TextField
                                    style={{ width: "100%", color: "white", backgroundColor: "#e1bee7" }}
                                    multiline
                                    rows={4}
                                    variant='filled'
                                    name="description"

                                    value={values["description"] || ""}
                                    onChange={handleChange}
                                    placeholder={'Story Description...'} />
                            </div>

                        </Grid>
                    </Grid>

                    <div style={{ marginTop: "45px", marginLeft: "38px", width: "94%", height: "197px", backgroundColor: "white", alignItems: "center" }}>

                        <ReactQuill

                            theme="snow"

                            onChange={handleChangeEditor}
                            value={values["editorHtml"] || ""}
                            modules={modules}
                            formats={formats}
                            bounds={'.app'}
                            placeholder="Write your story"
                            style={{ height: "150px", backgroundColor: "white", }}
                        />


                    </div>


                    <br />
                    <Button onClick={onSubmit} style={{ background: 'linear-gradient(45deg, #d500f9 30%, #f50057 90%)', color: 'white', height: 48, padding: '0 30px', marginLeft: "600px" }}>Submit Your Story</Button>
                    <br /><br /><br />
                </div>
            </form >
        </div>
    );
}