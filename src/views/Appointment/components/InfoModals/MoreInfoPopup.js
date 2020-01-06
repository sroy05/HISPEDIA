import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Link from  '@material-ui/core/Link';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import RoomIcon from '@material-ui/icons/Room';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const constructReview = () => {
    return <div>TEST</div>;
};

const useStyles = makeStyles(theme =>({
    table: {
        minWidth: 565,
    },
    infoLabel: {
        fontWeight: 'bold'
    },
    noShadow:{
        boxShadow: 'none'
    },
    readReviewsLink: {
        color: 'blue',
        cursor: 'pointer',
        display: 'inline-flex',
        position: 'relative',
        fontSize: '15px',
        top: '-6px',
        textDecoration: 'underline',
        paddingLeft: '10px'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        color: '#fff'
    },
    MapTitle: {
        marginLeft: theme.spacing(2),
        color: '#fff'
    },
    reviewTile1: {
        top: '78px',
    },
    reviewTile: {
        position: 'relative',
        marginBottom: '10px',
        borderBottom: '1px solid #f3eded',
        paddingBottom: '6px',
        paddingLeft: '15px',
        paddingRight: '15px'
    },
    avatarFlow: {
        float: 'left'
    },
    reviewerName: {
        paddingLeft: '9px',
        paddingRight: '10px',
        position: 'relative',
        top: '0px',
        fontWeight: 'bold',
        fontSize: '15px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    reviewContent: {
        position: 'relative',
        top: '0px',
        paddingLeft: '49px',
        fontSize: '12px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        wordBreak: 'break-word'
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

const StyledTableCell1 = withStyles(theme => ({
    body: {
        padding: '0px',
        fontWeight: 'bold',
        width: '175px',
        border: 'none',
        verticalAlign: 'top'
    },
  }))(TableCell);

  const StyledTableCell2 = withStyles(theme => ({
    body: {
        padding: '0px',
        paddingLeft: '10px',
        paddingBottom: '5px',
        border: 'none'
    },
  }))(TableCell);

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h4">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function MoreInfoPopups(props) {
    const classes = useStyles();
    const [values, setValues] = useState({
        reviewPopup: false,
        mapPopup: false,
        hospitalData: {},
        reviewesData: []
    })
    const avatarColor = ['orange', 'purple'];
    const handleReviews = (actionToPerform, doctorsReviewData = []) => {
        setValues({
            ...values,
            reviewesData: doctorsReviewData,
            reviewPopup: actionToPerform
        });
    };
    const handleMaps = (actionToPerform, hospitalData = {}) => {
        values.mapPopup = actionToPerform;
        setValues({
            ...values,
            hospitalData,
            mapPopup: actionToPerform
        });
    };
    const mapStyles = {
        width: '100%',
        height: '100%',
        position: 'relative'
        };
    const { show, handleClose, hospitalInfo={}, showLocation, handleCloseMap={}, cost=0 } = props;
    console.log('hospitalInfo in MoreInfoPopup: ', hospitalInfo);
    return (
        <div>
            <Dialog 
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                fullWidth={true}
                maxWidth={'md'}
                aria-labelledby="customized-dialog-title" open={props.show}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                   {hospitalInfo.name}
                 </DialogTitle>
                <DialogContent dividers>
                    {
                        hospitalInfo.doctorsList &&
                        <TableContainer component={Paper} className={classes.noShadow}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableBody>
                                    <TableRow key={'row1'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            Cost
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">${cost}</StyledTableCell2>
                                    </TableRow>
                                    <TableRow key={'row1'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            Name
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">{hospitalInfo.name}</StyledTableCell2>
                                    </TableRow>
                                    <TableRow key={'row2'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            Address
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">{hospitalInfo.address}
                                        <Link href="#" onClick={() => handleMaps(true, hospitalInfo)}><RoomIcon fontSize="small" /></Link>
                                        </StyledTableCell2>
                                    </TableRow>
                                    <TableRow key={'row3'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            About Hospital
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">{hospitalInfo.about}</StyledTableCell2>
                                    </TableRow>
                                    <TableRow key={'row4'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            Distance
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">
                                            10 Miles
                                        </StyledTableCell2>
                                    </TableRow>
                                    <TableRow key={'row5'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            Hospital Rating
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">
                                            <Rating name="read-only" value={hospitalInfo.rating} readOnly />
                                        </StyledTableCell2>
                                    </TableRow>
                                    <TableRow key={'row6'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            Specialist
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">{hospitalInfo.doctorsList[0].name}</StyledTableCell2>
                                    </TableRow>
                                    <TableRow key={'row7'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            Specialist Bio
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">{hospitalInfo.doctorsList[0].aboutDoctor}</StyledTableCell2>
                                    </TableRow>
                                    <TableRow key={'row8'}>
                                        <StyledTableCell1 component="th" scope="row" align="left">
                                            Specialist Rating
                                        </StyledTableCell1>
                                        <StyledTableCell2 align="left">
                                            <Rating name="read-only" value={hospitalInfo.doctorsList[0].rating} readOnly />
                                            <span className={classes.readReviewsLink} onClick={ () => handleReviews(true, hospitalInfo.doctorsList[0].reviews) }>Read Reviews</span>
                                        </StyledTableCell2>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog fullScreen open={values.reviewPopup} onClose={() => handleReviews(false)} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => handleReviews(false)} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        Reviews
                    </Typography>
                    <Button autoFocus color="inherit" onClick={() => handleReviews(false)}>
                    Close
                    </Button>
                </Toolbar>
                </AppBar>
                {values.reviewesData.map((reviewObject, index) => (
                    <div className={clsx(classes.reviewTile, classes.reviewTile1)}>
                        <Avatar className={clsx(classes.avatarFlow,
                            ((index+2)%2) == 0 ? classes.orange : classes.purple
                            )}>{reviewObject.name.substring(0, 1)}</Avatar>
                        <span className={classes.reviewerName}>{reviewObject.name}</span>
                        <Rating name="read-only" value={reviewObject.rating} size="small" readOnly />
                        <div className={classes.reviewContent}>{reviewObject.reviewContent}</div>
                    </div>
                ))}
            </Dialog>

            <Dialog fullScreen open={values.mapPopup} onClose={() => handleMaps(false)} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => handleMaps(false)} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h3" className={classes.MapTitle}>
                        {hospitalInfo.name}
                    </Typography>
                    <Typography variant="h5" className={classes.title}>
                        {hospitalInfo.address} {hospitalInfo.zipCode} {hospitalInfo.state}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={() => handleMaps(false)}>
                    Close
                    </Button>
                </Toolbar>
                </AppBar>
                <Map
                    google={props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{lat: values.hospitalData.lat, lng:  values.hospitalData.lng}}
                >
                    <Marker position={{
                        lat: values.hospitalData.lat, lng:  values.hospitalData.lng
                    }}>
                    </Marker>
                </Map>
            </Dialog>
            { showLocation && false && <Dialog onClose={handleCloseMap}  PaperProps={{
      style: {
        width: '600px',
        height:'400px',
        marginTop: '250px',
        overflowY: 'hidden'
      }}}
       open={showLocation}>
           <DialogTitle>
           {hospitalInfo.address} {hospitalInfo.zipCode} {hospitalInfo.state} 
           <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseMap}>
                    <CloseIcon />
                </IconButton>
           </DialogTitle>
       <DialogContent>
         </DialogContent>
      </Dialog> }
        </div>
    );
}
export default GoogleApiWrapper({
    // AIzaSyDZfVO29Iytspv4xz7S68doIoiztiRLhbk
    apiKey: 'AIzaSyDZfVO29Iytspv4xz7S68doIoiztiRLhbk'
    })(MoreInfoPopups);