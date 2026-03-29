const btn = document.getElementById('surpriseBtn');
const audio = document.getElementById('surpriseAudio');

btn?.addEventListener('click', () => {
  audio.play();
  alert("🎉 Surprise! Keep exploring my projects!");
});