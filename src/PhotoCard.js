import React from 'react';
import * as PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, withStyles } from '@material-ui/core';

const styles = theme => ({
    root: { margin: 10, paddingTop: 10 },
    image: { margin : '0 auto', width: 400, height: 250, },
    caption: { textAlign : 'center' }
});

const PhotoCard = ({ imgPath, label, classes }) => (
  <Card className={classes.root}>
    <CardMedia
      className={classes.image}
      image={imgPath}
    />
    <CardContent
      className={classes.caption}
    >
      {label}
    </CardContent>
  </Card>
);

PhotoCard.propTypes = {
    imgPath: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoCard);
