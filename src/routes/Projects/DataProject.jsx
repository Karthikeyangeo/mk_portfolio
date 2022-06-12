import bulkEmail from '../../images/bulkEmail.jpg';
import moneyImg from '../../images/moneyManager.jpg';
import todolist from '../../images/todolist.JPG'


const projectData =[
    {
        title : 'Bulk Email Tool',
        imgSrc : bulkEmail,
        projectDesc:`Fullstack project created using React ,NodeJS , MongoDB , nodemailer , Express.\nThis project enables the user to send bulk email from single window with user authorization and authentication`,
        deployLink:'https://mk-bulk-email.netlify.app/',
        frontEndLink:'https://github.com/Karthikeyangeo/bulkEmail-frontend',
        backEndLink:'https://github.com/Karthikeyangeo/bulkEmail-backend'

    },
    {
        title : 'Money Manager',
        imgSrc : moneyImg,
        projectDesc:`Fullstack project created using React , Node JS , MongoDB , Express.\n\n
        This project enables the user to track record of their money
        transactions ( income and expense)`,
        deployLink:'https://mk-money-manager.netlify.app/',
        frontEndLink:'https://github.com/Karthikeyangeo/money-manager-frontend',
        backEndLink:'https://github.com/Karthikeyangeo/money-manager-backend'

    },
    {
        title : 'To Do List',
        imgSrc : todolist,
        projectDesc:`Project created using React, context.
        This project which enables the user to add the to do list and change
        it's completed status`,
        deployLink:'https://mk-to-do-list.netlify.app/',
        frontEndLink:'https://github.com/Karthikeyangeo/todolist-react',
        backEndLink:''

    }
];

export {projectData};