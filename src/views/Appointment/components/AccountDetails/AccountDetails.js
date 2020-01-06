import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import cookie from 'react-cookies';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { hospitalProcedureDoctorsData } from '../../../../assets/mocks/hospitals';
import { FetchHospitalInfo } from '../../Utils/Utils'
import MoreInfoPopup from '../InfoModals/MoreInfoPopup';

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center'
  },
  minifiedTd: {
    lineHeight: '10px',
    padding: '8px',
    height: '70px'
  },
  topSpace: {
    marginTop: '10px'
  },
  calendarGrid: {
    border: '1px solid #ccc',
    minHeight: '200px',
    padding: '15px'
  },
  weekName: {
    fontWeight: 'bold',
    fontSize: '15px',
    border: '1px solid #ccc',
    background: '#eee'
  },
  borderEnable: {
    border: '1px solid #ccc'
  },
  table: {
    border: '1px solid #ccc',
    width: '60%',
    margin: '0 auto',
    border: 'none'
  },
  activeTd: {
    verticalAlign: 'middle',
    maxWidth: '25px',
  },
  inActiveTd: {
    color: '#ccc',
    pointerEvents: 'none',
    cursor: 'default'
  },
  availableCell: {
    background: '#fff !important',
    "&:hover": {
      backgroundColor: "#f2f1f7",
      boxShadow: '0px 6px 16px 6px #3f51b5'
    }
  },
  dateInCell: {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  padding4: {
    padding: '4px',
    fontSize: '9px',
    fontWeight: 'bold',
    color: '#906d20'
  },
  costText: {
    fontSize: '15px',
    color: '#053c01'
  },
  dateText: {
    textAlign: 'left',
    fontWeight: 'bold'
  },
  booked: {
    color: '#fff'
  },
  notAvailable: {
    color: '#968989'
  },
  bookedTd: {
    background: '#8996e2 !important'
  },
  moreLink: {
    color: 'blue',
    fontSize: '11px',
    textDecoration: 'underline',
    textAlign: 'center',
    cursor: 'pointer'
  },
  calendarNavigation: {
    cursor: 'pointer'
  },
  leftArrowCalendar: {
    position: 'relative',
    top: '7px',
    right: '10px'
  },
  rightArrowCalendar: {
    position: 'relative',
    top: '7px',
    left: '10px'
  },
  noPointerEvents: {
    cursor: 'default',
    color: '#ccc',
    pointerEvents: 'none'
  },
  noUserSelect: {
    userSelect: 'none'
  }
}));

