import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '504e286e6bcf42ffab497d18ee6d45da'
};


 export const  getTrendingMovie = async () => {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page: 1,
      }
    });
    return data;
  };

  export const  getSearchMovie = async query => {
    const { data } = await axios.get('/search/movie', {
      params: {
       query,
      },
    });
    return data;
  }; 

  export const  getMovieId = async movie_id => {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  }; 


  export const  getMovieCredits = async movie_id => {
    const { data } = await axios.get(`/movie/${movie_id}/credits`);
    return data;
  }; 


  
  export const  getMovieReviews = async movie_id => {
    const { data } = await axios.get(`/movie/${movie_id}/reviews`);
    return data;
  }; 