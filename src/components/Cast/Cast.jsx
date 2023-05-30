import { getMovieCredits } from '../servises/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Item, List, Card, Img, TextName, Text } from './Cast.styled';

function Cast () {
  const  {idMovie} = useParams();
  const [castInfo, setCastInfo] = useState();

  const getCast = async idMovie => {
    const { cast } = await getMovieCredits(idMovie);
    setCastInfo(cast);
  };

  useEffect(() => {
    getCast(idMovie)
  }, [idMovie]);

  if (!castInfo) {
    return null;
  }

  return (
    <>
    <List>
      {castInfo.map(({character, name, profile_path, id}) => {
        const castImage = profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` :
         'https://img1.wsimg.com/isteam/ip/bc473ead-66a2-452b-8269-b247bfe9772e/oopps.jpg/:/rs=w:1280';
          
         return (
          <Item key={id}>
            <Card>
              <Img alt={name} src={castImage}/>
              <TextName>{name}</TextName>
              <Text>{character}</Text>
            </Card>
          </Item>
         )
      })}
    </List>
    </>
  )
}


export default Cast;