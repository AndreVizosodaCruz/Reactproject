import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import ReCAPTCHA from "react-google-recaptcha";

import { attributes, react as ContactsContent } from '../../../public/static/content/sections/contacts.md';

import {
  Section,
  Container,
  Wrapper,
  CheckBox,
  Text12,
  Text10,
  H6
} from '../../atoms';

import {
  Intro
} from '../../molecules';

export default function Contact(props) {

  const {
    sectionName,
    smallTitle,
    title,
    description,
    mandatoryText,
    termsText,
    buttonText
  } = attributes;

  const [checked, setChecked] = useState(false);
  const [missCheck, setMissCheck] = useState(false);

  const changeCheck = () => {
    setChecked(!checked);
  }

  const [inputs, setInputs] = useState({
    name: '',
    honeypot: '',
    email: '',
    message: '',
    accessKey: 'cf3aa774-0fb2-42af-a89e-7e7b880b1136'
  });

  const handleInput = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }

  const [errorField, setErrorField] = useState('');

  const validate = (inputs) => {
    let allowed = ['name', 'email', 'message'];
    let data = Object.keys(inputs)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = inputs[key];
        return obj;
      }, {});
    let values = Object.values(data);
    let keys = Object.keys(data);
    let error = '';
    for (let i = 0; i < values.length; i++) {
      if (values[i].length == 0 || values[i] == '') {
        error = keys[i]
        break;
      }
      if (keys[i] == 'email') {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(data.email)) {
          error = '';
        } else {
          error = keys[i]
          break;
        }
      }
      error = '';
    }
    setErrorField(error);
    if (error !== '') {
      return false;
    } else {
      return true;
    }
  }

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [human, setHuman] = useState(false);

  const recaptchaRef = React.createRef();

  const onChange = () => {
    console.log('entrei');
    setHuman(true);
  }

  const submitForm = async e => {
    e.preventDefault();
    if (validate(inputs)) {
      if (checked) {
        if (human) {
          setLoading(true);
          setMissCheck(false);
          try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
              method: 'POST',
              body: JSON.stringify(inputs),
              headers: { 'Content-Type': 'application/json' }
            });
            const json = await res.json();
            if (json.success) {
              setLoading(false);
              setSuccess(true);
              setError(false);
              resetForm();
            } else {
              setLoading(false);
              setSuccess(false);
              setError(true);
              resetForm();
            }
          } catch (e) {
            setLoading(false);
            setSuccess(false);
            setError(true);
            resetForm();
          }
        }
      } else {
        setMissCheck(true);
      }
    }
  }

  const resetForm = () => {
    setTimeout(() => {
      setLoading(false);
      setSuccess(false);
      setError(false);
      setInputs(inputs => ({ ...inputs, name: '', honeypot: '', email: '', message: '' }));
      setChecked(false);
    }, 5000)
  }

  const form = () => {
    if (!loading && !success && !error) {
      return (
        <DivForm>
          <InputForm
            name='name'
            type='text'
            className={(errorField == 'name') ? 'error' : ''}
            placeholder='name*'
            onChange={handleInput}
            value={inputs.name}
          />
          <InputForm
            name='honeypot'
            type='text'
            className={(errorField == 'honeypot') ? 'error' : ''}
            placeholder='honeypot*'
            onChange={handleInput}
            value={inputs.honeypot}
            none
          />
          <InputForm
            name='email'
            type='text'
            className={(errorField == 'email') ? 'error' : ''}
            placeholder='email*'
            onChange={handleInput}
            value={inputs.email}
          />
          <TextForm
            name='message'
            className={(errorField == 'message') ? 'error' : ''}
            placeholder='message*'
            onChange={handleInput}
            value={inputs.message}
          />
          <Mandatory
            height
            font='Montserrat-Medium'
            color='#D9DADA'
            dangerouslySetInnerHTML={{ __html: mandatoryText }}
          />
          <DivTerms>
            <LabelInput>
              <CheckBox
                checked={checked}
                error={missCheck}
                onClick={() => changeCheck()}
              />
            </LabelInput>
            <TextTerms
              height
              color='#D9DADA'
              font='Montserrat-Medium'
              dangerouslySetInnerHTML={{ __html: termsText }}
            />
          </DivTerms>
          <Margin />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey='6LcYLecUAAAAAEoR5hm3Dj3GopT8TOvrY4asFHpe'
            onChange={() => onChange()}
          />
          <DivButton>
            <Button onClick={submitForm}>
              <Text>{buttonText}</Text>
              <Icon src='/static/icons/icon_angleright.svg' />
            </Button>
          </DivButton>
        </DivForm>
      )
    }
  }
  const formLoading = () => {
    if (loading) {
      return (
        <DivForm>
          <H6>
            Sending your contact form!
          </H6>
        </DivForm>
      )
    }
  }
  const formSuccess = () => {
    if (!loading && success && !error) {
      return (
        <DivForm>
          <DivFormInfo>
            <LogoForm src='/static/icons/correct_form.svg' />
            <H6>
              Done! Your message was delivered.
          </H6>
          </DivFormInfo>
        </DivForm>
      )
    }
  }
  const formError = () => {
    if (!loading && !success && error) {
      return (
        <DivForm>
          <DivFormInfo>
            <LogoForm src='/static/icons/incorrect_form.svg' />
            <H6>
              Error! Please try again later.
            </H6>
          </DivFormInfo>
        </DivForm>
      )
    }
  }

  return (
    <Section className={sectionName} noFade >
      <Ball left>
        <Parallax y={[-115, 115]}>
          <img src='/static/icons/ball.svg' />
        </Parallax>
      </Ball>
      <Wrapper both>
        <Container md>
          <DivContacts>
            <DivIntro>
              <Intro
                smallTitle={smallTitle}
                title={title}
                titleSize='H3'
                titleMaxWidth='568px'
                description={description}
                descriptionFontFamily='Montserrat-Medium'
                descriptionColor='#6F6F6E'
                descriptionSize={12}
                descriptionMaxWidth='370px'
              />
            </DivIntro>
            {form()}
            {formLoading()}
            {formSuccess()}
            {formError()}
          </DivContacts>
        </Container>
      </Wrapper>
    </Section>
  )
}

