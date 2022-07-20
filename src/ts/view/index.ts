import { TimeLimit } from "./timeLimit";
import { Mission } from "./mission";
import { GameArea } from "./gameArea";

export class GameView {
  timeLimit = new TimeLimit();
  mission = new Mission();
  gameArea = new GameArea();

  clear() {
    this.timeLimit.clear();
    this.mission.clear();
    this.gameArea.clear();
  }

  render(time: number) {
    this.timeLimit.render(time);
    this.mission.render();
    this.gameArea.render(this.mission);
  }
}
