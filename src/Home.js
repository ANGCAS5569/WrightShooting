import React, { Component } from "react";
import Image from './training.jpg';
import Image2 from './targets.JPG';
 
class Home extends Component {
  render() {
    return (
      <div className = "Home">
        <div className = "Banner"> 
          <h3 className = "BannerContent1" >Our Mission:</h3>
          <p className = "BannerContent2">We will equip our law enforcement, military, and security forces brothers and 
            sisters with comprehensive training and support that bridges the gap between 
            basic level shooting skills to advanced techniques. </p>
        </div> 
        <div className = "Email">
          <h4>Join our mailing list<br></br>Never miss an Update!</h4>
          <input type="text" id="email" name="email" ></input>
            <br></br>
            <br></br>
          <button className="button1">Subscribe Now</button>
        </div>
        <div className = "training">
          <img button src={Image} alt="training picture" width="300"></img>
          <p className= "training-info">TRAINING<br></br>CLASS INFO</p>
        </div>
        <div className = "targets">
          <img button src={Image2} alt="targets picture" width="300" height="198"></img>
          <p className= "targets-info">TARGETS<br></br>SHOP</p>
        </div>
        <div className ="classReviews">
        <h4>Check out some of our Class<br></br>Reviews!</h4>
        <p className="testimonials">This class was extremely informative and allowed for <br></br>
          the students to identify their weakness. The class <br></br>
          also gave students new training scenarios and techniques <br></br>
          to apply while teaching. During the class Brandon included <br></br>
          all of the students while he explained a course and he was <br></br>
           very humble and didn't make his students feel belittled <br></br>
           because of his extensive training. Overall great class</p>
        </div>
      </div>
    );
  }
}
 
export default Home;