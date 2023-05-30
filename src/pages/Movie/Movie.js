import { getSearchMovie } from "components/servises/api";
import { useEffect, useState } from "react";
import { MovieList } from "components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { Button, Form, FormContainer, SearchInput } from "./Movie.styled";


function Movies () {
  const [searchMovies, setSerchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearch = searchParams.get('query') ?? '';

  useEffect(() => {
   if(!movieSearch) return;

   setSearchQuery(movieSearch);
   getSearchMovie(movieSearch).then(({ results }) => {
    setSerchMovies(results);
   });
  }, [movieSearch]);

  const onFormSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
    
  };

  return (
    <FormContainer>
      <Form onSubmit={onFormSubmit}>
        <SearchInput
        type="text"
        autoComplete="off"
        name="searchMovie"
        autoFocus
        placeholder="Search movie"
        onChange={ e=> setSearchQuery(e.target.value)}
        />
      <Button type="submit">Find</Button>
      </Form>
      <MovieList movies = {searchMovies}/>
    </FormContainer>
    
  )
}

export default Movies;