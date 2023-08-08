// Type scale: https://utopia.fyi/type/calculator/?c=320,18,1.125,1200,18,1.3,5,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
module.exports = {
  content: [
    '**/*.html',
    '**/*.php',
    '**/*.js',
    '!wp-admin',
    '!wp-includes',
    '!node_modules',
    '!Prepros Export'
  ],
  theme: {
    extend: {
      colors: {},
      fontSize: {
        sm: 'clamp(0.87rem, calc(1.05rem + -0.24vw), 1.00rem)',
        base: 'clamp(1.13rem, calc(1.13rem + 0.00vw), 1.13rem)',
        md: 'clamp(1.27rem, calc(1.19rem + 0.36vw), 1.46rem)',
        lg: 'clamp(1.42rem, calc(1.25rem + 0.87vw), 1.90rem)',
        xl: 'clamp(1.60rem, calc(1.29rem + 1.58vw), 2.47rem)',
        '2xl': 'clamp(1.80rem, calc(1.29rem + 2.57vw), 3.21rem)',
        '3xl': 'clamp(2.03rem, calc(1.25rem + 3.91vw), 4.18rem)',
      },
    },
    screens: {
      // These breakpoints are set to match the generatepress breakpoints.
      // https://docs.generatepress.com/article/responsive-display/
      'md': '769px',
      'lg': '1025px',
    }
  },
};
