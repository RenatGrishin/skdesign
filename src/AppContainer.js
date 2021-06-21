import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import App from "./App";
import {editInfoAction, sendInfoAction} from "./store/userInfoReducer";

function AppContainer() {
	const [formState, setFormState] = useState({ name: 0, phone: 0, email: 0, social: 0, city: 0, showForm:false, submitState:0});
	const [dropSelect, setDropSelect] = useState({city:0, smi:0})
	const userInfo = useSelector(info => info.userInfo);
	const cities = useSelector(info => info.cities);
	const sources = useSelector(info => info.sources);
	const dispatch = useDispatch();

	function editInputs(value, item){
		return dispatch(editInfoAction(value, item));
	}
	function editPhone(value){
		let numberPhone = phoneMask(value);
		return dispatch(editInfoAction(numberPhone, 'phone'));
	}

	function phoneMask (number){
		let mask = '+X (XXX) XXX-XX-XX';
		let numberPhone = null;

		numberPhone = number.match(/\d+/g);
		if(!numberPhone) return '';

		numberPhone = numberPhone.join('');
		if(numberPhone.length > 11) numberPhone = numberPhone.substr(0, 11);
		numberPhone = numberPhone.split('');
		for(let key of numberPhone){
			mask = mask.replace('X', key);
		}

		let xIndex = mask.search(/\d(?=\D*$)/) +1;
		let numberMask = null;
		if(xIndex > 0){
			numberMask = mask.substr(0, xIndex)
		}else{
			numberMask = mask;
		}
		return numberMask;
	}

	function nameValidation (value){
		let validInfo = 1
		if(value.length >= 2){
			validInfo = 2;
		}
		setFormState(prev => {
			let copyPrev = {...prev}
			copyPrev.name = validInfo;
			return copyPrev;
		})
	}

	function phoneValidation(value){
		let phoneNumbers = value.match(/\d+/g);
		let validInfo = 0
		if(phoneNumbers){
			phoneNumbers = phoneNumbers.join('');
			if(phoneNumbers.length === 11){
				validInfo = 2;
			}else{
				validInfo = 1
			}
		}else{
			validInfo = 1
		}
		setFormState(prev => {
			let copyPrev = {...prev};
			copyPrev.phone = validInfo;
			return copyPrev;
		})
	}

	function emailValidation(value) {
		let validInfo = 1;
		if(value.match(/.+@.+\..+/i) !== null){
			validInfo = 2
		}
		setFormState(prev => {
			let copyPrev = {...prev}
			copyPrev.email = validInfo;
			return copyPrev;
		})
	}
	function socialValidation (value){
		let validInfo = 1;
		if(value.length >= 3){
			validInfo = 2;
		}
		setFormState(prev=>{
			let copyPrev = {...prev}
			copyPrev.social = validInfo;
			return copyPrev;
		})
	}
	function citiesValidation(value) {
		let validInfo = 1;
		if(value !== 'default'){
			validInfo = 2;
		}
		setFormState(prev=>{
			let copyPrev = {...prev}
			copyPrev.city = validInfo;
			return copyPrev;
		})
	}

	function submitStateEdit() {
		setFormState( prev => {
			let copyState = {...prev};
			if(copyState.name === 2
			&& copyState.phone === 2
			&& copyState.email === 2
			&& copyState.social === 2
			&& copyState.city === 2){
				copyState.submitState = 2;
				return copyState;
			}
			copyState.submitState = 0;
			return copyState;
		} )
	}
	function sendInfo1() {
		dispatch(sendInfoAction());
	}
	function sendInfo(){
		setFormState(prev => {
			let copyPrev = {...prev};
			copyPrev.submitState = 1;
			return copyPrev;
		})
		setTimeout(()=>{
			userGetLog();
			dispatch(sendInfoAction());
			setFormState(prev => {
				let copyPrev = {...prev};
				copyPrev.name = 0;
				copyPrev.phone = 0;
				copyPrev.email = 0;
				copyPrev.social = 0;
				copyPrev.city = 0;
				copyPrev.submitState = 0;
				return copyPrev;
			})
		}, 2000);
	}

	function userGetLog(){
		console.log(`Имя: ${userInfo.name}\nТелефон: ${userInfo.phone}\nE-mail: ${userInfo.email}
Профиль: ${userInfo.social}\nГород: ${userInfo.city}\nСтудия: ${userInfo.organization}
Получатель: ${userInfo.fio}\nОткуда узнали: ${userInfo.smi}`)
	}

	return (
		<App
			formState={formState}
			userInfo={userInfo}
			cities={cities}
			sources={sources}
			editInputs={editInputs}
			editPhone={editPhone}
			setFormState={setFormState}
			nameValidation={nameValidation}
			phoneValidation={phoneValidation}
			emailValidation={emailValidation}
			socialValidation={socialValidation}
			citiesValidation={citiesValidation}
			submitStateEdit={submitStateEdit}
			sendInfo={sendInfo}
			dropSelect={dropSelect}
			setDropSelect={setDropSelect}
		/>
	);
}

export default AppContainer;
