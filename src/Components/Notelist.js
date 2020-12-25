import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

function Notelist(props) {

    const useStyles = makeStyles({
        root: {
            width: "100%",
            textAlign: 'center',
            alignContent: 'center',

        },

    });

    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            props.onSelect(props.id)
                        }}
                    >
                        Delete
                         </Button>
                </CardActions>
            </Card>

        </>
    )
}
export default Notelist;