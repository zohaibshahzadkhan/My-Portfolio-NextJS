export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/client.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently diving into Next.js",
    description: "I am expanding my frontend development skills and enhance my ability to build dynamic, high-performance web applications",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SocialVibe",
    des: "A dynamic social media app built with React, offering features for user interaction and content sharing.",
    img: "/socialvibe.png",
    iconLists: ["/re.svg", "/tail.svg", "/py.svg", "/django.svg", "/vite.svg","psql.svg", "cloudinary.svg"],
    link: "https://github.com/zohaibshahzadkhan/SocialVibe-React-App",
  },
  {
    id: 2,
    title: "ParrotHub",
    des: "A versatile platform for community engagement and discussion, designed with modern web technologies.",
    img: "/parrothub.png",
    iconLists: ["/py.svg", "/django.svg", "psql.svg", "bootstrap.svg", "cloudinary.svg"],
    link: "https://github.com/zohaibshahzadkhan/ParrotHub",
  },
  {
    id: 3,
    title: "The Music Academy",
    des: "This app is built with Next.js and Aeternity UI, offers a comprehensive platform for a music academy. It features a courses section, detailed instructor info, a contact page, and student testimonials. Designed for a seamless user experience, it helps aspiring musicians explore, learn, and connect effortlessly.",
    img: "/musicAcademy.png",
    iconLists: ["/re.svg", "tail.svg", "next.svg"],
    link: "https://github.com/zohaibshahzadkhan/The-Music-Academy-NextJS-",
  },
  {
    id: 4,
    title: "Nike Landing Page",
    des: "Landing page for Nike built with Tailwind CSS and NextJS.",
    img: "/nike.png",
    iconLists: ["/re.svg", "tail.svg", "next.svg"],
    link: "https://github.com/zohaibshahzadkhan/Nike-Landing-Page-TailwindCss",
  }
];

export const testimonials = [
  {
    quote:
      "I rarely come across real talents who stand out like Zohaib Shahzad. I had the pleasure of working with him for 3 years, collaborating on several projects. Zohaib's ability to handle multiple projects was unlike any I’ve seen before and made a dramatic increase in productivity. As a team member or a leader, Zohaib earns my highest recommendation.",
    name: "Engr. M. Mursaleen Javed",
    title: "MS SQL Administrator at Alpha Data",
  },
  {
    quote:
      "Zohaib Shahzad is a highly motivated and talented software engineer with a focus on UX and ReactJS. I've been working with him on a project for the past 2 years and it's been nothing but bliss to have him on the team. He has a good comprehension of complex requirements and great analytical skills. Furthermore, he works very independently. With his support, we've been able to create and launch an amazing product. He is also a very fun and likeable person. I can highly recommend him!",
    name: "Michael Thomas",
    title: "Visionary Architect",
  },
  {
    quote:
      "Zohaib is an exceptional frontend developer with outstanding skills in React, Vue.js, and JavaScript. Over 2 years, he demonstrated a deep understanding of frontend principles and played a key role in delivering high-quality projects. His eagerness to explore new technologies, especially in cloud computing, shows his commitment to growth. Zohaib is a valuable team player with a positive attitude and strong work ethic. I highly recommend him for any frontend or full stack development position.",
    name: "Adrian Hagerty",
    title: "Frontend Developer Specialist",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer II - Edge Case Research",
    desc: "Developed user interfaces with Vue.js, Vuetify, and React, enhancing user experience. Worked with design and backend teams to translate concepts into functional solutions using HTML, CSS, and JavaScript (ES6). Optimized performance and resolved technical challenges to boost user satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Professional Development",
  //   desc: "During my career break, I earned a diploma and obtained a license in Advanced Frontend Development from Code Institute. Expanded expertise in AWS Cloud services, including IAM, RDS, CloudWatch, S3, VPC, and EC2.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  {
    id: 3,
    title: "Software Engineer - TerraLoupe",
    desc: "Led full-cycle frontend projects with React, covering design, implementation, and testing. Worked closely with design teams to integrate UI/UX elements, boosting user engagement and satisfaction. Ensured component reliability through thorough testing.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/zohaibshahzadkhan"
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/zohaibshahzad00/"
  },
];