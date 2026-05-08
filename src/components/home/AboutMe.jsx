import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl}
              alt="profilepicture"
              width={280}
              height={400}
            />
          )}
        </div>
  
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}{" "}
  {link && (
     <span>
     Sr. Associate, Technology (Back End Development) at {" "}
     <a
       href="https://brahmasystems.ai/"
       target="_blank"
       rel="noreferrer noopener"
       aria-label="Brahma AI Systems Website"
     >
     Brahma AI Systems
     </a>
     {" "}, where I lead backend development across multiple client and in-house projects — building scalable microservices and distributed systems with FastAPI, PostgreSQL, Kafka, and Temporal. My current work spans an LLM-powered media buying platform, a Kafka-driven menu management system (DPOD), and a multi-channel e-commerce integration platform. Previously, I was a Backend Engineer at <a href="https://neuroreef.com/" target="_blank" rel="noreferrer noopener" aria-label="NeuroReef Labs Website">NeuroReef Labs</a>, working on LangChain-based AI applications and speech-to-text pipelines on AWS. I hold an M.Tech in Computer Science from IIT Gandhinagar, and I'm passionate about blending software engineering with applied AI — LLMs, RAG, and agentic systems — to ship impactful products. If you'd like to collaborate or chat about backend systems and AI, let's connect!
   </span>
  )}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
