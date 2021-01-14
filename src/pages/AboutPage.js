import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hi! I am a recent graduate from the University of Washington and a
          passionate for technology. I am a self-taught frontend developer with
          experience in React JS, Vue JS, Express JS, Node JS, PostgreSQL, MySQL
        </p>
        <p>
          {" "}
          I am looking to work as a frontend developer for a company (while I
          work on some of my exciting projects on the side)
        </p>
        <p>
          I love to learn about new things and expand my horizons, currently
          expanding my knowledge in creating scalable applications using React
          JS was a strong backend.
        </p>
        <p>
          My latest project,{" "}
          <a
            href="https://github.com/Nirmalya24/covid-numbers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Covid-Numbers
          </a>
          , is now live. I made it while I was away from my family during the
          pandemic to learn more about the pandemic data as well as create an
          application using React.
        </p>
        <p>
          If you come across my portfolio and would like to hire me, please send
          me an email using my contact page, I would love to talk about new
          opportunities!
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
