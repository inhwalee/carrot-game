import { GameController } from "./game-controller";

const playBtn: HTMLElement | null = document.getElementById("play");
const pauseBtn: HTMLElement | null = document.getElementById("pause");
const againBtn: HTMLElement | null = document.getElementById("again");
const closeModalBtn: HTMLElement | null = document.getElementById("close");

if (playBtn && pauseBtn && againBtn && closeModalBtn) {
  const game: GameController = new GameController(playBtn, pauseBtn, againBtn);

  playBtn.addEventListener("click", game.play.bind(game));
  pauseBtn.addEventListener("click", game.pause.bind(game));
  againBtn.addEventListener("click", game.again.bind(game));
  closeModalBtn.addEventListener("click", game.closeModal.bind(game));
}
