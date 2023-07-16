/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bhishek's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Bhishek Kumar Portfolio",
    type: "website",
    url: "http://bhishekkumar.com/",
  },
};

//Home Page
const greeting = {
  title: "Bhishek Kumar",
  logo_name: "BhishekKumar",
  nickname: "overthinker ^_^",
  subTitle:
    "An ambitious Full Stack Web Developer, love doing Workout & living healthy, have a competitive spirit for coding related to all DS & Algorithms applying logics, AI, and data structures in solving real - world problems.",
  resumeLink:
    "https://drive.google.com/file/d/13b-AfWeccv9bE5RhsavXoTvUWntx8POU/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Bhishek2143",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/Bhishek2143",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bhishek-kumar-958b14208/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@bbjgaming5111",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:bhishek21403@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/bhis21403",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bhishek._.7/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Dart",
        "⚡ Creating application backend in Node, Express & Vue",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Back-End Connecting Database & Management",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Video Editing Rendering & VFX",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive Beat-Sync Montage clips, with Glow, saber, Motion-Blur Effects",
        "⚡ Customizing Slo-Mo, Cinematic Shots, Green Screen-Key, Key-Cue and Red Giant Universe",
        "⚡ Rendering at High Bitrate and Smooth Frame Rates, publishing content on YT Channel",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Premiere Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "simple-icons:adobeaftereffects",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Phototshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/bhishekkumar_co20b3_32/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/bhis21403",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "GFG",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/bhishekkumarco20b332",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML CSS & Javascript for Web Devs",
      subtitle: "- Yaakov Chaikin",
      logo_path: "HTML5.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XMHAAS67VP5C",
      alt_name: "Johns Hopkins University",
      color_code: "#8C151599",
    },
    {
      title: "Desh Ke Mentor",
      subtitle: "- Govt. of India",
      logo_path: "DKM.png",
      certificate_link:
        "https://drive.google.com/file/d/1fYWPPODsH3FBF5oLyHI7f0EX-qmUZ7Zh/view?usp=sharing",
      alt_name: "Mentoring Post-Matric Students",
      color_code: "#00000099",
    },
    {
      title: "Financial Markets",
      subtitle: "- Robert J. Shiller",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DYPGXF4YXNJP",
      alt_name: "Yale University",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  sections: [
    {
      title: "Qualifications",
      work: true,
      experiences: [
        {
          title: "B.Tech. in Computer Engineering",
          company: "Delhi Technological University",
          company_url: "http://www.dtu.ac.in/",
          logo_path: "dtu.png",
          duration: "Dec 2020 - Present",
          location: "8.1 CGPA (till 4th-Sem)",
          description:
            "I have studied basic software engineering subjects like DS, Algorithms, DBMS, Operating Systems, System Design, CA, AI, courses on Financial Marketing, Machine Learning, Python Crash Course, & Full Stack Development in HTML, CSS and Javascript. I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
          color: "#0879bf",
        },
        {
          title: "Class XII, PCM - Computer Science",
          company: "Prabhu Dayal Public School",
          company_url: "http://www.pdpschool.com/",
          logo_path: "pdps.png",
          duration: "April 2018 - August 2020",
          location: "83.6% (aggregate 5 subjects)",
          description:
            "I had very good impression with the Computer Science Teachers, and confident enough for the coding and assignments, projects done in the meantime, also had a competitive spirit to achieve good grades for High-School Degree",
          color: "#9b1578",
        },
        {
          title: "Class X, Core Subjects with CS",
          company: "Prabhu Dayal Public School",
          company_url: "http://www.pdpschool.com/",
          logo_path: "pdps.png",
          duration: "May 2014 - March 2018",
          location: "90.6% (aggregate 6 subjects)",
          description:
            "Precision in all the relevant or irrelevant situations, involvemnet in theatre & drama, art & craft, build a skill of Computer & Tech, and passed with flying colors, once in my class was awarded with Full Marks and whole class got deducted by the grace I got",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure. Institutions to go online through different platforms using Websites, Apps, and gaining experience on handling heavy traffic under stress conditions Sites.",
  avatar_image_path: "projects_image.svg",
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Bhishek.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack Web Development, App Development, Databases, Recovery Systems, AI, React, Android, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Arun Niwas, 127, A/A - Block, Shalimar Bagh, New Delhi - 110088",
    locality: "Kela Godown",
    country: "IN",
    region: "New Delhi",
    postalCode: "110088",
    streetAddress: "Arun Niwas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/em8j8rhwXQmjzTDr5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
