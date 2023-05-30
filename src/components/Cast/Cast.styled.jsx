import styled from "styled-components";


export const List = styled.ul`
max-width: 1200px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
padding: 15px;
`;

export const Item = styled.li`
display: flex;
    flex-direction: column;
    // height: 450px;
    overflow: hidden;
   
`;

export const Card = styled.div`
 flex-grow: 1;    
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
     box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

export const Img = styled.img`
max-width: 250px;
    min-height: 375px;
    object-fit: cover;
`;

export const TextName = styled.p`
    font-size: 22px;
    font-weight: 600;
    padding: 4px;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Text = styled.p`
font-size: 18px;
font-weight: 500;
    color: #443312;;
    padding: 4px;
    word-wrap: break-word;
    align-items: center;
    display: flex;
    justify-content: center;
`;
