const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      while (this.prevGuesses[this.prevGuesses - 1] !== this.secretNum) {
        this.prevGuesses.push(this.getGuess())
        this.render()
      }
  },
  getGuess: function(number) {
    let guess
    while (guess !== this.secretNum || guess < this.smallestNum || guess > this.biggestNum) {
    guess = prompt.parseInt()(`Guess a number between ${smallestNum} and ${biggestNum}: `)
    }
  },
  render: function() {
    let message
  }
}
