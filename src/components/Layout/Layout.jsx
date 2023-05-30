import { Suspense } from "react";
import { Outlet, NavLink, } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
font-size: 26px;
display: flax;

  color: white;
  &.active {
    color: orange;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 15px rgb(122 255 154);
  }
`;

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
