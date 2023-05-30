import styled from "styled-components";

export const MoviesList = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap:30px;
    justify-content: center;
    align-items: center;
`;

export const MovieItem = styled.li`
width: 400px;
height: 350px;

display: flex;
gap: 10px;
align-items: flex-end;
justify-content: space-between;
border-right: 2px solid #eee;
border-bottom: 2px solid #eee;
border-left: 2px solid #eee;
border-top: 2px solid #eee;
&:hover {
  box-shadow: 12px 15px 12px 6px rgba(80, 43, 34, 0.2);
}
`;

export const Title = styled.h2`
display: flex;

    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
width: 400px;
height: auto;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
gap:20px;
align-items: center;
`
