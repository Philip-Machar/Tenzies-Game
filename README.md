# Tenzies Game

A React-based dice game where players roll and hold dice to match values, similar to the popular game Yahtzee.

![Tenzies Game Screenshot](/public/images/tenzies_screenshot.png)

[Live Demo](your-live-demo-url-here)

## Description

Tenzies is an engaging dice game built with React where players aim to get all ten dice showing the same number. Players can click dice to "freeze" them at their current value and continue rolling the remaining dice until all values match. The game features a clean, modern interface and celebrates the player's victory with a confetti animation.

## Features

- Ten dice with random values between 1 and 6
- Click-to-hold functionality for individual dice
- Visual feedback for held dice with green highlighting
- Roll button to generate new values for unheld dice
- Win detection system
- Victory celebration with confetti animation
- New game option after winning
- Responsive and modern design with Tailwind CSS

## Technologies Used

- React
- Tailwind CSS
- nanoid (for unique IDs)
- react-confetti (for win animation)
- JavaScript (ES6+)

## Project Structure

- `App.jsx`: Main game logic and state management
- `Die.jsx`: Individual die component with click handling
- `main.jsx`: Application entry point
- Components are styled using Tailwind CSS utility classes

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

## How it Works

The game is built around several key functionalities:

### Game State Management
- The `App` component maintains the state of all dice using the `useState` hook
- Each die is an object containing:
  - `id`: Unique identifier
  - `value`: Current face value (1-6)
  - `isHeld`: Boolean indicating if the die is frozen

### Core Functions
- `allNewDice()`: Generates an array of 10 random dice objects
- `handleRoll()`: Rolls all unfrozen dice
- `clickedDice()`: Toggles the held state of individual dice
- `handleRest()`: Resets the game state for a new game

### Win Detection
- Uses `useEffect` to monitor the dice state
- Checks if all dice are held and share the same value
- Triggers victory state and confetti animation on win

## Game Rules

1. Start the game by rolling all ten dice
2. Click individual dice to hold their current values
3. Continue rolling the remaining dice
4. Match all dice to the same value to win
5. Start a new game after victory
