export type Technology = {
  name: string;
  icon: string;
  link: string;
  title: string;
  quote: string;
};

export type DataTechnologies = {
  backend: Technology[];
  frontend: Technology[];
};

export const dataTechnologies = (): DataTechnologies => {
  return {
    backend: [
      {
        name: 'Ruby',
        icon: 'vscode-icons:file-type-ruby',
        link: 'https://www.ruby-lang.org/',
        title: 'Programming language',
        quote: 'A really pleasant language to use for me. I learned the job with it at my bootcamp'
      },
      {
        name: 'Ruby on Rails',
        icon: 'simple-icons:rubyonrails',
        link: 'https://rubyonrails.org/',
        title: 'Web application framework',
        quote: 'My first web framework. Make me realise how fun and interesting build websites could be'
      },
      {
        name: 'PostgreSQL',
        icon: 'logos:postgresql',
        link: 'https://www.postgresql.org/',
        title: 'Object-relational database system',
        quote: 'My solution for data storage. A highly complete and comprehensive tool that I haven\'t fully explored'
      },
      {
        name: 'Nuxt',
        icon: 'logos:nuxt-icon',
        link: 'https://nuxt.com',
        title: 'Web application framework',
        quote: 'The website you\'re currently on was built with this framework. I love how easy and fast I fully learned this tool'
      },
      {
        name: 'Node JS',
        icon: 'logos:nodejs-icon',
        link: 'https://nodejs.org/en',
        title: 'JavaScript runtime environment',
        quote: 'I became acquainted with Node after learning JavaScript and experimenting with Nuxt server-side rendering and API building.'
      }
      // Add the remaining technologies following the same pattern
    ],
    frontend: [
      {
        name: 'Vue',
        icon: 'logos:vue',
        link: 'https://www.vuejs.org/',
        title: 'JavaScript Framework',
        quote: 'My first JavaScript framework, which helped me take a big step in my journey as a junior developer. And beyond that, a really nice ecosystem'
      },
      {
        name: 'React',
        icon: 'devicon:react',
        link: 'https://react.dev',
        title: 'JavaScript Framework',
        quote: "React's component-based architecture and vast ecosystem have greatly enhanced my development skills. I enjoy building interactive UIs with it, like the Citiz website I created as part of my portfolio"
      },
      {
        name: 'TypeScript',
        icon: 'devicon:typescript',
        link: 'https://www.typescriptlang.org',
        title: 'Programming language',
        quote: "TypeScript has been a game-changer in my development journey. Its strong typing and better tooling have made my code more robust and maintainable. While it's a bit more structured than JavaScript, I really enjoy the clarity and precision it brings to my projects"
      },
      {
        name: 'CSS',
        icon: 'devicon:css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        title: 'Stylesheet language',
        quote: 'I found myself scrolling through the CSS documentation just out of curiosity. I love how powerful and far-reaching CSS can be on HTML'
      },
      {
        name: 'Tailwind',
        icon: 'logos:tailwindcss-icon',
        link: 'https://tailwindcss.com',
        title: 'CSS framework',
        quote: 'I started with Bootstrap in my Bootcamp. Then I discovered Tailwind, which aligns much more with what I needed from a CSS framework'
      }
    ]
  }
}

interface Project {
  name: string;
  date: string;
  mainImage: string;
  description: string;
  stack: {
      name: string;
      isIcon: boolean;
      icon: string;
      imageLink: string;
      link: string;
      class: string;
  }[];
  link: string;
  textLink: string;
  images: string[];
}[]

