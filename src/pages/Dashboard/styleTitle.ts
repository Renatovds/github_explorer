import styled, { css } from 'styled-components';
import { shade } from 'polished'


interface FormProps {
  hasError: boolean;

}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  padding: 20px 0px;
  max-width:450px;
  margin-top:80px;
  line-height:56px;
  `;

export const Form = styled.form<FormProps>`

  max-width:700px;
  display:flex;
  margin-top:20px;


  input{
    flex:1;
    height:70px;
    border-radius:5px 0 0 5px;
    border:2px solid #fff;

    padding-left:10px;
    border-right:0;

    &::placeholder{
      color: #a8a8b3;
    };

    ${(props)=> props.hasError && css`
    border-color:#f44;

    `}


  }

  button {
    height:70px;
    width:200px;
    border-radius:0 5px 5px 0;
    border:0;
    background-color:#04d661;
    color: #fff;
    font-weight:bold;
    transition:background-color 0.2s;


    &:hover{
      background-color: ${shade(0.2, '#04d661')}
    }
  }
  `;

export const Repository = styled.div`
  margin-top:80px;
  max-width:700px;


  a {
    background-color:#fff;
    display:flex;
    align-content:center;
    border-radius:5px;
     width:100%;
     align-items:center;
     text-decoration:none;
     padding:24px;
     transition:transform 0.2s;

     &:hover{
       transform:translateX(10px);
     }

     & + a {
       margin-top:10px;
     }

  }

  img{
    width:64px;
    height:64px;
    border-radius:50%;
  }
  div{
    margin-left:16px;

    strong{
      font-size:20px;
      color:#3d3d4d;
    }

    p {
      margin-top:10px;
      font-size:16px;
      color:#a8a8b3;

    }
  }

  svg{
    margin-left:auto;
    color:#a8a8b3;
    height:20px;
    width:20px;

  }


  `

export const Error = styled.span`
color: #f44;
`
