import { StatesType, resultType } from "./types";
import { Config } from "./config";
import { GameView } from "./view/index";
import { handleModal } from "./view/modal";

export class GameController {
  view = new GameView();

  states: StatesType = {
    isStarted: false,
    isPlayed: false,
    isModalOpen: false,
    timeLimit: Config.timeLimit,
    timer: undefined,
  };

  playBtn: HTMLElement;
  pauseBtn: HTMLElement;
  againBtn: HTMLElement;

  constructor(
    playBtn: HTMLElement,
    pauseBtn: HTMLElement,
    againBtn: HTMLElement
  ) {
    this.playBtn = playBtn;
    this.pauseBtn = pauseBtn;
    this.againBtn = againBtn;
  }

  init() {
    this.states = {
      isStarted: false,
      isPlayed: false,
      isModalOpen: false,
      timeLimit: Config.timeLimit,
      timer: undefined,
    };
    this.view.clear();
    Config.sounds.initBgm();
  }

  play() {
    if (!this.states.isStarted) {
      this.view.render(this.states.timeLimit);
      this.states.isStarted = true;
    }

    this.states.isPlayed = true;
    Config.sounds.playBgm();
    this.playBtn.classList.remove("on");
    this.pauseBtn.classList.add("on");

    this.startTimer();
  }

  startTimer() {
    const countDown = () => {
      if (this.view.mission.htmlList.length === Config.mission) {
        this.stopTimer();
        this.finish("win");
        return;
      }
      if (this.states.timeLimit === 0) {
        this.stopTimer();
        this.finish("lose");
        return;
      }
      this.states.timeLimit--;
      this.view.timeLimit.update(this.states.timeLimit);
    };
    this.states.timer = setInterval(countDown, 1000);
  }

  stopTimer() {
    clearInterval(this.states.timer);
  }

  pause(result: resultType | MouseEvent) {
    this.states.isPlayed = false;
    Config.sounds.pauseBgm();
    this.stopTimer();

    this.playBtn.classList.add("on");
    this.pauseBtn.classList.remove("on");
    this.states.isModalOpen = true;
    handleModal(this.states.isModalOpen, result);
  }

  finish(result: resultType) {
    this.pause(result);
    switch (result) {
      case "win":
        Config.sounds.playWin();
        break;
      case "lose":
        Config.sounds.playLose();
        break;
    }
    this.init();
  }

  again() {
    this.init();
    handleModal(this.states.isModalOpen);
    this.play();
  }

  closeModal() {
    this.states.isModalOpen = false;
    handleModal(this.states.isModalOpen);
  }
}
