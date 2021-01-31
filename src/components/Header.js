import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 25px 0;
  z-index: 100;

  @media (max-width: 640px) {
    padding: 10px 0;
  }
  a:nth-child(5) {
    display: none;
  }
`

const HeaderGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  max-width: 800px;
  margin: auto;
  align-items: center;
  /* background: #212c4f; */
  justify-items: center;
  img {
    width: 50px;
  }
  a {
    text-decoration: none;
    color: blue;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(4, auto);
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderGroup>
      <Link to="/">
        <img
          src={require("../images/iconfinder_social_media_social_media_logo_imo_2993747.png")}
        ></img>
      </Link>
      <Link to="/home">Home</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/Contact">Contact</Link>
    </HeaderGroup>
  </HeaderContainer>
)

export default Header
