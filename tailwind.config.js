module.exports = {
  darkMode: 'class',
  content: [
    './**/*.html',
    './**/*.md',
     // ausgeschlossen – verhindert langes Scannen
     '!./node_modules/**/*',
     '!./.git/**/*',
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
