# BrainTrail — Educational Gaming Chatbot

A React + Vite two-player Snakes and Ladders game with a rule-based Question Master chatbot.

## Features
- 100-square board with snakes, ladders, question squares and player tokens.
- Two-player local turn-based play and dice rolls.
- Exact roll required to reach square 100.
- Questions from Math, Science, Computers, English and General Knowledge.
- Question-and-answer interaction inside the chatbot panel.
- Hint button, answer checking and explanations.
- Correct answers draw random reward cards; incorrect answers draw random penalty cards.
- Restart game, turn indicators and winner announcement.
- Responsive dark interface.

## Run the project
Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

To create a production build, run `npm run build`.

## Customize
Edit `src/data/gameData.js` to change questions, question squares, snakes, ladders, reward cards and penalty cards. Edit `src/logic/gameEngine.js` to change movement rules.

## Prototype scope
The chatbot is rule-based and uses a local question bank. It does not use an external AI service or database. Scores are not saved after refreshing the page.
