import React from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

export default props => {
	return (
		<div className="col-md-9">
			<div className="sign-up-form">
				<h1>Registration Form</h1>

				<Stepper activeStep={props.stepIndex} connector={<ArrowForwardIcon />}>
					<Step>
						<StepLabel>Fill Account Details</StepLabel>
					</Step>

					<Step>
						<StepLabel>Fill Address Details</StepLabel>
					</Step>

					<Step>
						<StepLabel>Confirm Registration</StepLabel>
					</Step>
					<Step>
						<StepLabel>Great success!</StepLabel>
					</Step>
				</Stepper>

				{props.getStepContent}
			</div>
		</div>
	);
};
