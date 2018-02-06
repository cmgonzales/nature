import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import { Container, Row, Col } from 'reactstrap';

class Mid extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }
    goToSlide=()=>{
      this.slider.goToSlide(3);
    }
    _changeIcon=()=>{
      let {leftIcon,rightIcon}=this.state;
      if(leftIcon && rightIcon){
        this.setState({
          leftIcon:undefined,
          rightIcon:undefined
        });
      }
      else{
        this.setState({
          leftIcon:<span className="glyphicon glyphicon-glass"></span>,
          rightIcon:<span className="glyphicon glyphicon-music"></span>
        });
      }
    }
    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={4000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade"
              >
                <div className = 'carosel'>
                  <img
                    
                    src= {require('./mind.jpg')}
                  />
                  
                </div>
                <div className = 'carosel'>
                <img
                
                src= {require('./brave.jpg')}/>
                  </div>
                
                <div className = 'carosel'>
                <img
                
                src= {require('./nature.jpg')}/>
                </div>
                
                
              </React_Bootstrap_Carousel>
            
          </div>
          <Container className = 'container'>
          <Row>
          <Col xs="6">
          <img src = {require('./quote.jpg')}/>
          </Col>
          <Col xs="6">
          <p>Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.” “The sea is emotion incarnate. It loves, hates, and weeps.</p>
          <span>-unknown</span>
          <p>Of all the plants that cover the earth and lie like a fringe of hair upon the body of our grandmother, try to obtain knowledge that you may be strengthened in life.    </p>
          <span>Winnebago (Native American) (on nature)</span>
          <p>There is pleasure in the pathless woods, there is rapture in the lonely shore, there is society where none intrudes, by the deep sea, and music in its roar; I love not Man the less, but Nature more.</p>
          <span>Lord Byron</span>
          </Col>
        
          </Row>
          </Container>
          </div>
        </div>
      );
    }

};
export default Mid;