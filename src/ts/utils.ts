export function randomPosition(maxWidth: number, maxHeight: number) {
  const CARROT_SIZE: number = 80;
  const randomWidth: number = Math.random() * (maxWidth - CARROT_SIZE);
  const randomHeight: number = Math.random() * (maxHeight - CARROT_SIZE);
  return { left: randomWidth, top: randomHeight };
}

export function convertToTwoDigitNumberFormat(num: string) {
  return num.padStart(2, "0");
}
