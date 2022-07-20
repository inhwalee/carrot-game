import { convertToTwoDigitNumberFormat } from "../utils";

export class TimeLimit {
  timeLimitContainer: HTMLElement;

  constructor() {
    const timeLimitEl: HTMLElement | null =
      document.getElementById("time-limit");
    if (!timeLimitEl) throw "최상위 요소가 존재하지 않습니다.";
    this.timeLimitContainer = timeLimitEl;
  }
  update(time: number) {
    this.timeLimitContainer.innerHTML = `00:${convertToTwoDigitNumberFormat(
      String(time)
    )}`;
  }
  render(time: number) {
    this.timeLimitContainer.innerHTML = `00:${convertToTwoDigitNumberFormat(
      String(time)
    )}`;
  }
  clear() {
    this.timeLimitContainer.innerHTML = "00:00";
  }
}
