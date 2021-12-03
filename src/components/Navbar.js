import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {Container} from 'react-bootstrap'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // const { title } = data.site.siteMetadata
  return (
    
    <nav>
    
      <h1>{ data.site.siteMetadata.title }</h1>
      <Container>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/opening">Openings</Link>
        <Link to="/strategy">Strategy</Link>
        <Link to="/tactic">Tactics</Link>
        <Link to="/endgame">Endgames</Link>
      </div>
      </Container>
    </nav>
    
  )
}