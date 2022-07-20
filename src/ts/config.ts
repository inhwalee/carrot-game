import { ConfigType } from "./types";

const ASSETS_BASE_URL = "./assets/";

export const Config: ConfigType = {
  timeLimit: 8,
  mission: 10,
  items: {
    carrot: {
      imgPath: `${ASSETS_BASE_URL}img/carrot.png`,
    },
    bug: {
      imgPath: `${ASSETS_BASE_URL}img/bug.png`,
    },
  },
  sounds: {
    bgm: new Audio(`${ASSETS_BASE_URL}sound/bgm.mp3`),
    playBgm() {
      this.bgm.play();
    },
    pauseBgm() {
      this.bgm.pause();
    },
    initBgm() {
      this.bgm.currentTime = 0;
      this.bgm.pause();
    },
    playCarrot() {
      new Audio(`${ASSETS_BASE_URL}sound/carrot_pull.mp3`).play();
    },
    playBug() {
      new Audio(`${ASSETS_BASE_URL}sound/bug_pull.mp3`).play();
    },
    playWin() {
      new Audio(`${ASSETS_BASE_URL}sound/game_win.mp3`).play();
    },
    playLose() {
      new Audio(`${ASSETS_BASE_URL}sound/game_lose.mp3`).play();
    },
  },
};
