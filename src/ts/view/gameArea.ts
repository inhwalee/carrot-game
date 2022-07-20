import { Config } from "../config";
import { randomPosition } from "../utils";
import { Mission } from "./mission";

export class GameArea {
  gameAreaContainer: HTMLElement;
  htmlList: string[] = [];

  constructor() {
    const gameAreaEl: HTMLElement | null = document.getElementById("game-area");
    if (!gameAreaEl) throw "최상위 요소가 존재하지 않습니다.";
    this.gameAreaContainer = gameAreaEl;
  }

  update(target: HTMLElement) {
    const targetId = target.getAttribute("id");
    this.htmlList = this.htmlList.filter((htmlEl) => {
      !htmlEl.includes(`id='${targetId}'`);
    });
    target.remove();
  }

  preRender() {
    const addHtml = () => {
      for (let i = 1; i <= Config.mission * 2; i++) {
        if (i <= Config.mission) {
          this.htmlList.push(
            `<img src=${Config.items.carrot.imgPath} id='${i}' alt='carrot'>`
          );
        } else {
          this.htmlList.push(
            `<img src=${Config.items.bug.imgPath} id='${i}' alt='bug'>`
          );
        }
      }
    };
    addHtml();
    this.gameAreaContainer.innerHTML = this.htmlList.join("");
  }

  render(_mission: Mission) {
    this.preRender();
    const setPosition = (element: HTMLElement) => {
      const randomPos = randomPosition(
        this.gameAreaContainer.clientWidth,
        this.gameAreaContainer.clientHeight
      );
      element.setAttribute(
        "style",
        `transform: translate(${Math.floor(randomPos.left)}px, ${Math.floor(
          randomPos.top
        )}px)`
      );
    };
    const setEvent = (element: HTMLElement) => {
      const handlePullBug = () => {
        Config.sounds.playBug();
      };
      const handlePullCarrot = (event: any) => {
        Config.sounds.playCarrot();
        _mission.update();
        this.update(event.target);
      };
      if (element.getAttribute("alt") === "bug") {
        element.addEventListener("click", handlePullBug);
      }
      if (element.getAttribute("alt") === "carrot") {
        element.addEventListener("click", handlePullCarrot);
      }
    };
    const imgEls = this.gameAreaContainer.querySelectorAll("img");
    imgEls.forEach((imgEl) => {
      setEvent(imgEl);
      setPosition(imgEl);
    });
  }

  clear() {
    this.htmlList = [];
    this.gameAreaContainer.innerHTML = "";
  }
}
