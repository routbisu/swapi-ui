# Star wars explorer

This is a single page web application built with React and TypeScript that uses the [SWAPI - Star Wars API](https://swapi.dev/) to show a list of characters from the Star Wars universe.

### List of libraries / tooling used

- [Vite](https://vitejs.dev/guide/): Build tool
- [Vitest](https://vitest.dev/): Test framework
- [Emotion](https://emotion.sh/docs/introduction): CSS-in-js library
- [Phosphor Icons](https://phosphoricons.com/): Icons set
- [Lodash](https://lodash.com/): JavaScript utility library
- [Storybook](https://storybook.js.org/): Isolated building of React components

### How to run locally?

1. Clone the repo to a local branch.
2. Ensure you are running the latest stable version of [Node.js](https://nodejs.org/en/download/package-manager/current) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
3. Navigate to the project folder.
4. Run `yarn install` to install the depencies required to run the project.
5. Run `yarn dev` to run the web app in dev mode.

### Running tests

This project uses vitest test framework for unit tests. To run test run `yarn tests` 

### Storybook

This project also has storybook installed as a dependency to showcase a small component library with components used across the app.

To open the storybook run `yarn storybook`

It opens a browser automatically on the port `6006` (Storybook default) but in case this port is unavailble Storybook will try to run on the next available port.

### Features

- When you first run the app you will see the characters list screen.
- On clicking on a character you can see more details about it.
- Also, on the top right on the header on the character details screen there is a heart button to add a character to your favourites list.

### Screen recording: desktop

https://github.com/user-attachments/assets/8bc93219-b1bf-47f6-9f71-d3260fd131d2

### Screen recording: mobile

https://github.com/user-attachments/assets/465d96e3-340c-48ad-9476-1cfe7e9ee8a6

### Bonus task (editing a favourite character)

https://github.com/user-attachments/assets/0664f343-b231-4b41-a313-3765223c00a4

### Network error

<img width="800" alt="image" src="https://github.com/user-attachments/assets/d00de609-cabc-4dfb-bfb6-e0c8703f4fe1">

### Notes

When you add a character to favourites, it is saved in your browser's localstorage. Please note that if you move to another browser or clear your browser data, your favourite characters will be lost.
