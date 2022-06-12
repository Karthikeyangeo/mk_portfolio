// Importing images and assigning to a variable

import git from '../../images/github.png';
import react from '../../images/react.png';
import html from '../../images/html.png';
import bootstrap from '../../images/bootstrap.png';
import css from '../../images/css3.png';
import express from '../../images/express.png';
import german from '../../images/german.png';
import ielts from '../../images/ielts.jpg';
import js from '../../images/javascript.png';
import material from '../../images/MATERIAL-UI.png';
import mongodb from '../../images/mongodb.png';
import mysql from '../../images/mysql.png';
import netlify from '../../images/netlify.png';
import nodejs from '../../images/nodejs.png';
import postman from '../../images/postman.png';
import heroku from '../../images/heroku.png'

// creating an array of objects of icon and title(Text) for skillset
const skillData=[
    { icon:html,text:'HTML' },
    { icon:css,text:'CSS' },
    { icon:js,text:'JS' },
    { icon:bootstrap,text:'Bootstrap' },
    { icon:material,text:'Material UI' },
    { icon:react,text:'React' },
    { icon:nodejs,text:'NodeJs' },
    { icon:mongodb,text:'Mongodb' },
    { icon:mysql,text:'MySQL' },
    { icon:git,text:'Github' },
    { icon:express,text:'Express' },
    { icon:heroku,text:'Heroku' },
    { icon:netlify,text:'Netlify' },
    { icon:postman,text:'Postman' }

];

// creating an array of objects of icon and title(Text) for language certifications
const languageData =[
    { icon:ielts,text:'IELTS',year:2015 },
    { icon:german,text:'B1 - Deutsch',year:2016 }
];

export {skillData,languageData};