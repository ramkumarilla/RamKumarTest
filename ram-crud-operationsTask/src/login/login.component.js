import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { history } from '../_helpers';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import './login.component.css'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
        width: 200,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    button: {
        margin: theme.spacing(),
    },

    input: {
        display: 'none',
    },
});


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        }
    }

    componentDidMount() {
        console.log(this.props);
        if (localStorage.getItem('auth')) {
            history.push('/home');
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    login = event => {
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { classes } = this.props;
        return (


            <div className="login-margin">
               <Grid container spacing={24}>

                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: "blue" }}>
                            <Typography><h1 style={{ color: "white" }}>{'Login'}</h1></Typography>
                        </Paper>

                        <Paper className={classes.paper}>
                            <div>
                                <ValidatorForm
                                    ref="form"
                                    onSubmit={this.login}
                                >
                                    <TextField
                                        label="Username"
                                        value={this.state.username}
                                        className={classes.textField}
                                        required
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('username')}
                                    />
                                    <br />
                                    <TextField
                                        label="Password"
                                        autoComplete="current-password"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        className={classes.textField}
                                        value={this.state.password}
                                        required
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        onChange={this.handleChange('password')}
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                       // disabled={this.state.submitted}
                                    >
                                        {
                                            (this.state.submitted && 'Submit')
                                            || (!this.state.submitted && 'Submit')
                                        }
                                    </Button>
                                </ValidatorForm>

                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>


        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Login)));

export { connectedLoginPage as Login };