import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Notelist from "./Notelist";


function Notes(props) {

    const useStyles = makeStyles((theme) => ({

        form: {
            '& > *': {
                margin: theme.spacing(8),
                width: '50%',
            },
        },
        add: {
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(0),
        },

    }));


    const classes = useStyles();

    const [list, setList] = useState("");

    const [items, setItems] = useState([]);

    const handleTextfield = (e) => {

        setList(e.target.value)
    };

    const ListItem = () => {
        setItems((olditem) => {
            return [...olditem, list];
        })

        setList("");
    }

    const delItem = (id) => {

        setItems((olditem) => {
            return olditem.filter((arrElement, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div fullWidth style={{ zIndex: "1000" }}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="outlined-basic"
                        label="Write your note"
                        variant="outlined"
                        id="note"
                        name="note"
                        value={list}
                        onChange={handleTextfield}
                    />
                </form>
                <div style={{ position: "absolute", top: "12rem" }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.add}
                        size="medium"
                        onClick={ListItem}
                    >
                        Add
                    </Button>
                </div>
                <hr className="mx-2" style={{ color: "red" }}></hr>
                <Typography variant="h5" color="secondary" className="text-center my-3">
                    <b>This is your Notes</b>
                </Typography>

                {items.map((itemval, index) => {
                    return <Notelist
                        key={index}
                        id={index}
                        text={itemval}
                        onSelect={delItem}
                    />
                })}
            </div>
        </>
    )
}
export default Notes;