const StyledTableCellForChange = withStyles(theme => ({
}))(TableCell);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3f51b5', //theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: '13px',
    border: '1px solid #ccc',
    lineHeight: '10px',
    height: '65px',
    "&:hover": {
      backgroundColor: "#f2f1f7 !important",
      boxShadow: '0px 6px 16px 6px #3f51b5'
    },
    background: '#eeedf9',
    paddingTop: '0px',
    paddingLeft: '0px'
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    // '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.background.default,
    // },
    //backgroundColor: theme.palette.background.default
  },
}))(TableRow);

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const profileData = cookie.load('profileData');
  const [values, setValues] = useState({
    firstName: profileData ? profileData.firstName : '',
    lastName: profileData ? profileData.lastName : '',
    email: '',
    phone: '',
    state: '',
    country: '',
    gender: profileData ? profileData.gender : ' ',
    address: '',
    memberId: profileData ? profileData.memberId : '',
    procedureName: '',
    doctorName: '',
    doctorsList: hospitalProcedureDoctorsData({ queryRequest: 'doctorsList' }),
    proceduresList: hospitalProcedureDoctorsData({ queryRequest: 'proceduresList' }),
    currentMonth: ((new Date().getMonth()) + 1),
    currentYear: (new Date().getFullYear()),
    calendarData: {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      rowsData: []
    },
    monthsList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    originalCurrentMonth: (1 + (new Date().getMonth())),
    originalCurrentYear: (new Date().getFullYear()),
    showCalendar: false,
    showMoreInfo: false,
    hospitalInfo: {},
    costForProcedure: 0
  });

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const schema = {
    procedureName: {
      presence: { allowEmpty: false, message: 'is required' },
    }
  };

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;
  const openMap = () => {
      setValues({
        ...values,
        showLocation: true
      });
      };
  const handleCloseMap = () => {
        setValues({
          ...values,
          showLocation: false
        });
      };
  const handleChange = event => {
    event.persist();
    if (event.target.name === 'procedureName') {
      const doctorsList = hospitalProcedureDoctorsData({ queryRequest: 'doctorsNameByProcedure', procedureName: event.target.value });
      setValues({
        ...values,
        doctorsList,
        doctorName: '',
        [event.target.name]: event.target.value
      });
      setFormState(formState => ({
        ...formState,
        values: {
          ...formState.values,
          doctorName: ''
        },
        touched: {
          ...formState.touched,
          doctorName: false
        }
      }));
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    }

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

  const handleMoreInfo = (actionPerform, hospitalInfo = {}, costForProcedure) => {
    setValues({
      ...values,
      showMoreInfo: actionPerform,
      hospitalInfo,
      costForProcedure
    })
  };

  const showCalendar = () => {
    generateTopStyleCalendar();
    setValues({
      ...values,
      showCalendar: true
    });
  };

  const navigateCalendar = (navigationAction) => {
    if (navigationAction == 'plus') {
      if (values.currentMonth === 12) {
        values.currentMonth = 1;
        setValues({
          ...values,
          currentYear: (values.currentYear++)
        });
      } else {
        setValues({
          ...values,
          currentMonth: (values.currentMonth++)
        });
      }
    } else {
      if (values.currentMonth === 1) {
        values.currentMonth = 12;
        setValues({
          ...values,
          currentYear: (values.currentYear--)
        });
      } else {
        setValues({
          ...values,
          currentMonth: (values.currentMonth--)
        });
      }
    }
    generateTopStyleCalendar();
  }

  const gender = [
    {
      value: ' ',
      label: 'Please select...'
    },
    {
      value: 'M',
      label: 'M'
    },
    {
      value: 'F',
      label: 'F'
    },
    {
      value: 'T',
      label: 'Trans'
    }
  ];

  const generateTopStyleCalendar = () => {
    const hospitalsList = Array.from(FetchHospitalInfo({doctorName: values.doctorName, procedureName: values.procedureName}));
    const d = new Date();
    const year = values.currentYear;
    const month = values.currentMonth;
    const totalDaysForMonth = (new Date(year, month, 0).getDate());
    const todayDate = new Date();
    const rowsData = [];
    let rowDateStart = 1;
    let costsForMonth = 0;
    let maxCostsForMonth = 5;
    let bookedForMonth = 0;
    let maxBookedForMonth = 3;
    const costMin = 1500;
    const costMax = 3500;
    const avoidWeeks = ['Sunday', 'Monday'];
    for (let j = 1; j <= 5; j++) {
      const eachRowData = [];
      for (let i = 1; i <= 7; i++) {
        var newDate = new Date(year, (month - 1), rowDateStart);
        const weekDateInteger = (1 + newDate.getDay());
        const dateObject = {};
        if (rowDateStart <= totalDaysForMonth && weekDateInteger === i) {
          //injecting date
          todayDate.setHours(0, 0, 0, 0);
          newDate.setHours(0, 0, 0, 0);
          const weekDayName = values.calendarData.days[(weekDateInteger - 1)];
          const activeCheck1 = (avoidWeeks.indexOf(weekDayName) == -1);
          const activeCheck2 = ((todayDate) <= newDate);
          dateObject.date = rowDateStart;
          dateObject.weekdayName = weekDayName;
          dateObject.booked = false;
          const active = (activeCheck1 && activeCheck2);
          dateObject.active = active;
          dateObject.availableString = active ? '' : 'Not Available';
          dateObject.available = false;
          if (active && costsForMonth < maxCostsForMonth) {
            if ((totalDaysForMonth - rowDateStart) >= maxCostsForMonth) {
              if (Math.random() >= 0.5 || ((totalDaysForMonth - rowDateStart) < (maxCostsForMonth - costsForMonth))) {
                dateObject.cost = Math.floor(Math.random() * (costMax - costMin)) + costMin;
                dateObject.availableString = "Available";
                dateObject.available = true;
                dateObject.hospitalInfo = hospitalsList[costsForMonth];
                costsForMonth++;
              } else {
                dateObject.cost = null;
                dateObject.availableString = "Not Available";
                dateObject.available = false;
                // if (Math.random() >= 0.5 || ((totalDaysForMonth - rowDateStart) < (maxBookedForMonth - bookedForMonth))) {
                const trueFalseDecider = (Math.random() >= 0.5);
                if (trueFalseDecider && (maxBookedForMonth > bookedForMonth)) {
                  dateObject.availableString = "Booked";
                  dateObject.booked = true;
                  bookedForMonth++;
                }
              }
            } else {
              dateObject.cost = Math.floor(Math.random() * (costMax - costMin)) + costMin;
              dateObject.availableString = "Available";
              dateObject.available = true;
              dateObject.hospitalInfo = hospitalsList[costsForMonth];
              costsForMonth++;
            }
          } else {
            dateObject.cost = null;
            dateObject.available = false;
            dateObject.availableString = "Not Available";
          }


          eachRowData.push(dateObject);
          rowDateStart++;
        } else {
          //injecting empty date
          eachRowData.push('');
        }
      }
      rowsData.push(eachRowData);
    }
    const calendarData = {
      ... values.calendarData,
      rowsData: rowsData
    };
    console.log('rowsData: ', rowsData);
    values.calendarData.rowsData = rowsData;
    setValues({
      ...values,
      calendarData
    });
    
  };

  return (
    <div>
      {
        !values.showCalendar && <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
          <form
            autoComplete="off"
            noValidate
          >
            <CardHeader
              subheader=""
              title="Check Procedure Cost"
            />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={2}
              >
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Member ID"
                    margin="dense"
                    name="phone"
                    onChange={handleChange}
                    type="number"
                    value={values.memberId}
                    variant="outlined"
                    disabled
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="First name"
                    margin="dense"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    variant="outlined"
                    disabled
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Last name"
                    margin="dense"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    variant="outlined"
                    disabled
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Select Gender"
                    margin="dense"
                    name="gender"
                    onChange={handleChange}
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={values.gender}
                    variant="outlined"
                    disabled
                  >
                    {gender.map(option => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Procedure Name"
                    margin="dense"
                    name="procedureName"
                    error={hasError('procedureName')}
                    helperText={
                      hasError('procedureName') ? formState.errors.procedureName[0] : null
                    }
                    onChange={handleChange}
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={values.procedureName}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    <option
                      key={null}
                      value={''}
                    >
                      Select...
                  </option>
                    {values.proceduresList.map(option => (
                      <option
                        key={option.name}
                        value={option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Doctor's Name"
                    margin="dense"
                    name="doctorName"
                    error={hasError('doctorName')}
                    helperText={
                      hasError('doctorName') ? formState.errors.doctorName[0] : null
                    }
                    onChange={handleChange}
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={values.doctorName}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    <option
                      key={'Select..'}
                      value={''}
                    >
                      Select...
                  </option>
                    {values.doctorsList.map(option => (
                      <option
                        key={option.name}
                        value={option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions classes={{ root: classes.root }}>
              <Button
                color="primary"
                variant="contained"
                disabled={!formState.isValid}
                onClick={showCalendar}
              >
                Check Procedure Costs
          </Button>
            </CardActions>
          </form>
        </Card>
      }
      <Grow in={values.showCalendar}>
        <Card
          {...rest}
          className={clsx(classes.root, className)}
          spacing={2}
        >
          <CardHeader
            subheader=""
            title="Cost Summary"
          />
          <Divider />
          <CardContent>
            <div>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow key={'navigationRow'}>
                      <StyledTableCellForChange align="right" colSpan="2">
                        <KeyboardArrowLeftIcon
                          onClick={() => navigateCalendar('minus')}
                          className={clsx(
                            classes.leftArrowCalendar,
                            classes.calendarNavigation,
                            (values.originalCurrentMonth === values.currentMonth && values.originalCurrentYear >= values.currentYear) ?
                              classes.noPointerEvents : ''
                          )} />
                      </StyledTableCellForChange>

                      <StyledTableCellForChange align="center" colSpan="3">
                        <span className={classes.noUserSelect}>
                          {values.monthsList[values.currentMonth - 1]} - {values.currentYear}
                        </span>
                      </StyledTableCellForChange>

                      <StyledTableCellForChange align="left" colSpan="2">
                        <KeyboardArrowRightIcon
                          onClick={() => navigateCalendar('plus')}
                          className={clsx(classes.rightArrowCalendar, classes.calendarNavigation)}
                        />
                      </StyledTableCellForChange>

                    </TableRow>
                    <TableRow key={'weekdaysRow'}>
                      {values.calendarData.days && values.calendarData.days.map((weekName, index) => (
                        <StyledTableCell align="center" key={`weekdaysCell_${index}`}>{weekName.substring(0, 2)}</StyledTableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {values.calendarData.rowsData && values.calendarData.rowsData.map((rowObject, index) => (
                      <StyledTableRow key={index}>
                        {rowObject.map((dateObject, rowObjectIndex) => (
                          <StyledTableCell
                            key={`date_${index}_${rowObjectIndex}`}
                            align="center"
                            className={clsx(
                              classes.activeTd,
                              (dateObject.active && dateObject.available) ? classes.availableCell : classes.inActiveTd,
                              dateObject.booked ? classes.bookedTd : ''
                            )}
                          >
                            <div className={clsx(classes.dateText)}>{dateObject.date}</div>
                            {
                              dateObject.available ? (
                                <div>
                                  <div className={clsx(classes.padding4, classes.costText)}>${dateObject.cost}</div>
                                  <div className={classes.moreLink} onClick={() => handleMoreInfo(true, dateObject.hospitalInfo, dateObject.cost)}> More Info.. </div>
                                </div>
                              ) : (
                                  <div>
                                    <div className={clsx(classes.padding4, 
                                      dateObject.booked ? classes.booked : classes.notAvailable
                                    )}>{dateObject.availableString}</div>
                                  </div>
                                )
                            }
                          </StyledTableCell>
                        ))}
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardContent>
        </Card>
      </Grow>
      <MoreInfoPopup
        show={values.showMoreInfo}
        handleClose={() => handleMoreInfo(false, {}, 0)}
        hospitalInfo={values.hospitalInfo}
        showLocation={values.showLocation}
        openMap={openMap}
        handleCloseMap={handleCloseMap}
        cost={values.costForProcedure}
      />
    </div >
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
