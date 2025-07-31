import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "James",
  initials: "EJ",
  url: "https://dillion.io",
  location: " Lagos, Nigeria",
  locationLink: "",
  description:
    "Software Engineer . I love building things and helping people. Very active on 𝕏.",
  summary:
    "I transformed my tech journey by shifting from a developer mindset to a software engineer's perspective. This change unlocked a world beyond just coding; I now tackle complex challenges across the entire software lifecycle—architecting solutions, optimizing scalability, ensuring robust security, and crafting resilient infrastructures. It's more than mastering frameworks; it's about engineering impactful, end-to-end solutions that elevate user experiences and drive innovation. This evolution has empowered me to think not just in terms of code, but in terms of crafting solutions that shape the future..",
  avatarUrl: "/mypicture.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Postgres",
    "Prisma",
    "TailwindCSS",
    "Shadcn UI",
    "Clerk",
    "Sentry",
    "AWS",
    "CI/CD",
    "Git/GitHub",
   
   
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alphaonenfts",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emmanuel-imeh-james-32398134b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/jamescode00",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "emmanuelimehjames@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Homebase Mortgage Bank",
      href: "https://Homebasebank.com",
      badges: [],
      location: "On site",
      title: "Software Engineer/Developer",
      logoUrl: "/homebase2logo.jpg",
      start: "March 2025",
      end: "  Present",
      description:
        ".",
    },
    {
      company: "Technocrime Security Limited",
      badges: [],
      href: "https://technocrime.com.ng",
      location: "Remote",
      title: "IT Support Engineer/ Frontend Developer",
      logoUrl: "/technocrime.png",
      start: "May 2023",
      end: "October 2023",
      description:
        ".",
    },
    {
      company: "Avango",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    }
  ],
  education: [
    {
      school: "Udemy Learn",
      href: "https://udemy.com",
      degree: "Full Stack Developer, Aws certified Devoloper Associate",
      logoUrl: "/udemy.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Federal University Oye Ekiti",
      href: "https://fuoye.edu.ng/",
      degree: "Bachelor's Degree of Computer Engineering (B.Eng)",
      logoUrl: "/fuoye.png",
      start: "2018",
      end: "2024",
    },
    
  ],
  projects: [
    {
      title: "Converso- LMS Platform",
      href: "https://chatcollect.com",
      dates: "May 2025 - Present",
      active: true,
      description:
        "This is an exceptional project, A LMS platform that allows you build campions on a particular topic and subject, then have a specific teaching sessions communicating with the tutor orally.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Clerk Auth & Billing",
        "Shadcn UI",
        "Sentry",
        "Vapi Ai"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alphaonenfts/LMS-SAAS-APPLICATION",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dhaapnpf7/video/upload/v1753886304/Converso_-_Made_with_Clipchamp_msm7pw.mp4",
    },
    {
      title: "Zentry -Awward Winning Project",
      href: "https://awardwinningwebsite.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "As the name says, I recreated this award winning website named Zentry. The project was built with Reactjs, Tailwind, GSAP for some cool animation and transsistionS 😉.",
      technologies: [
        "Raect.js",
        "JavaScript",
        "TailwindCSS",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://awardwinningwebsite.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alphaonenfts/awardwinningwebsite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dhaapnpf7/video/upload/v1753950080/Zentry_-_Made_with_Clipchamp_coe8ki.mp4",
    },
    {
      title: "Homebase Property Website",
      href: "https://property-frontend-pied.vercel.app/",
      dates: "March 2025 - June 2025",
      active: true,
      description:
        "A property listing application with distinct roles, Admin, Agent and normal User, Agents has the permission to list and admin has the permission to accept or reject the listing, Built with Reactjs, Nodejs, Express js, PostgreSQL, qith Prisma as the ORM, Not to forget Tailwind Css, i hosted the backend on Railway, so it has expired, but the frontend is still live.😉",
      technologies: [
        "React.js",
        "JavaScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Nodejs",
        "Express",
      ],
      links: [
        {
          type: "Website",
          href: "https://property-frontend-pied.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alphaonenfts/propertyFrontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dhaapnpf7/image/upload/v1753952388/Screenshot_2025-07-31_095854_jixpvq.webp",
      video: "",
    },
    {
      title: "BananArt 🍌 Airdrop Wallet Checker",
      href: "https://automatic.chat",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "One of my favorite web3 project I and Oloye, It was basically used to check if you were whitelisted for an Nft airdrop. For the love of web3, we built this with React and Python. NB: Endpoint not functional.",
      technologies: [
        "Rect.js",
        "JavaScript",
        "Python",
        "Flask",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "banana-art.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alphaonenfts/bananaArt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dhaapnpf7/image/upload/v1753884778/bananart_lqzfdq.webp",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "HRMS ",
      dates: "In development",
      location: "",
      description:
        "Human Resource Managemt system -HRMS- is a web-based platform that allows HR managers to manage their employees effectively.",
      image:
        "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Converso - LMS Platform",
      dates: "Currently in development",
      location: "",
      description:
        "Developed a LMS platform that allows you build campions on a particular topic and subject, then have a specific teaching sessions communicating with the tutor orally.",
      image:
        "https://res.cloudinary.com/dhaapnpf7/image/upload/v1753886304/Converso_-_Made_with_Clipchamp_msm7pw.mp4",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Property Listing Platform (Full Stack Project)",
      dates: "Past Project",
      location: "",
      description:
        "Built a fully functional real estate listing platform with role-based access control. Users can list properties, and admins can manage listings. The project features image uploads via Cloudinary and an admin panel for managing listings.",
      icon: "public",
      image:
        "/homebase2logo.jpg",
      links: [],
    },
    {
      title: "Self-Taught Learning + Real-World Mini Projects",
      dates: "self-development",
      location: "",
      description:
        "Completed several frontend and backend mini-projects, including Authentication systems (JWT, session based), CRUD apps with postgreSQL, REST APIs..",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
      ],
    },
  ],
} as const;
