import todo from "../assets/projects/what3letters/weather.png"
import weather from "../assets/projects/what3letters/todo.png"
import portfolio from "../assets/projects/what3letters/portfolio.png"


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
		tech: ["React", "JavaScript", "MangoDB","Express", "taiwindcss",],
		github: "https://github.com/GhostRider9211/notes-app",
		link: "https://notes-app-fawn-eight.vercel.app/",
		type: "Web Application",
},

        {
	id: 2,
	title: "Portfolio",
	about: "Personal portfolio to showcase my Skills and Projects",
	description: "",
	thumbnail: portfolio, // replace with your actual import
	tech: ["React", "TypeScript", "Tailwind CSS", "SCSS"],
	github: "https://github.com/GhostRider9211/Portfolio/", // update if different
	link: "https://portfolio-phi-puce-16.vercel.app/", // update if different
	type: "Web Application"
        },



]
