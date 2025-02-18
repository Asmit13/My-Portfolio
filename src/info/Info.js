import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Asmit",
    lastName: "Aditya Singh",
    initials: "a²s", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "A student at VIT Bhopal"
        },
        {
            emoji: "📧",
            text: "asmitadsingh13@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/asmit.singh.3576224/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/a.s.m.i.t_0_/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Asmit13",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/asmit13/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.youtube.com/@error_666",
            icon: "fa fa-youtube",
            label: 'youtube'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Asmit Aditya Singh. Currently I am studying CompSci at Vellore Institute of Technology, Bhopal. I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'Java', 'mongoDB', 'Docker'],
            exposedTo: ['nodejs', 'redux', 'react native', 'expressJS', 'Tailwind CSS']
        }
    ,
    hobbies: [
        {
            label: 'traveller',
            emoji: '🚗'
        },
        {
            label: 'cricket',
            emoji: '🏏'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Sorting Algorithm Visualizer",
            live: "https://sorting-visualizer-app-lemon.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Asmit13/Sorting-Visualizer-App", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Spend Smart",
            live: " https://spend-smart-delta.vercel.app/",
            source: "https://github.com/Asmit13/Spend-Smart",
            image: mock2
        },
        {
            title: "Journey Now",
            live: "https://journeynow.vercel.app/",
            source: "https://github.com/Asmit13/Journey-Now",
            image: mock3
        },
        {
            title: "Personal Portfolio",
            live: "https://asmit13.vercel.app/",
            source: "https://github.com/Asmit13/My-Portfolio",
            image: mock4
        },
        {
            title: "Password Generator",
            live: "https://password-generator-asmit.vercel.app/",
            source: "https://github.com/Asmit13/Password-Generator",
            image: mock5
        }
    ]
}