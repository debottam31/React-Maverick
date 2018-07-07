import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

// console.log(FoodDetails.images);

// const images = [
//   {
//     url: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
//     title: 'Breakfast',
//     width: '33.33%',
//   },
//   {
//     url: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
//     title: 'Burgers',
//     width: '33.33%',
//   },
//   {
//     url: 'https://www.bodybuilding.com/images/2016/may/ultimate-list-40-high-protein-foods-header-v2-830x467.jpg',
//     title: 'Fish Catlet',
//     width: '33.33%',
//   },
//   {
//     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
//     title: 'Vegitable',
//     width: '33.33%',
//   },
//   {
//     url: 'https://assets.nhs.uk/prod/images/A_1117_processed-foods_E0HWJ7.2e16d0ba.fill-640x229.jpg',
//     title: 'Chicken Patis',
//     width: '33.33%',
//   },
//   {
//     url: 'http://s.eatthis-cdn.com/media/images/ext/842849976/greasy-fast-food.jpg',
//     title: 'Pizza',
//     width: '33.33%',
//   },
// ];

// const images = FoodDetails.image;

// console.log(FoodDetails.images);

const API = 'http://localhost:3000/foods';

// const images = [];


class ButtonBases extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          images: [],
        };  
    }
  
    componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({
            images: data
          }))
    }
    

    render() {

        // ButtonBase.propTypes = {
        //     classes: PropTypes.object.isRequired
        // };
    
        const { images } = this.state;
        const { classes }  = this.props;

        return (
         <div className={classes.root}>
            {images.map((image) => (
            <ButtonBase
            focusRipple
            key={image.id}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: image.width,
            }}
            >
            <span
                className={classes.imageSrc}
                style={{
                backgroundImage: `url(${image.imgurl})`,
                }}
            />

            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
                >
                {image.name}
                <span className={classes.imageMarked} />
                </Typography>
            </span>
            
            </ButtonBase>
            
            ))}
          </div>
        );
    }
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonBases);