import React from "react";
import {MainPageStyle, FormBlockStyle, InputTextStyle, InputGroupStyle, LabelStyle, PStyle, SectionStyle,
  SubmitStyle, PErrorStyle, ShowInputsStyle, MySelectStyle, H2Style, Logo, MainPage
} from './styleComponents/StyleComponents';
import arrow from './img/arrow.svg';
import logo from "./img/logo.svg";

function getCities(citiesArray, setDropSelect, editInputs, citiesValidation, submitStateEdit) {
  return citiesArray.map(city => <li onClick={()=>{
    editInputs(city.id, 'city')
    citiesValidation(city.id);
    submitStateEdit();

    setDropSelect( prev =>{
      let copyPrev={...prev};
      copyPrev.city=0;
      return copyPrev;
    } );

  }} key={city.id}>{city.name}</li>)
}
function getCityFromId (list, id){
  return list.find(key => key.id === id).name;
}

function getSources(sourcesArray, setDropSelect, editInputs) {
  return sourcesArray.map( key => <li onClick={()=>{
    editInputs(key, 'smi')

    setDropSelect( prev =>{
      let copyPrev={...prev};
      copyPrev.smi=0;
      return copyPrev;
    } );
  }}
    key={sourcesArray.indexOf(key)}>{key}</li> )
}

