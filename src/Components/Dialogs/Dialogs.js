import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((d) => {
		return <DialogItem name={d.name} id={d.id} />
	})

	let messagesElements = props.state.messages.map((m) => {
		return <Message text={m.message} />
	})

	let newMessage = React.createRef()

	let addMessage = () => {
		let text = newMessage.current.value
		alert(text)
	}

	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogsItems}>{dialogsElements}</div>

				<div className={classes.messages}>
					{messagesElements}
					<div>
						<textarea ref={newMessage}></textarea>
					</div>
					<button onClick={addMessage}>Message</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
