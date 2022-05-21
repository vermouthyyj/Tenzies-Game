# Tenzies-Game

This is the Digital Prototype [Here](https://www.figma.com/file/FqsxRUhAaXM4ezddQK0CdR/Tenzies?node-id=0%3A1)
Access the game [Here](https://vermouthyyj.github.io/Tenzies-Game/)

![Components Structure](/img/struct.png "structure")

1. function `heldDice` that takes `id` as a parameter, so that the program can figure out with `<Dice />` is clicked.
2. Update the `heldDice` function to flip the `isHeld` property on the object in the array that was clicked, based on the `id` prop passed into the function.
3. Update the `handleClick` function to not just roll all new dice, but instead to look through the existing dice to NOT role any that are being `held`.
4. use `id: nanoid()` so any new dice have an `id`, every element in the `map()` have a unique key value.
5. Add new state called `tenzies`, default to false. It represents whether the user has won the game yet or not.
6. Add an effect that runs every time the `dice` state array changes. For now, just console.log("Dice state changed").
7. Tie off loose ends!

- If tenzies is true, Change the button text to "New Game"
- If tenzies is true, use the "react-confetti" package to render the <Confetti /> component 🎉

8. Allow the user to play a new game when the button is clicked and they've already won.