function App(props) {
  return (
    <MainPage>
    <MainPageStyle>
      <SectionStyle>
        <Logo src={logo} />
        <H2Style>Оставьте заявку</H2Style>
        <PStyle>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.</PStyle>
        <PStyle>Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.</PStyle>
        <PStyle>Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.</PStyle>
      </SectionStyle>
        <FormBlockStyle>
          <InputGroupStyle width={'180px'} show={true}>
            <InputTextStyle
              onChange={(e)=>{props.editInputs(e.target.value, 'name')}}
              onBlur={(e)=>{props.nameValidation(e.target.value); props.submitStateEdit();}}
              onFocus={()=>{props.setFormState( prev => {let copyPrev = {...prev}; copyPrev.name=0; return copyPrev;})}}
              status={props.formState.name===1 ? 'error' : ''}
              value={props.userInfo.name}
              type={`text`} placeholder={`Иван`} width={'180px'}/>
            <LabelStyle color={props.formState.name}>Ваше имя *</LabelStyle>
            {props.formState.name===1 ? <PErrorStyle>Имя должно содержать не мение двух символов</PErrorStyle> : ''}
          </InputGroupStyle>
          <InputGroupStyle width={'180px'} show={true}>
            <InputTextStyle
              onChange={(e)=>{props.editPhone(e.target.value)}}
              onBlur={(e)=>{props.phoneValidation(e.target.value); props.submitStateEdit();}}
              onFocus={()=>{props.setFormState( prev => {let copyPrev = {...prev}; copyPrev.phone=0; return copyPrev;})}}
              status={props.formState.phone===1 ? 'error' : ''}
              value={props.userInfo.phone}
              type={`text`} placeholder={`+7 (000) 000-00-00`} width={'180px'}/>
            <LabelStyle>Номер телефона *</LabelStyle>
            {props.formState.phone===1 ? <PErrorStyle>Номер телефона введен не полностью</PErrorStyle> : ''}
          </InputGroupStyle>
          <InputGroupStyle width={'180px'} show={true}>
            <InputTextStyle
              onChange={(e)=>{props.editInputs(e.target.value, 'email')}}
              onBlur={(e)=>{props.emailValidation(e.target.value); props.submitStateEdit();}}
              onFocus={()=>{props.setFormState( prev => {let copyPrev = {...prev}; copyPrev.email=0; return copyPrev;})}}
              status={props.formState.email===1 ? 'error' : ''}
              value={props.userInfo.email}
              type={`text`} placeholder={`example@skdesign.ru`} width={'180px'}/>
            <LabelStyle>E-mail *</LabelStyle>
            {props.formState.email===1 ? <PErrorStyle>Поле пустое, или введено не верно</PErrorStyle> : ''}
          </InputGroupStyle>
          <InputGroupStyle width={'180px'} show={true}>
            <InputTextStyle
              onChange={(e)=>{props.editInputs(e.target.value, 'social')}}
              onBlur={(e)=>{props.socialValidation(e.target.value); props.submitStateEdit();}}
              onFocus={()=>{props.setFormState( prev => {let copyPrev = {...prev}; copyPrev.social=0; return copyPrev;})}}
              status={props.formState.social===1 ? 'error' : ''}
              value={props.userInfo.social}
              type={`text`} placeholder={`instagram.com/skdesign`} width={'180px'}/>
            <LabelStyle>Ссылка на профиль *</LabelStyle>
            {props.formState.social===1 ? <PErrorStyle>Поле должно содержать не мение трех символов</PErrorStyle> : ''}
          </InputGroupStyle>


          <InputGroupStyle width={'100%'} show={true}>
            <MySelectStyle
              status={props.formState.city===1 ? 'error' : ''}
              display={props.dropSelect.city===0 ? false : true}
              onClick={()=>{props.setDropSelect( prev =>{let copyPrev={...prev}; copyPrev.city=1; return copyPrev; } )}}
            >
              {props.userInfo.city === '' ? <span>Выбирите город *</span> : getCityFromId(props.cities, props.userInfo.city)}
            </MySelectStyle>
            <ul>
              {getCities(props.cities, props.setDropSelect, props.editInputs, props.citiesValidation, props.submitStateEdit)}
            </ul>
            {props.formState.city===1 ? <PErrorStyle>Выберите город</PErrorStyle> : ''}
          </InputGroupStyle>


          <InputGroupStyle width={"100%"} show={true}>
            <InputTextStyle
              onChange={(e)=>{props.editInputs(e.target.value, 'organization')}}
              value={props.userInfo.organization}
              type={`text`} placeholder={`SK Design`} width={"100%"}/>
            <LabelStyle>Название организации/студии</LabelStyle>
          </InputGroupStyle>

          <ShowInputsStyle rotate={props.formState.showForm} onClick={()=>{props.setFormState( prev => {let copyPrev = {...prev}; copyPrev.showForm= !copyPrev.showForm; return copyPrev;})}}>
            {props.formState.showForm
              ? <p>Скрыть дополнительные поля <img src={arrow}/></p>
              : <p>Показать дополнительные поля <img src={arrow}/></p>
            }
          </ShowInputsStyle>

          <InputGroupStyle width={"100%"} show={props.formState.showForm}>
            <InputTextStyle
              onChange={(e)=>{props.editInputs(e.target.value, 'fio')}}
              value={props.userInfo.fio}
              type={`text`} placeholder={`ФИО`} width={'100%'}/>
            <LabelStyle>Получатель</LabelStyle>
          </InputGroupStyle>

          <InputGroupStyle width={'100%'} show={props.formState.showForm}>
            <MySelectStyle
              display={props.dropSelect.smi===0 ? false : true}
              onClick={()=>{props.setDropSelect( prev =>{let copyPrev={...prev}; copyPrev.smi=1; return copyPrev; } )}}
            >
              {props.userInfo.smi === '' ? <span>От куда узнали про нас</span> : <span>{props.userInfo.smi}</span>}
            </MySelectStyle>
            <ul>
              {getSources(props.sources, props.setDropSelect, props.editInputs)}
            </ul>
          </InputGroupStyle>

          <SubmitStyle
            onClick={(e)=>{e.preventDefault(); props.sendInfo();}}
            disabled={props.formState.submitState===2 ? false : true}
            loading={props.formState.submitState===1 ? true : false}
            width={'100%'} value={props.formState.submitState===1 ? '' : 'Отправить заявку'}/>

        </FormBlockStyle>
    </MainPageStyle>
    </MainPage>
  );
}

export default App;
