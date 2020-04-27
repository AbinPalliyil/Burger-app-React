/* eslint-disable react/display-name */
import React, { Component } from 'react';
import Aux from '../Auxilary';
import Modal from '../../components/UI/Modal/Modal';

const WithErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				error: null,
			};
			this.errorConfirmedHandler = this.errorConfirmedHandler.bind(this);
		}

		componentDidMount() {
			axios.interceptors.request.use(() => {
				this.setState({ error: null });
			});
			axios.interceptors.response.use(null, (error) => {
				this.setState({ error });
			});
		}
		errorConfirmedHandler() {
			this.setState({ error: null });
		}
		render() {
			return (
				<Aux>
					<Modal
						show={this.state.error}
						modalClosed={this.errorConfirmedHandler}>
						{this.state.error
							? this.state.error.message
							: 'Something went wromg ..!'}
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}
	};
};

export default WithErrorHandler;
