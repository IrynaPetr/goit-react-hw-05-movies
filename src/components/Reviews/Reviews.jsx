import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "components/servises/api";
import { Item, List, TextAuthor, Container, TextContent, Content, TextNoReview } from "./Reviews.styled";

function Reviews() {
  const { idMovie } = useParams();
  const [reviewInfo, setReviewInfo] = useState([]);

  const getReview = async (idMovie) => {
    const { results } = await getMovieReviews(idMovie);
    setReviewInfo(results);
  };

  useEffect(() => {
    getReview(idMovie);
  }, [idMovie]);

  if (!reviewInfo) {
    return null;
  }

  return (
    <>
      {reviewInfo.length > 0 ? (
        <List>
          {reviewInfo.map(({ id, author, content }) => (
            <Item key={id}>
              <TextAuthor>Author: {author}</TextAuthor>
              <Container>
                <Content>Content: </Content>
                <TextContent>{content}</TextContent>
              </Container>
            </Item>
          ))}
        </List>
      ) : (
        <TextNoReview>Oops!</TextNoReview>
      )}
    </>
  );
}

export default Reviews;
