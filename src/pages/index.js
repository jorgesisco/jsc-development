import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Header from "../components/Header"
import "./index.css"
import img from "../images/Background.svg"

const Body = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  line-height: 1.3;

  a {
    color: #e3e8ff;
    text-decoration: none;
    font-weight: 600;
  }
`

const Hero = styled.body`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 1020px;
  z-index: 0;

  h1 {
    margin: 0;
    color: white;
    font-size: 60px;
    line-height: 1.2;
    opacity: 0;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
    line-height: 1.5;
    animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
    padding: 50px;
  }
  a {
    font-size: 17px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    padding: 9px 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  a:hover {
    background: white;
    color: black;
  }

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

const HeroContent = styled.div`
  height: 900px;
  margin: auto;
  max-width: 600px;
  padding: 200px 50px;
  text-align: center;

  a {
    top: 700px;
  }
`

const HeroText = styled.div``

export default function Home() {
  return (
    <Body>
      <Header />
      <Hero image={require("../images/Background.svg")}>
        <HeroContent>
          <HeroText>
            <h1>You're so much stronger than your excuses</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              maxime ipsa eaque aliquid rerum ut officiis consectetur nesciunt
              odit tenetur.
            </p>
            <Link to="/ourservices">Click me</Link>
          </HeroText>
        </HeroContent>
      </Hero>
    </Body>
  )
}
