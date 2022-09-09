// gitprofile.config.js

const config = {
  github: {
    username: 'mdmohsin7', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'thatceokid',
    twitter: '0xthatceokid',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://thatceokid.co',
    phone: '',
    email: 'thatceokid@gmail.com',
  },
  skills: [
    'C/C++',
    'HTML/CSS',
    'Dart',
    'GO',
    'Java',
    'Python 2.7',
    'JavaScript',
    'SvelteJs',
    'AngularDart',
    'Flutter',
    'Cosmos SDK',
    'Docker',
    'Git',
    'Firebase',
    'Netlify',
    'Vercel',
  ],
  experiences: [
    {
      company: 'EazyPG (EazyApp Tech Pvt. Ltd.)',
      position: 'Flutter Developer - Internship',
      from: 'February 2022',
      to: 'August 2022',
    },
    {
      company: 'Pet Perfect',
      position: 'Mobile Application Developer - Internship',
      from: 'November 2021',
      to: 'December 2021',
    },
  ],
  education: [
    {
      institution: 'Nawab Shah Alam Khan College of Engg. and Tech.',
      degree: 'Bachelor of Engineering - Information Technology',
      from: 'August 2019',
      to: 'June 2023',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mdmohsin7', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
