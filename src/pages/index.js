import React from "react"
// import { Link } from 'gatsby'
import 'chessboard-element'
import Layout from "../components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/home.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col, Button } from 'react-bootstrap'


export default function Home() {
    
    return (
    <Layout>
      <section>
        <Container>
          <Row>
            <Col sm={7}>
              <h5>Improve your chess knowledge!</h5>
              {/* <Link className={styles.btn} to="/endgame">Solution</Link> */}
            </Col>
            <Col sm={5}>
              <StaticImage src="../images/banner.png" alt="Banner" placeholder="blurred" />
            </Col>
          </Row>
        </Container>
        <Container>
    <Row>
      <Col>
      <h3>Levitsky - Marshall</h3>
        <chess-board
          position="5rk1/pp4pp/4p3/2R3Q1/3n4/2q4r/P1P2PPP/5RK1 b - - 1 23" orientation="black">
        </chess-board>
        <h6>Black to move</h6>
        <Button variant="danger"><a href="https://share.chessbase.com/SharedGames/game/?p=iNgxQmFheCpsQUjXXraFzRVHmiMu7Lat5B6MjbcZtVz4KLVBK65XUsIc4kAKL35g">Solution</a></Button>
          
      </Col>
    <Col>
    <h3>Meier - Muller</h3>
    <chess-board
    position="2rq2kb/pb1r3p/2n1R1pB/1pp2pN1/3p1Q2/P1PP2P1/1P3PBP/4R1K1 w - - 0 1">
    </chess-board>
    <h6>White to move</h6>
        <Button variant="danger"><a href="https://share.chessbase.com/SharedGames/game/?p=WbrS66TP/nSvgOopymvc/n6dSkM9PEKnsI1QB9jP1d5vwRwb1I5oXmRlF42J/AWQ">Solution</a></Button>
          
{/* <Link className={styles.btn} to="/opening">Solution</Link> */}
    </Col>
    <Col>
    <h3>Topalov - Shirov</h3>
    <chess-board
    position="8/8/4kpp1/3p1b2/p6P/2B5/6P1/6K1 b - - 0 47" orientation="black">
    
    </chess-board>
    <h6>Black to move</h6>
        <Button variant="danger"><a href="https://share.chessbase.com/SharedGames/game/?p=WbrS66TP/nSvgOopymvc/qQvi+Ep8hyLVaf4FcEl3x1FbHFu1KxpFgBpKaGmQ+A7">Solution</a></Button>
          
    {/* <Link className={styles.btn} to="/endgame">Solution</Link> */}
    </Col>
  </Row>
</Container>
                       
      </section>
    </Layout>
  )
}



