import React from "react"
import styled from "styled-components"
import config from "../../../customize"

const Footer = () => {
  return (
    <StyledFooter className="main-footer">
      <div />
      <div>
        <span>© {new Date().getFullYear()} </span>
        <StyledA
          href={config.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {config.author}
        </StyledA>
        , Built with
        {` `}
        <StyledA
          href="https://github.com/EllisMin/gatsby-blog-mdx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="heart_emoji">💖</span>

        </StyledA>
      </div>
      <StyledA/>

    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  margin-top: 1rem;
  padding: 1rem;
  
  @media(max-width: 500px){
    font-size: 0.77rem;
  }
`
const StyledA = styled.a``


