const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hihi' },
    ],
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Ann' },
        { id: 3, name: 'Sofy' },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });   
            return state;
        default:
            return state;
    }
 }

 export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE,
	}
}


export const updateNewMessageBodyCreator = (body) => {
	return { 
	    type: UPDATE_NEW_MESSAGE_BODY, 
		body: body
	}
}

export default dialogsReducer;