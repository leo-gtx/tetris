# Tetris

![gameplay](media/tetromino-sample.gif)

A tetris-style game created with [React](https://reactjs.org/), [Redux](https://react-redux.js.org/) and [TailwindCSS](https://tailwindcss.com/).

## What is it?

For those of you not familiar with Tetris, it's a game where you drop tetris shapes to create solid rows to score points. Blocks
fall faster as you increase the level. If there is no more room to drop blocks, then the game is over.

## Why build it?

Wanted to challenge myself to build a Tetris game using just DOM elements.
There are no SVGs or `<canvas>` graphics anywhere in the game.

All graphics are rendered as React functional components, and the game logic is handled by a Redux reducer.

## Where is it?

Online demo: [https://tetris.ndlpixel.com/tetris](https://tetris.ndlpixel.com/tetris/)

## How to get it?

Clone and run it locally.

```bash
git clone https://github.com/leo-gtx/tetris
cd tetris
yarn install
yarn start
```
## Credits
Forked from [https://github.com/reactgular/tetromino](https://github.com/reactgular/tetromino)