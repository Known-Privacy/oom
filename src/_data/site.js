const isDev = process.env.ELEVENTY_ENV === "dev";
const baseUrl = isDev ? `http://localhost:8080/` : `https://www.opt-out.ai/`;

const site = {
  baseUrl,
}

module.exports = site;
