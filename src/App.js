// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   navBar,
//   mainBody,
//   about,
//   repos,
//   leadership,
//   skills,
//   getInTouch,
//   experiences
// } from "./editable-stuff/config.js";
// import MainBody from "./components/home/MainBody";
// import AboutMe from "./components/home/AboutMe";
// import Project from "./components/home/Project";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Skills from "./components/home/Skills";
// // import { Blog } from "./components/blog/Blog";
// // import BlogPost from "./components/blog/BlogPost";
// import GetInTouch from "./components/home/GetInTouch.jsx";
// import Leadership from "./components/home/Leadership.jsx";

// import Experience from "./components/home/Experience";

// const Home = React.forwardRef((props, ref) => {
//   return (
//     <>
//       <MainBody
//         gradient={mainBody.gradientColors}
//         title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
//         message={mainBody.message}
//         icons={mainBody.icons}
//         ref={ref}
//       />
//       {about.show && (
//         <AboutMe
//           heading={about.heading}
//           message={about.message}
//           link={about.imageLink}
//           imgSize={about.imageSize}
//           resume={about.resume}
//         />
//       )}
//       {
//         experiences.show && (
//           <Experience experiences={experiences}/>
//         )
//       }
//       {repos.show && (
//         <Project
//           heading={repos.heading}
//           username={repos.gitHubUsername}
//           length={repos.reposLength}
//           specfic={repos.specificRepos}
//         />
//       )}
//       {leadership.show && (
//         <Leadership
//           heading={leadership.heading}
//           message={leadership.message}
//           img={leadership.images}
//           imageSize={leadership.imageSize}
//         />
//       )}
//       {skills.show && (
//         <Skills
//           heading={skills.heading}
//           hardSkills={skills.hardSkills}
//           softSkills={skills.softSkills}
//         />
//       )}
      
//     </>
//   );
// });

// const App = () => {
//   const titleRef = React.useRef();

//   return (
    
//     <Router basename={process.env.PUBLIC_URL + "/"}>
//       {navBar.show && <Navbar ref={titleRef} />}
//       <Routes>
//         <Route path="/" exact element={<Home ref={titleRef} />} />
//       </Routes>
//       {/* {false && <Route path="/blog" exact component={Blog} />}
//       {false && <Route path="/blog/:id" component={BlogPost} />} */}
//       <Footer>
//         {getInTouch.show && (
//           <GetInTouch
//             heading={getInTouch.heading}
//             message={getInTouch.message}
//             email={getInTouch.email}
//           />
//         )}
//       </Footer>
//     </Router>
  
//   );
// };

// export default App;



// import React from "react";
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// import {
//   navBar,
//   mainBody,
//   about,
//   repos,
//   leadership,
//   skills,
//   getInTouch,
//   experiences,
// } from "./editable-stuff/config.js";
// import MainBody from "./components/home/MainBody";
// import AboutMe from "./components/home/AboutMe";
// import Project from "./components/home/Project";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Skills from "./components/home/Skills";
// import GetInTouch from "./components/home/GetInTouch.jsx";
// import Leadership from "./components/home/Leadership.jsx";
// import Experience from "./components/home/Experience";
// // import { Blog } from "./components/blog/Blog";
// // import BlogPost from "./components/blog/BlogPost";
// const Home = React.forwardRef((props, ref) => {
//   return (
//     <>
//       <MainBody
//         gradient={mainBody.gradientColors}
//         title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
//         message={mainBody.message}
//         icons={mainBody.icons}
//         ref={ref}
//       />
//       {about.show && (
//         <AboutMe
//           heading={about.heading}
//           message={about.message}
//           link={about.imageLink}
//           imgSize={about.imageSize}
//           resume={about.resume}
//         />
//       )}
//       {experiences.show && <Experience experiences={experiences} />}
//       {repos.show && (
//         <Project
//           heading={repos.heading}
//           username={repos.gitHubUsername}
//           length={repos.reposLength}
//           specfic={repos.specificRepos}
//         />
//       )}
//       {leadership.show && (
//         <Leadership
//           heading={leadership.heading}
//           message={leadership.message}
//           img={leadership.images}
//           imageSize={leadership.imageSize}
//         />
//       )}
//       {skills.show && (
//         <Skills
//           heading={skills.heading}
//           hardSkills={skills.hardSkills}
//           softSkills={skills.softSkills}
//         />
//       )}
//     </>
//   );
// });

// const App = () => {
//   const titleRef = React.useRef();

//   return (
//     <HashRouter>
//       {navBar.show && <Navbar ref={titleRef} />}
//       <Routes>
//         <Route path="/" element={<Home ref={titleRef} />} />
//         {/* Add other routes as needed */}
//         <Route
//           path="/*"
//           element={<Navigate to="/app/path1" />} // Redirect to default route if no URL matched
//         />
//       </Routes>
//       <Footer>
//         {getInTouch.show && (
//           <GetInTouch
//             heading={getInTouch.heading}
//             message={getInTouch.message}
//             email={getInTouch.email}
//           />
//         )}
//       </Footer>
//     </HashRouter>
//   );
// };

// export default App;

import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
} from "./editable-stuff/config.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {experiences.show && <Experience experiences={experiences} />}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <HashRouter >
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
        {/* Add other routes as needed */}
        {/* For example, if you have a Blog component: */}
        {/* <Route path="/" element={<Blog />} /> */}
        {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
        <Route
          path="/*"
          element={<Navigate to="/" />} // Redirect to the home route if no URL matched
        />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </HashRouter>
  );
};

export default App;
