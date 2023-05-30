import styled from "styled-components";


export const GeneralContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column; 
`;

export  const MovieDetailsContainer = styled.div`
width: 1000px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

export const MovieContainer = styled.div`
padding-bottom: 20px;
    display: flex;
    justify-content: center;
    gap:20px;
    border-bottom: 2px solid blue;
`;

export const MovieImage = styled.img`
height: 500px;
`;

export const MovieDescription = styled.div`
padding: 30px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column; 
    gap: 50px;
`;

export const Overview = styled.p`
width: 70%;
`;

export const MovieAddContainer = styled.div`
padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    gap:20px
`;

