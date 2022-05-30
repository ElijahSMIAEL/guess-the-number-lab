const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    do {
      this.prevGuesses.push(this.getGuess())
      this.render()
    }
    while (this.prevGuesses[this.prevGuesses - 1] !== this.secretNum) 
  },
  render: function() {
    let message
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) { message = `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
  } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
    message = `Your guess is too high.`
  } else if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
    message = `Your guess is too low`
  }
  alert(message)
  },
  getGuess: function() {
    let guess;
    while (guess < this.smallestNum || guess > this.biggestNum || isNaN(guess)) {
      guess = parseInt(prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}: `))
    }
    return guess
  },
}
game.play()