const Margin = styled.div`
  margin-top:16px;
`;
const Ball = styled.div`
  position:absolute;
  ${({ left }) => left && css`
    bottom:20%;
    left:25%;
    transform:translateX(-20%);
  `}
  @media screen and (max-width:767px){
    display:none;
  }
`;
const DivContacts = styled.div`
  display:flex;
  flex-flow:row;
  @media screen and (max-width:835px){
    flex-flow:column;
  }
`;
const DivIntro = styled.div`
  flex:1;
`;
const DivForm = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-flow:column;
  flex:1;
  padding-top:32px;
`;
const DivFormInfo = styled.div`
  display:flex;
  flex-flow:row;
`;
const LogoForm = styled.img`
  margin-right:8px;
`;
const InputForm = styled.input`
  border: 1px solid #D9DADA;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 16px 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: Montserrat-Medium;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color:#202020;
  width:100%;
  margin-bottom:16px;
  &::placeholder{
    color:#6f6f6f;
  }
  &.error{
    border-color:#E3000F;
  }
  ${({ none }) => none && css`
    display:none;
    margin-bottom:0;
  `}
`;
const TextForm = styled.textarea`
  resize: none;
  height:152px;
  border: 1px solid #D9DADA;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 16px 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: Montserrat-Medium;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color:#202020;
  width:100%;
  &::placeholder{
    color:#6f6f6f;
  }
  &.error{
    border-color:#E3000F;
  }
`;
const Mandatory = styled(Text12)`
  margin-top:16px;
`;
const DivTerms = styled.div`
  margin-top:16px;
  display:flex;
  flex-flow:row;
  align-items:center;
`;
const LabelInput = styled.label`
  height:18px;
  width:18px;
`;
const TextTerms = styled(Text10)`
  margin-left:10px;
  text-transform:uppercase;
  a{
    transition: all 0.5s ease;
    text-decoration:underline;
  }
`;
const DivButton = styled.div`
  margin-top:40px;
`;
//BUTTON
const Text = styled.div`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  transition: all 0.5s ease;
`;
const Icon = styled.img`
  height:8px;
  object-fit:contain;
  transition: all 0.5s ease;
`;
const Button = styled.div`
  position: relative;
  background: #E3000F;
  border-radius: 6px;
  width:176px;
  height:48px;
  padding:14px 24px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:space-between;
  transition: all 0.5s ease;
  :hover{
    background: #C5000D;
    cursor:pointer;
    ${Icon}{
      transform: translateX(5px);
    }
  }
`;