interface finalResult {
  num: number;
  answer: string;
}

interface finalResultTwo {
  totalArr: Array<number>;
  selected: string | number;
  answer: number;
  extra: Array<number>;
}

export type { finalResult, finalResultTwo };
