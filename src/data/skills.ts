import backend from "../assets/images/backend1.png"
import general from "../assets/images/general.png"
import frontend from "../assets/images/react.png"

export type SkillType ={
    label:string;
    src:string;
    alt:string;
    skills:string[];
};

export const skillsData:SkillType[]=[
{
   label:"Backend",
   src: backend,
   alt: "Backend skills gear icon",
   skills:[
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "MangoDB",
    "JWT Authentication"

   ],
},
{
    label:"Frontend",
    src:frontend,
    alt :"Frontend skills atom icon",
    skills:[
        "TypeScript",
        "JavaScript",
        "Tailwindcss",
        "React",
        "Redux",
        "Axios",
        "HTML5",
        "CSS"
    ],
},
{
   label:"General Skills",
   src :general,
   alt :"General skills icon",
   skills:[
    "C/C++",
    "Python",
    "Java",
    "Git",
    "GitHub",
    "Canva",
    "Notion"
   ],
},
];

