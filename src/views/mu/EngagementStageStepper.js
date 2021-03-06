import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/**
 * It is possible to specify your own step connector by passing an element to the `connector`
 * prop. If you want to remove the connector, pass `null` to the `connector` prop.
 */
export default class EngagementStageStepper extends React.Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  state = {
    stepIndex: 2,
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <p>
          </p>
        );

      case 1:
        return (
          <p>
          </p>
        );

      case 2:
        return (
          <p>
          
          </p>
        );
    }
  }

  handleNext() {
    const {stepIndex} = this.state;

    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;

    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
          <Step>
            <StepLabel>
              <Link to="/workflow1" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Engagement Setup</Link>

              {/*<RaisedButton
                label={stepIndex === 2 ? 'Finish' : 'Next'}
                primary={true}
                onTouchTap={this.handleNext}
              />*/}
            </StepLabel>
          </Step>

          <Step>
            <StepLabel>
              <Link to="/workflow2" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Bid Management</Link>
            </StepLabel>

          </Step>

          <Step>
            <StepLabel>Awarding</StepLabel>
          </Step>
          <Step>
            <StepLabel>Contracting</StepLabel>
          </Step>
        </Stepper>

        {this.getStepContent(stepIndex)}

        <div style={{marginTop: 24, marginBottom: 12}}>


        </div>
      </div>
    );
  }
}

