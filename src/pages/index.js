import React from "react"
import { Chessboard } from 'react-chessboard'
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as styles from '../styles/home.module.css'
import { StaticImage } from "gatsby-plugin-image"
import {Container, Row, Col} from 'react-bootstrap'



export default function Home() {
  
  
    return (
    <Layout>
      <section>
      
      <Container>
  <Row>
  <Col sm={6}>
        <div>
          <h2>My chess site</h2>
          <h3>Develop & Deploy</h3>
          

          <p>
            Follow me on <a href="https://share.chessbase.com/SharedGames/game/?p=yVz2UszaBg57ew4NOzwpjz9N2OO2cdGEAKiQa8Um0Py+9WdqWE/q6/nzzRjriz0u">Chessbase</a>!
          </p>

          <Link className={styles.btn} to="/endgame">Endgames</Link>
        </div>
        </Col>
        <Col sm={6}>
        <StaticImage src="../images/banner.png" alt="Banner" placeholder="blurred" />
</Col>
        </Row>
  
</Container>

        <Container>
    <Row>
    <Col><Chessboard position={'r1bqkb1r/p1p2Np1/5n1p/1p1Pp3/3n4/2P5/PP1P1PPP/RNBQKB1R b KQkq - 0 8'} 
            showBoardNotation={true}
            arePiecesDraggable={true}
            boardOrientation={'white'}
            boardWidth={300}
            customPremoveDarkSquareStyle={'#A42323'} /></Col>
    <Col><Chessboard position={'8/2p5/2p5/6k1/pP1PP2p/P4K2/8/8 w - - 0 41'} 
            showBoardNotation={false}
            arePiecesDraggable={true}
            boardOrientation={'white'}
            boardWidth={300}
            customPremoveDarkSquareStyle={'#A42323'} /></Col>
    <Col><Chessboard position={'8/r4p1k/1pbQp1p1/3p4/3P4/2P2BP1/1P3PK1/8 b - - 2 39'} 
            showBoardNotation={false}
            arePiecesDraggable={true}
            boardOrientation={'white'}
            boardWidth={300}
            customPremoveDarkSquareStyle={'#A42323'} /></Col>
  </Row>
</Container>
            
            
      </section>
    </Layout>
  )
}


