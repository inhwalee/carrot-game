const backdropRoot = document.getElementById("backdrop-root");
const modalRoot = document.getElementById("modal-root");
const modalTextEl = document.querySelector(".message");

export function handleModal(
  isModalOpen: boolean,
  result?: "win" | "lose" | MouseEvent
) {
  if (modalTextEl) {
    switch (result) {
      case "win":
        modalTextEl.innerHTML = "You Win 🥳";
        break;
      case "lose":
        modalTextEl.innerHTML = "You Lose 😭";
        break;
      default:
        modalTextEl.innerHTML = "다시 시작하시겠습니까?";
        break;
    }
  }
  if (isModalOpen) {
    backdropRoot?.classList.add("on");
    modalRoot?.classList.add("on");

    //
  } else {
    backdropRoot?.classList.remove("on");
    modalRoot?.classList.remove("on");
  }
}
9;
