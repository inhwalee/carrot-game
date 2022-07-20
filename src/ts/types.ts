export type StatesType = {
  isStarted: boolean;
  isPlayed: boolean;
  isModalOpen: boolean;
  timeLimit: number;
  timer: undefined | number;
};

export type ConfigType = {
  timeLimit: number;
  mission: number;
  items: ItemsType;
  sounds: any;
};

export type ItemsType = {
  carrot: ItemType;
  bug: ItemType;
};

export type ItemType = {
  imgPath: string;
};

export type resultType = "win" | "lose";
