import {
    mobile,
    monitor,
    web,
    host,
    aaPanel,
    reactjs,
    flutter,
    php,
    nginx,
    linux,
    firebase,
    git,
    vedasLogo,
    flexihireLogo,
    pizzbizzLogo,
    dopplerLogo,
    flexihire,
    pizzbizz,
    astralArch,
    instagram,
    github, linkedin,
} from "../assets/index";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "IT helper",
        icon: monitor,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Mobile App Developer",
        icon: mobile,
    },
    {
        title: "Web Hosting",
        icon: host,
    },
];

const technologies = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "aaPanel",
        icon: aaPanel,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "NGINX",
        icon: nginx,
    },
];

const experiences = [
    {
        title: "React Developer",
        company_name: "FlexiHire",
        icon: flexihireLogo,
        iconBg: "#f0f0f0",
        date: "2022 - 2023",
        points: [
            "Led the development of the FlexiHire website, ensuring efficient timeline management and team collaboration.",
            "Developed front-end and back-end functionalities using React and Firebase for a responsive and seamless user experience.",
            "Designed user interfaces focused on usability and visual appeal, iterating based on feedback to meet user needs.",
        ],
    },
    {
        title: "IT Intern",
        company_name: "Vedas College",
        icon: vedasLogo,
        iconBg: "#f0f0f0",
        date: "2022 - 2024",
        points: [
            "Assisted in the installation and configuration of software applications, ensuring compatibility and functionality.",
            "Supported faculty and students with technical issues related to educational software and online platforms.",
            "Gained hands-on experience troubleshooting technical problems and refining problem-solving skills in IT environments.",
        ],
    },
    {
        title: "Flutter Developer",
        company_name: "PizzBizz",
        icon: pizzbizzLogo,
        iconBg: "#f0f0f0",
        date: "2024",
        points: [
            "Developed the PizzBizz mobile app using Flutter, focusing on a dynamic UI and real-time data handling with Firebase.",
            "Implemented features such as pizza customization, social sharing, and in-app payments using eSewa integration.",
            "Led the app's design and development, combining pizza customization with a unique social engagement platform.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Doppler Trade PVT LTD",
        icon: dopplerLogo,
        iconBg: "#f0f0f0",
        date: "2025 - Present",
        points: [
            "Worked on an Internet Service Provider (ISP) platform that delivers internet access via hotspot vouchers.",
            "Contributed to an Internet Service Provider (ISP) platform using FreeRADIUS to manage internet access through hotspot vouchers.",
            "Deployed and managed web applications and services.",
            "Ensured smooth UI alignment with backend business logic.",
        ],
    },
];


const projects = [
    {
        name: "FlexiHire Web App",
        description:
            "A web platform connecting businesses with skilled professionals for temporary and project-based work. Built with React, TailwindCSS, and Firebase.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "WebApp",
                color: "blue-text-gradient",
            },
        ],
        image: flexihire,
        source_code_link: "https://flexihire.netlify.app/",
    },
    {
        name: "PizzBizz App",
        description:
            "A fun and interactive mobile app allowing users to customize pizzas, share, and earn rewards. Built using Flutter, Firebase, and integrated with eSewa payments.",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            },
            {
                name: "eSewa Integration",
                color: "green-text-gradient",
            },
            {
                name: "MobileApp",
                color: "pink-text-gradient",
            },
            {
                name: "UI/UX",
                color: "blue-text-gradient",
            },
        ],
        image: pizzbizz,
        source_code_link: "https://drive.google.com/file/d/1cdOs_ACyHsrTr3u_F72RWfIehW6p46PU/view?usp=drive_link",
    },
    {
        name: "AstralArch Dotfiles",
        description:
            "Dotfiles for Arch Linux featuring Hyprland, AGS widgets, and a dynamic, wallpaper-adaptive color scheme, crafted for functionality and seamless usability.",
        tags: [
            {
                name: "Arch Linux",
                color: "blue-text-gradient",
            },
            {
                name: "Hyprland",
                color: "green-text-gradient",
            },
            {
                name: "AGSWidgets",
                color: "pink-text-gradient",
            },
            {
                name: "Shell Scripts",
                color: "orange-text-gradient",
            },
            {
                name: "Dotfiles",
                color: "blue-text-gradient",
            },
        ],
        image: astralArch,
        source_code_link: "https://github.com/AxelXrest/astralArch",
    },
];

const socialIcons = [
    {
        name: "GitHub",
        icon: github,
        socialLink: 'https://github.com/AxelXrest'
    },
    {
        name: "Instagram",
        icon: instagram,
        socialLink: 'https://www.instagram.com/ajay.nemkul/'
    },
    {
        name: "LinkedIn",
        icon: linkedin,
        socialLink: 'https://www.linkedin.com/in/ajay-nemkul-shrestha/'
    },
]

export { services, technologies, experiences, projects, socialIcons };