import React from 'react'
import ImageSlider from '../Slider/slider'
import img1 from '../Slider/wed1.jpg';
import img2 from '../Slider/wed2.jpg';
import img3 from '../Slider/wed3.jpg';
import img4 from '../Slider/wed4.jpg';
import img5 from '../Slider/wed5.jpg';

const Home = () => {
    const containerStyles = {
        width: "80%",
        height: "600px",
        margin: "0 auto",
      };
      const slides = [
        { url: img1, title: "beach" },
        { url: img2, title: "boat" },
        { url: img3, title: "forest" },
        { url: img4, title: "city" },
        { url: img5, title: "italy" },
      ];
  return (
    <div>
              <h1 style={{ fontFamily: "serif", fontWeight: "bold", margin: "10px 550px", color: "green" }}>WELCOME!.....</h1>
              
              <p style={{ alignItems: "center", margin: "30px 10%", fontFamily: "-moz-initial", fontStyle: "italic", fontSize: "25px", bottom: "10px" }}>
                Wedding Cluster expertise in delivering inventive, advance, and bleeding-edge events, utilizing a center conviction that narrating drives our innovative methodology.
                Founded by pioneers in the diversion and event generation industry with broad specialized aptitude.
                Our End to End event management services make our company the ideal beginning for every wedding style.
                Through imaginative structure and immaculate execution, we create memorable and one-of-a-kind events of all sizes and styles.
              </p>
    
              <div style={containerStyles}>
                <ImageSlider slides={slides} />
              </div>
            </div>
  )
}

export default Home