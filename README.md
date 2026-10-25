# Wu-Tang x Boondocks Name Generator 🏙️

A Wu-Tang style name generator with a Boondocks twist. Answer 5 questions and the app gives you a character name.

## Description

This is a quiz app inspired by the Wu-Tang name generator, but with characters from The Boondocks. You answer five questions about your favorite things, like color, food and movie genre, and the app picks a name for you. I built it to practice using Node.js to make my own server, and to practice using `fetch` to get data from that server.

## DEMO

[Wu-Tang x Boondocks](assets/images/example.png)

## Features

- 5 multiple choice questions (color, meal, movie genre, food, and drink)
- Gives you a random Boondocks name based on your answers
- Shows a "Protect Your Neck" message if you skip a question
- Custom Node server that handles the pages and the API

## Tech Used

- HTML
- CSS
- JavaScript
- Node.js (built-in `http`, `fs` and `url` modules)
- Fetch API to send the answers to the server

## How It Works

1. When you click the button, `main.js` checks that all 5 questions have an answer.
2. It sends the answers to the server with `fetch` at `/api`.
3. The server counts which letter (a-e) was picked the most. That letter decides which group of names to use.
4. The server picks a random first and last name from that group and sends it back.
5. The name shows up on the page.

## How to Use

This app needs a Node server

1. Make sure you have node.js installed.
2. Start the server
3. Open your browser and go to `http://localhost:8000`
4. Answer all 5 questions and click **Your Name is...**
5. To stop the server, press `Ctrl + C` in the terminal.

## What I Learned

- How to make a basic server with Node.js
- How to send data from the page to the server using query parameters
- How to use `fetch` with `.then()`
- How to use `npm install` to add packages like figlet

VIEW APP HERE: https://name-generator-r9xa.onrender.com/

## Author

Maya Rose — [GitHub](https://github.com/Mayaerose) 🌹
