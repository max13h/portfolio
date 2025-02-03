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