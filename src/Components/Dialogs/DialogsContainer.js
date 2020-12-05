import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer'
import store from '../../Redux/redux-store';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {

	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState().dialogsPage;

				let onSendMessageClick = () => {
					store.dispatch(sendMessageCreator());
				}

				let onNewMessageChange = (body) => {
					store.dispatch(updateNewMessageBodyCreator(body));
				}
				return <Dialogs updateNewMessageBody={onNewMessageChange}
					sendMessage={onSendMessageClick}
					dialogsPage={store.getState().dialogsPage} />
			}}
		</StoreContext.Consumer>

	)
}

export default DialogsContainer;
