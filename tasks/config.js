
const source = 'dev/';
const dest = 'dist/';
const nodemodules = 'node_modules/'
const config = {
  dev: {
    path: source,
    html: `${source}html/`,
    sass: `${source}sass/`,
    js: `${source}js/`,
    img: `${source}img/`,
  },
  dist: { 
    path: dest,
    html: dest,
    css: `${dest}assets/css/`,
    js: `${dest}assets/js/`,
    img: `${dest}assets/img/`,    
  },
  nodemodules: {
    jquery: `${nodemodules}jquery/dist/jquery.min.js`,
    bootstrap: {
      js: `${nodemodules}bootstrap/dist/js/boostrap.min.js`,
      scss: `${nodemodules}bootstrap/scss`
    }
  }
};

module.exports = config;

