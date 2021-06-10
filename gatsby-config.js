module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Names
    name: 'Chris Gillis',
    // Main Site Title
    title: `Chris Gillis | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-Stack Developer based in Boston, Massachusetts.`,
    // Optional: Twitter account handle
    author: `@Chris_S_Gillis`,
    // Optional: Github account URL
    github: `https://github.com/christophersgillis`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/christophersgillis/`,
    // Content of the About Me section
    about: `I'm a full stack software engineer constantly seeking to innovate and improve the products I work on. My background in game design makes me particularly cognizant of the importance of the User Experience to good software. I have a need to know how things work which is not only the reason I got into software but also makes me effective at debugging issues efficiently.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Alternate Method Editor',
        description:
          'Integrated Microsoft\'s web-based Monaco editor into Aras Innovator. Added ability to use the Monaco editor\'s diff mode to compare the current method code to an older version.',
        link: 'https://github.com/ArasLabs/Alternate-Method-Editor',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Aras Corp',
        description: 'Senior Software Engineer (Aras Labs), December 2020 - Present',
        link: 'https://github.com/ArasLabs',
      },
      {
        name: 'Aras Corp',
        description: 'Software Engineer (Aras Labs), Sep 2017 - December 2020',
        link: 'https://github.com/ArasLabs',
      },
      {
        name: 'Aras Corp',
        description: 'Software Solutions Engineer, June 2016 - August 2017',
        link: 'https://www.aras.com',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C#, .NET, JavaScript (ES6+), HTML5/CSS, Vue.JS, C++, C, Java',
      },
      {
        name: 'Databases',
        description: 'Microsoft SQL Server',
      },
      {
        name: 'Other',
        description:
          'Git/GitKraken, IIS, Visual Studio, Aras Innovator, Unity, Unreal Engine 4',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
