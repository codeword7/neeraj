const chalk = require('chalk')

const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

const bio = `${italic(
  `Open-source engineer and developer advocate. Developed various open-source dev-tools and software libraries used by developers worldwide. Leading developers and publishing technical content for over a 3 years. Self-confessed tech comedian cracking silly jokes in the JavaScript web and cloud communities.`
)}
`;

const social = `
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/codeword007`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/codeword7`)}
${purple(` Blog `)}    ${dim(`https://github.com/codeword7`)}
`;

const ad = `Check out my Udemy.com course.`;
const blogName = `codeword7.com`;
const blog = `Latest posts`;

module.exports = {
  bio,
  social,
  ad,
  blogName,
  blog,
}