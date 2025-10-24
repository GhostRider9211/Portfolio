import todo from "../assets/projects/what3letters/weather.png"
import weather from "../assets/projects/what3letters/todo.png"


export  type ProjectType ={
    id:number ;
    title:string;
    about:string;
    description:string;
    thumbnail:string;
    tech:string[];
    github:string;
    link:string;
    type:string;
};

export const projects:ProjectType[]=[
{
    id:0,
    title:"WeatherApp",
    about:"Weather web app designed to provide real-time weather info",
    description:"",
    thumbnail:weather,
    tech:["HTML", "CSS", "JavaScript", "OpenWeather API"],
    github:"https://github.com/GhostRider9211/weatherApp",
    link:"https://ghostrider9211.github.io/weatherApp/",
    type:"Web Application",

},
{
        id: 1,
		title: "Todo App",
		about: "A MERN stack Todo app",
		description: "",
		thumbnail: todo,
		tech: ["React", "Redux", "Local Storage", "SASS"],
		github: "https://github.com/GhostRider9211/notes-app",
		link: "https://notes-app-fawn-eight.vercel.app/",
		type: "Web Application",
},

]
