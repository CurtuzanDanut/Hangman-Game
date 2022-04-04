let word 
let answerArray = []
let remainingLetters
let checkLetter
let guess
let lives = 10
let usedLettersArray = []

function start(){
	word = document.getElementById('wordToGuess').value
	word = word.toUpperCase()
	document.getElementById('wordToGuess').value = ''
	for(let i = 0; i < word.length; i++){
		answerArray[i] = "_"
	}
	document.getElementById('displayed-word').innerHTML = answerArray.join(" ")
	remainingLetters = word.length
	return false
}

function tryLetter(){
	checkLetter = remainingLetters
	guess = document.getElementById('letter').value
	guess = guess.toUpperCase()
	document.getElementById('letter').value = ''
	usedLetters()
	if(guess.length > 1){
		alert("Enter a single letter")
	}else{
		for(let j = 0; j < word.length; j++){
			if(word[j] === guess){
				answerArray[j] = guess
				remainingLetters -= 1
			}
		}
	}
	if((remainingLetters === checkLetter) && lives >= 1){
		document.getElementById("image").src = "hang" + lives + ".jpg"
		lives--
		if(lives === 0){
			document.getElementById('gameStatus').innerHTML = "You lost, the answer was " + word + ". You can click Restart and start a new game!"
		}
	}
	document.getElementById('remainingLives').innerHTML = "Remaining lives : " + lives
	document.getElementById('displayed-word').innerHTML = answerArray.join(" ")
	if(remainingLetters === 0){
		document.getElementById('gameStatus').innerHTML = "Congratulations, you won! You can click Restart and start a new game!"
	}
	return false
}

function usedLetters(){
	usedLettersArray[usedLettersArray.length] = guess
	for(let x = 0; x < usedLettersArray.length; x++){
		document.getElementById("usedLetters").innerHTML = usedLettersArray.join(", ")
	}
}

function restart(){
	location.reload()
}