import styled from "styled-components";

export const FormContainer = styled.div`
padding: 40px;
display: flex;
flex-direction: column;
justify-content: center;
gap:10px
`;

export const Form = styled.form`
display: flex;
    justify-content: center;
`;

export const SearchInput = styled.input`
width: 250px;
    height: 40px;
    font-size: 20px;
    border-radius: 20px;
`;

export const Button = styled.button`
margin-left: 30px;
width: 120px;
    height: 46px;
    font-size: 20px;
    background-color: rgb(0, 0, 119);
    color: white;
    border-radius: 20px;
     &:hover {
      box-shadow: 0px 0px 15px rgb(0, 0, 119);
     }
`;

