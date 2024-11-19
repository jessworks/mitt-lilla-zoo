**The Zoo
Använd react med typescript för att skapa en sida för ett zoo. En lista med djur finns tillgänglig på: https://animals.azurewebsites.net/api/animals
Du behöver ladda ner djuren till din applikation och spara dem i applikationen. Det kommer inte gå att ändra djuren via api:t. Förslagsvis lagrar du dem i localStorage ellersessionStorage. 

För G:
- Skapa en SPA (i react med typescript) som innehåller en startsida där djuren presenteras med namn och en kort beskrivning.
- Det skall gå att klicka på ett djur för att se mer information om detta djur via en egen route. 
- Från djurets egna sida skall du kunna markera om djuret nu är matat eller inte via en knapp som heter Mata djur. När du klickar på denna knapp skall djurets status ändras så att det framgår att det är matat. Och det skall inte längre gå att klicka på knappen. Du behöver också lägga in tiden som djuret matades.
- Ni behöver ha en god struktur i ert projekt vad gäller komponenter och filer.

VG:
- Samtliga krav för G
- Hantera trasiga bildlänkar på ett snyggt sätt
- När du går in på djurets sida nästa gång kontrollerar du om det har gått mer än tre timmar sedan senaste matningen. Om så är fallet nollställs matningen och det skall gå att mata djuret igen.
- Ni skall presentera en liten notis på startsidan, samt på djursidan, om att ett djur behöver matas om det är mer än fyra timmar sedan djuret matades.
- Ni behöver använda minst en tjänst i er applikation, både för hämtning av data och för gemensamma beräkningar.



[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Fj2E3Yxb)
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
