import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer'

import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

	let state = props.store.getState().dialogsPage;

	let dialogsElements = state.dialogs.map((d) => {
		return <DialogItem name={d.name} id={d.id} />
	})

	let messagesElements = state.messages.map((m) => {
		return <Message text={m.message} />
	})

	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		 props.store.dispatch(sendMessageCreator())
		}

	let onNewMessageChange = (event) => {
		let body = event.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogsItems}>{dialogsElements}</div>

				<div className={classes.messages}>
					<div>{messagesElements}</div>
					<div>
					<div>
						<textarea value={newMessageBody}
						  	      placeholder='Enter your message'
								  onChange={onNewMessageChange}
							      ></textarea>
					</div>
					<div><button onClick={onSendMessageClick}>Send</button></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
