// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ritesh",
  middleName: "",
  lastName: "Patidar",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/PatidarRitesh",
    },
    // {
    //   image: "fa-facebook",
    //   url: "",
    // },
    
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ritesh-patidarr",

   },
  {
    image: "fa-instagram",
    url: "https://www.instagram.com/ritesh__patidar/?next=%2F",
  },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.linkedin.com/in/ritesh-patidarr",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Ritesh_image.jpeg"),
  imageSize: 350,
  message:"I'm Ritesh Patidar, Backend Developer at NeuroReef Labs, specializing in Natural Language Processing and dedicated to building impactful tech solutions,",
  resume: "https://drive.google.com/file/d/1aJj953IxqIiYUvFs_F9hqgVbO3hm1mWC/view?usp=drive_link",
  // resume: require("../editable-stuff/Ritesh_resume.pdf"),
};

// const about = {
//   show: true,
//   heading: "About Me",
//   imageLink: require("../editable-stuff/Ritesh_image.jpeg"),
//   imageSize: 350,
//   message: `
//     My name is Ritesh Patidar. Currently pursuing my M.Tech in Computer Science at IIT Gandhinagar, I'm passionate about NLP and actively engaged in a project under <a href="https://mayank4490.github.io/">Prof. Mayank Singh</a>. My interests span software development and data science, and I'm excited about contributing to innovative tech solutions. Let's connect and explore the possibilities together!
//   `,
//   resume: "https://drive.google.com/file/d/1aJj953IxqIiYUvFs_F9hqgVbO3hm1mWC/view?usp=drive_link",
// };



// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "PatidarRitesh", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Ritesh_image.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Ritesh_image.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++", value: 85 },
    { name: "Python", value: 90 },
    { name: "Java", value: 50 },
    { name: "SQL", value: 75 },
    { name: "JavaScript", value: 40 },
    { name: "React", value: 40 },
    { name: "HTML/CSS", value: 60 },
    { name: "Flask", value: 70},
    {name:"NLP", value: 70},
    {name:"LangChain", value: 50},
    { name: "Data Structures", value: 85 },
    { name: "Docker", value: 70 },
    { name: "Kubernetes", value: 60 },
    { name: "Ansible", value: 20},
    { name: "Terraform", value: 20},
    { name: "Jenkins", value: 20},
    { name: "CI/CD", value: 30},
    { name: "Git", value: 70 },
    { name: "Linux", value: 60},
    { name: "AWS", value: 60},
    
  ],
  softSkills: [
    { name: "Leadership", value: 85 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm looking for full-time Software Engineering or Data Science opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "riteshpatidar2499@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Backend Developer',
      companylogo: require('../assets/img/NeuroReef.png'),
      date: 'Oct 2023 – Present',
    },
    {
      role: 'NLP Researcher',// Here Add Company Name
      companylogo: require('../assets/img/lingo.png'),
      date: 'Dec 2022 – May 2024',
    },
    
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
