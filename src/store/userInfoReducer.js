const EDIT_INFO = 'EDIT_INFO';
const SEND_INFO = 'SEND_INFO';

const initialState = {
	name: '',
	phone: '',
	email: '',
	social: '',
	city: '',
	organization: '',
	fio: '',
	smi: '',
}

export function userInfo (state=initialState, action){
	const copyState = {...state};
	switch (action.type) {
		case EDIT_INFO:
			if(action.item === 'name') copyState.name = action.info;
			if(action.item === 'phone') copyState.phone = action.info;
			if(action.item === 'email') copyState.email = action.info;
			if(action.item === 'social') copyState.social = action.info;
			if(action.item === 'city') copyState.city = action.info;
			if(action.item === 'organization') copyState.organization = action.info;
			if(action.item === 'fio') copyState.fio = action.info;
			if(action.item === 'smi') copyState.smi = action.info;
			return copyState;
		case SEND_INFO:
			copyState.name = '';
			copyState.phone = '';
			copyState.email = '';
			copyState.social = '';
			copyState.city = '';
			copyState.organization = '';
			copyState.fio = '';
			copyState.smi = '';
			return copyState;
		default: return state;
	}
}

export const editInfoAction = (info, item) =>{
	return {type: EDIT_INFO, info, item}
}
export const sendInfoAction =()=>{return {type:SEND_INFO} }