export const dataProjects = (): Project[] => [
  {
    name: 'Citiz website',
    date: 'January 2025',
    description: "The Citiz website redesign was a personal project aimed at enhancing the user experience for a car-sharing company in Strasbourg. I focused on creating a modern, user-friendly design that highlights key features and streamlines the customer journey. To stay efficient, I set strict time constraints: 1 hour of research analyzing Citiz's website and competitors, 3 hours of UI/UX design in Figma, and 12 hours of development using React. This project showcased my initiative in identifying and solving design challenges while strengthening my skills in UX, UI, and frontend development.",
    mainImage: "citiz-website/main.gif",
    stack: [
      {
        name: 'React',
        isIcon: true,
        icon: 'devicon:react',
        imageLink: '',
        link: 'https://react.dev',
        class: ''
      },
      {
        name: 'Typescript',
        isIcon: true,
        icon: 'devicon:typescript',
        imageLink: '',
        link: 'https://www.typescriptlang.org/',
        class: ''
      },
      {
        name: 'Vite',
        isIcon: true,
        icon: 'vscode-icons:file-type-vite',
        imageLink: '',
        link: 'https://vitejs.dev',
        class: ''
      },
      {
        name: 'Github action',
        isIcon: true,
        icon: 'devicon:github',
        imageLink: '',
        link: 'https://github.com/features/actions',
        class: 'invert'
      },
    ],
    textLink: "Open website",
    images: [
      "citiz-website/main.gif",
      "citiz-website/website.png",
      "citiz-website/before.png"
    ],
    link: "https://max13h.github.io/citiz-website"
  },
  {
      name: 'Early stage project',
      date: 'November 2023 - now',
      mainImage: 'secretproject/logo_secretproject.png',
      description: "Due to its early stage and the absence of a legally registered name, I am hesitant to share extensive information at this time. The project aspires to evolve into a Software as a Service (SaaS) platform. \nI began working on it in November 2023 and have recently completed the initial steps of my Minimum Viable Product (MVP). This project helped me discover the less glamorous aspects of the job, such as operational components and project architecture. \nWhile I acknowledge there are certain issues and imperfections, I am currently focused on building, learning, and presenting the project to potential future collaborators.",
      stack: [
        {
          name: 'Nuxt',
          isIcon: true,
          icon: 'logos:nuxt-icon',
          imageLink: '',
          link: 'https://nuxt.com/',
          class: ''
        },
        {
          name: 'Typescript',
          isIcon: true,
          icon: 'devicon:typescript',
          imageLink: '',
          link: 'https://www.typescriptlang.org/',
          class: ''
        },
        {
          name: 'Typescript',
          isIcon: true,
          icon: 'logos:tailwindcss-icon',
          imageLink: '',
          link: 'https://tailwindcss.com/',
          class: ''
        },
        {
          name: 'Supabase',
          isIcon: true,
          icon: 'logos:supabase-icon',
          imageLink: '',
          link: 'https://supabase.com/',
          class: ''
        },
        {
          name: 'Vite',
          isIcon: true,
          icon: 'vscode-icons:file-type-vite',
          imageLink: '',
          link: 'https://vitejs.dev',
          class: ''
        },
        {
          name: 'Vitest',
          isIcon: true,
          icon: 'devicon:vitest',
          imageLink: '',
          link: 'https://vitest.dev',
          class: ''
        }
      ],
      link: 'https://github.com/max13h/',
      textLink: 'My github (not the project)',
      images: [
        'secretproject/logo_secretproject.png',
        'secretproject/sign_in_screen.png',
        'secretproject/database_schema.png',
      ],
    },
    {
      name: 'The Favorite',
      date: 'September 2023 - October 2023',
      mainImage: 'the_favorite/crown.svg',
      description: "The Favorite offers a humorous take on the burden of parenthood. Parents work as a real team, while having fun competing against each other. \nIt was a great first project to work on. I took the lead of our team of three over a one-month period, dedicating a significant amount of time to its success. We brought some excellent ideas and are really proud of the accomplished work. \nParticipating in this project during my bootcamp provided the opportunity to work in a full team project early in my career, contributing to a better understanding of the collaborative approach required for development projects.",
      stack: [
        {
          name: 'Ruby',
          isIcon: true,
          icon: 'vscode-icons:file-type-ruby',
          imageLink: '',
          link: 'https://www.ruby-lang.org/',
          class: ''
        },
        {
          isIcon: true,
          name: 'Ruby on Rails',
          icon: 'simple-icons:rubyonrails',
          link: 'https://rubyonrails.org/',
          imageLink: '',
          class: 'filter-red'
        },
        {
          isIcon: true,
          name: 'PostgreSQL',
          icon: 'logos:postgresql',
          link: 'https://www.postgresql.org/',
          imageLink: '',
          class: ''
        },
        {
          isIcon: true,
          name: 'Bootstrap',
          icon: 'logos:bootstrap',
          link: 'https://getbootstrap.com',
          imageLink: '',
          class: ''
        },
        {
          isIcon: false,
          name: 'SwiperJS',
          icon: '',
          link: 'https://swiperjs.com',
          imageLink: 'https://swiperjs.com/images/swiper-logo.svg',
          class: 'w-6'
        },
        {
          isIcon: true,
          name: 'Heroku',
          icon: 'skill-icons:heroku',
          link: 'https://www.heroku.com/',
          imageLink: '',
          class: ''
        },
        {
          isIcon: true,
          name: 'Cloudinary',
          icon: 'logos:cloudinary-icon',
          link: 'https://cloudinary.com/',
          imageLink: '',
          class: ''
        },
      ],
      link: 'https://github.com/max13h/the_favorite',
      textLink: 'Check the repo',
      images: [
        "the_favorite/logo.png",
        "the_favorite/root.png",
        "the_favorite/home_tasks.png",
        "the_favorite/home_events.png",
        "the_favorite/competition.png",
        "the_favorite/common_pot.png",
        "the_favorite/kids.png",
      ],
    },
    {
      name: 'Minesweeper',
      date: 'June 2023',
      mainImage: 'minesweeper/flag.svg',
      description: "A simple exercise assigned by my bootcamp, built in plain Javascript, HTML, and CSS. I love the Minesweeper so I aimed to create the best version possible. Here is the result.",
      stack: [
        {
          name: 'Javascript',
          isIcon: true,
          icon: 'devicon:javascript',
          imageLink: '',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          class: ''
        },
        {
          name: 'CSS',
          isIcon: true,
          icon: 'devicon:css3',
          imageLink: '',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          class: ''
        },
      ],
      link: 'https://max13h.github.io/minesweeper',
      textLink: 'Play the game',
      images: [
        'minesweeper/minesweeper_menu.png',
        'minesweeper/minesweeper_win.png',
        'minesweeper/minesweeper_loose.png'
      ],
    },
    {
      name: 'Portfolio',
      date: 'February 2024',
      mainImage: 'portfolio/portfolio-max13h.png',
      description: "This is the website you are currently on. \nI aimed for my portfolio to be creative, incorporating animations, transitions, and showcasing my proficiency in CSS and Javascript on a global aspects. I learned a lot about multi browser support and responsive design. \nIt took me nearly two weeks to complete it entirely, and I am proud to say that I love the result.",
      stack: [
        {
          name: 'Nuxt',
          isIcon: true,
          icon: 'logos:nuxt-icon',
          imageLink: '',
          link: 'https://nuxt.com/',
          class: ''
        },
        {
          name: 'Typescript',
          isIcon: true,
          icon: 'logos:tailwindcss-icon',
          imageLink: '',
          link: 'https://tailwindcss.com/',
          class: ''
        },
        {
          name: 'GSAP',
          isIcon: false,
          icon: '',
          imageLink: 'https://avatars.githubusercontent.com/u/2386673?s=200&v=4',
          link: 'https://gsap.com/',
          class: 'w-8'
        },
        {
          name: 'CSS',
          isIcon: true,
          icon: 'devicon:css3',
          imageLink: '',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          class: ''
        },
      ],
      link: 'https://github.com/max13h/portfolio-2024',
      textLink: 'Check the repo',
      images: [
        'portfolio/portfolio-max13h.png',
        'https://raw.githubusercontent.com/max13h/portfolio-2024/main/public/portfolio/proficiency.png',
        'https://raw.githubusercontent.com/max13h/portfolio-2024/main/public/portfolio/projects.png'
      ],
    }
  ]