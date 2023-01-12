# ts-i18n craco example [(try live)](https://adamjones.me/ts-i18n-craco-example/)

This is an example project that shows how to use ts-i18n with create-react-app

Try out setting your browser language to German (de) and reloading the page.

The steps to recreate this are effectively:

1. Initialize a project with create-react-app
2. Use [craco](https://github.com/gsoft-inc/craco) so we can add the webpack plugin
3. Add the webpack plugin to `craco.config.js`
4. Create the input directory and add translation files, e.g. `en.json` (see `src/i18n` for an example)
5. For automatic browser usage, import the `browser.ts` file from the output directory (see `src/App.tsx` for an example), and call the translation methods
