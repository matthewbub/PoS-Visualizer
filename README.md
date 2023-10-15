# PoS-Viz (Parts of Speech Visualizer)

The goal is to create a text editor that visually represents words' grammatical roles (parts of speech) using color coding.

The user enters text into a text area, and each word in the text area is wrapped in a span tag; then, the part of speech for each word is identified using NLP, and the span tag is given a class name based on the part of speech. The class name is then used to color the word.

This project uses JavaScript and is a practical introduction to NLP with [Compromise](https://compromise.cool/) and cutting-edge concepts introduced in early Next.js v13 and React.js v18 versions.

## Set up

This project was bootstrapped using the `npx create-next-app@latest` CLI command. To pull this up on a local machine, clone the repo and run `npm install` to install the project dependencies. Then, run `npm run dev` to start the development server.
