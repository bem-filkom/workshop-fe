import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import Slider from "../../components/slider/App";
import { Chrono } from "react-chrono";
import Value1 from "../../assets/img/homepage/value1.png"
import Value2 from "../../assets/img/homepage/value2.png"
import Value3 from "../../assets/img/homepage/value3.png"
import Value4 from "../../assets/img/homepage/value4.png"


import Helmet from "react-helmet";

import "./Home.scss";
const data = [
  {
    title: "Grand Launcing",
    cardTitle: "GitHub, Inc.",
    cardSubtitle:
      "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git."
  },
  {
    title: "list",
    cardTitle: "",
    cardSubtitle: ``
  },
  {
    title: "text",
    cardTitle: "",
    cardSubtitle: ``
  },
  {
    title: "Table",
    cardTitle: "A Table",
    cardSubtitle: ``
  }
];

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Home | HOLOGY 5.0</title>
      </Helmet>
      <div className="section-home-full-1">
        
        <div className="text">
          <div className="title">
            <Header size="r" noLine>
            GET YOUR ACADEMY CHANCE NOW!
            </Header>
          </div>
          <div className="description">
            <Paragraph center>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis nulla eu sem sollicitudin, non vulputate nisl sollicitudin. Proin nec magna blandit justo pulvinar cursus vel vel dui. Duis vitae tempus lectus. 
            </Paragraph>
            <div className="button1">
              <Link to="../Academy">
                <Button>See More</Button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>

      <div className="section-home-full-2">
        <div className="trailer">
        <iframe width="600" height="400" src="https://www.youtube.com/embed/iqfKZYXoOs8" title="trailer"></iframe>
        </div>
        
        <div className="text">
          <h1 className="wlcome">Welcome to Official Website of</h1>
          <div className="title">
          <Header size="l" noLine>HOLOGY 5.0</Header>
          </div>
        </div>
        <div className="waveleft"></div>
        <div className="waveright"></div>

    </div>

    <div className="section-home-full-3">
      
    <div className="text">
        <div className="logo"></div>
          <div className="title">
          <h1>WHAT’S ON </h1>
          <h1 className="head2"> HOLOGY 5.0?</h1>

          </div>
        </div>

        <div className="description">
            <Paragraph justify>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis nulla eu sem sollicitudin, non vulputate nisl sollicitudin. Proin nec magna blandit justo pulvinar cursus vel vel dui. Duis vitae tempus lectus. 
            </Paragraph>
        </div>
      </div>
    
<div className="section-home-full-04">
 
<div style={{ width: "100%", height: "500px" }}>
        <Chrono
          items={data}
          mode="HORIZONTAL"
          slideShow
          slideItemDuration={1000}
          scrollable={{ scrollbar: false }}
          hideControls
        >
          <div>
            <div style={{ width: "250px", height: "250px" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="test"
                src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
              />
            </div>
          </div>
          <div>
            <h3>This is a List</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          <div>
            <h3>Dunkirk</h3>
            <p>
             x
            </p>
            <p>
              x
            </p>
          </div>
          <div style={{ margin: "1rem" }}>
            <h3>Table</h3>
            <table>
              <thead>
                <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
                  <td>Column 3</td>
                  <td>Column 4</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                  <td>Value 4</td>
                </tr>
                <tr>
                  <td>Value 5</td>
                  <td>Value 6</td>
                  <td>Value 7</td>
                  <td>Value 8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="chrono-icons">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/about.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/idea.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/sun.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/info.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/calendar.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />

          </div>
        </Chrono>
      </div>


</div>

    <div className="section-home-full-4">
      <div className="rule1"></div>
      <div className="rule2"></div>
      <div className="title">
      <Header size="l" noLine>COMPETITION</Header>
      </div>
      <Slider/>

    </div>
    <div className="section-home-full-5">
        <div className="container1">
          <div className="text">
            <div className="title">
              <Header size="l" noLine>
                OUR VALUES
              </Header>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="card-container">
            <div className="box-wrap">
              <div className="box1">
                <div className="box1-inner">
                  <div className="value-img">
                    <img src={Value1} alt="value" />
                  </div>
                  <div className="box1-back">
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis nulla eu sem sollicitudin, non vulputate nisl sollicitudin. Proin nec magna blandit justo pulvinar cursus vel vel dui. Duis vitae tempus lectus.
                    </Paragraph>
                  </div>
                </div>
              </div>
              <Paragraph>Value</Paragraph>
            </div>
            <div className="box-wrap">
              <div className="box1">
                <div className="box1-inner">
                  <div className="value-img">
                    <img src={Value2} alt="value" />
                  </div>
                  <div className="box1-back">
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis nulla eu sem sollicitudin, non vulputate nisl sollicitudin. Proin nec magna blandit justo pulvinar cursus vel vel dui. Duis vitae tempus lectus.
                    </Paragraph>
                  </div>
                </div>
              </div>
              <Paragraph>value</Paragraph>
            </div>
            <div className="box-wrap">
              <div className="box1">
                <div className="box1-inner">
                  <div className="value-img">
                    <img src={Value3} alt="value" />
                  </div>
                  <div className="box1-back">
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis nulla eu sem sollicitudin, non vulputate nisl sollicitudin. Proin nec magna blandit justo pulvinar cursus vel vel dui. Duis vitae tempus lectus.
                    </Paragraph>
                  </div>
                </div>
              </div>
              <Paragraph>Lorem</Paragraph>
            </div>
            <div className="box-wrap">
              <div className="box1">
                <div className="box1-inner">
                  <div className="value-img">
                    <img src={Value4} alt="value" />
                  </div>
                  <div className="box1-back">
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis nulla eu sem sollicitudin, non vulputate nisl sollicitudin. Proin nec magna blandit justo pulvinar cursus vel vel dui. Duis vitae tempus lectus.
                    </Paragraph>
                  </div>
                </div>
              </div>
              <Paragraph>value</Paragraph>
            </div>
          </div>
        </div>
        </div>

    
       

    
     
    </>
  );
};

export default Homepage;
