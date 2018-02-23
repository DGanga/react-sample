/**
 * Created by j1008197 on 7/15/2017.
 */
import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import BidSlider from './BidSlider';
import Chart from './Chart';
import LinearProgress from 'material-ui/LinearProgress';
import Block from 'react-blocks';

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class BidStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 1,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 270, maxHeight: 200, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>

            <StepLabel>
              <div>Carrier Bidding</div>
            </StepLabel>

          </Step>
          <Step>
            <StepLabel >
              <div style={{display: 'inline-block'}}>
              <div>Submitted Bids</div>
                <div style={{}}><LinearProgress mode="determinate" value={75} /></div>
              </div>
            </StepLabel>

           </Step>
          <Step>
            <StepLabel>Close Bidding

            </StepLabel>
           </Step>
          <Step>
            <StepLabel>Carrier Bid Summary</StepLabel>
          </Step>

        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}

export default BidStepper;
