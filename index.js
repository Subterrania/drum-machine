const keys = document.querySelectorAll(".key")

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add("playing")
}

function removePlaying(e) { //this function is necessary to remove a bug that prevents .playing to be removed when a key is pressed continously.
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  key.classList.remove("playing")
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return
  console.log(this)
  this.classList.remove("playing")
}



keys.forEach(key => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", playSound)
window.addEventListener("keyup", removePlaying)
