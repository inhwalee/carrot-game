export class Mission {
  static update() {
    throw new Error("Method not implemented.");
  }
  missionContainer: HTMLElement;
  htmlList: string[] = [];

  constructor() {
    const missionEl: HTMLElement | null = document.getElementById("mission");
    if (!missionEl) throw "최상위 요소가 존재하지 않습니다.";
    this.missionContainer = missionEl;
  }

  update() {
    this.htmlList.push(`🥕`);
    this.render();
  }
  render() {
    this.missionContainer.innerHTML = this.htmlList.join("");
  }
  clear() {
    this.htmlList = [];
    this.render();
  }
}
