import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import cookie from 'react-cookies';
import Snackbar from '@material-ui/core/Snackbar';
import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';
import { LoginData } from '../../assets/mocks/login';

const schema = {
  memberId: {
    presence: { allowEmpty: false, message: 'is required' },
    format: {
      pattern: "[a-z0-9]+",
      flags: "i",
      message: "should not contains special characters"
    },
    length: {
      minimum: 4,
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  hiddenView: {
    display: 'none'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'unset'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 50,
    background: 'white',
    width: '416px',
    position: 'absolute',
    left: '54%',
    top: '17%',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      left: '8%',
    }
  },
  loginLogo: {
    position: 'absolute',
    width: 382,
    height: 83,
    left: '55%',
    top: '2%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      left: '9%',
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  },
  close: {
    padding: theme.spacing(0.5),
  },
  newUserLink: {
    color: '#06b6ff'
  },
  signUpBlock: {
    paddingTop: '10px'
  },
  forgotBlock: {
    paddingTop: '15px'
  },
  loginBoxText: {
    color: '#443e3e',
    fontWeight: 'bold'
  }
}));

const SignIn = props => {
  const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    memberId: cookie.load('memberId')
  });

  const queueRef = useRef([]);

  useEffect(() => {
    if (formState.memberId) history.push('/book_appointment');
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleBack = () => {
    history.goBack();
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = event => {
    event.preventDefault();
    const sessionData = LoginData({ memberId: formState.values.memberId });
    if (sessionData.loginSuccess) {
      cookie.save('memberId', formState.values.memberId, { path: '/' });
      cookie.save('profileData', sessionData.loginData)
      history.push('/book_appointment');
    } else {
      handleClick();
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={formState.memberId ? classes.hiddenView : classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={clsx(classes.quoteContainer, classes.quote)}
          item
          lg={12}
        >
          <img
            alt="Login Logo"
            src="/images/login/logo_top_right.jpg"
            className={ classes.loginLogo }
          />
          <div className={classes.content}>
                <div className={classes.contentBody}>
                  <form
                    className={classes.form}
                    onSubmit={handleSignIn}
                  >
                    <Typography
                      className={classes.title}
                      variant="h2"
                    >
                      LOGIN
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                      className={clsx(classes.signUpBlock)}
                    >
                      <Link
                        component={RouterLink}
                        to="/sign-up"
                        variant="h6"
                        className={clsx(classes.newUserLink)}
                      >
                        New user?
                      </Link>
                      {' '}<span className={clsx(classes.loginBoxText)}>Create an account</span>
                    </Typography>
                    <TextField
                      className={classes.textField}
                      error={hasError('memberId')}
                      fullWidth
                      helperText={
                        hasError('memberId') ? formState.errors.memberId[0] : null
                      }
                      label="Member ID"
                      name="memberId"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.memberId || ''}
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      error={hasError('password')}
                      fullWidth
                      helperText={
                        hasError('password') ? formState.errors.password[0] : null
                      }
                      label="Password"
                      name="password"
                      onChange={handleChange}
                      type="password"
                      value={formState.values.password || ''}
                      variant="outlined"
                    />
                    <Button
                      className={classes.signInButton}
                      color="primary"
                      disabled={!formState.isValid}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                      className={clsx(classes.signUpBlock)}
                    >
                      <span className={clsx(classes.loginBoxText)}>By continuing, you agree to HOSPEDIA</span>
                      <Link
                        component={RouterLink}
                        to="#"
                        variant="h6"
                        className={clsx(classes.newUserLink)}
                      >
                        {' '}Conditions{' '}
                      </Link>
                      <span className={clsx(classes.loginBoxText)}>of Use and</span> 
                      <Link
                        component={RouterLink}
                        to="#"
                        variant="h6"
                        className={clsx(classes.newUserLink)}
                      >
                        {' '}Privacy Notice.{' '}
                      </Link>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                      className={clsx(classes.forgotBlock)}
                    >
                      <Link
                        component={RouterLink}
                        to="#"
                        variant="h6"
                        className={clsx(classes.newUserLink)}
                      >
                        {' '}Forgot password {' '}
                      </Link>
                    <span className={clsx(classes.loginBoxText)}>{' '}|{' '}</span> 
                      <Link
                        component={RouterLink}
                        to="#"
                        variant="h6"
                        className={clsx(classes.newUserLink)}
                      >
                        {' '}  Need Help?{' '}
                      </Link>
                    </Typography>
                  </form>
                </div>
              </div>         
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Invalid Credentials</span>}
        action={[
          // <Button key="undo" color="secondary" size="small" onClick={handleClose}>
          //   UNDO
          // </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
