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

			this.reqInterceptor = axios.interceptors.request.use((req) => {
				this.setState({ error: null });
				return req;
			});
			this.respInterceptor = axios.interceptors.response.use(
				(res) => res,
				(error) => {
					this.setState({ error });
				},
			);
		}

		componentWillUnmount() {
			axios.interceptors.request.reject(this.reqInterceptor);
			axios.interceptors.request.reject(this.respInterceptor);
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
