# Star wars explorer

This is a single page web application built with React and TypeScript that uses the [SWAPI - Star Wars API](https://swapi.dev/) to show a list of characters from the Star Wars universe.

### How to run locally?

1. Clone the repo to a local branch.
2. Ensure you are running the latest stable version of [Node.js](https://nodejs.org/en/download/package-manager/current) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
3. Navigate to the project folder.
4. Run `yarn install` to install the depencies required to run the project.
5. Run `yarn dev` to run the web app in dev mode.

### Storybook

This project also has storybook installed as a dependency to showcase a small component library with components used across the app.

To open the storybook run `yarn storybook`

It opens a browser automatically on the port `6006` (Storybook default) but in case this port is unavailble Storybook will try to run on the next available port.

### Features

- When you first run the app you will see the characters list screen.
- On clicking on a character you can see more details about it.
- Also, on the top right on the header on the character details screen there is a heart button to add a character to your favourites list.

<img width="800" alt="image" src="https://github.com/user-attachments/assets/81e43243-aecd-4181-899f-d35194f63790">

<img width="800" alt="image" src="https://github.com/user-attachments/assets/7713f768-370f-4015-8265-1d4720acf217">

<img width="800" alt="image" src="https://github.com/user-attachments/assets/d159137c-a845-49b7-af3e-7d199c92975d">

<img width="800" alt="image" src="https://github.com/user-attachments/assets/99b1f3f8-e491-4fda-ad08-c62369b12760">

<img width="800" alt="image" src="https://github.com/user-attachments/assets/8bc037e1-8145-4fb6-b58c-b2b8d496d602">

### Notes

When you add a character to favourites, it is saved in your browser's localstorage. Please note that if you move to another browser or clear your browser data, your favourite characters will be lost.
