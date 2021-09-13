//------------MATERIAL UI FRAMEWORK------------//

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { CardActionArea, Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 300,
    marginTop: 15,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },

  media: {
    height: 0,

    paddingTop: "56.25%", // 16:9
  },
});

export default function UIUX(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={props.link}>
          <CardContent className={classes.pic}>
            <CardMedia className={classes.media} image={props.img}></CardMedia>

            <CardActions>
              <Button size="small">learn more...</Button>
            </CardActions>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
