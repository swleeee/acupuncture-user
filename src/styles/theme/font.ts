import { css } from "@emotion/react";

const LINE_HEIGHT = {
  "12": 1.5,
  "14": 1.42857,
  "16": 1.5,
  "18": 1,
  "20": 1.33333,
  "21": 1.42857,
  "24": 1.5,
  "30": 1.46666,
  "34": 1.35294,
  "38": 1.28947,
  "40": 1.2,
  "42": 1.42857,
  "50": 1.3,
  "54": 1.11111,
} as const;

export const font = {
  regular_12: css`
    font-size: 1.2rem;
    font-weight: 400;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[12]};
  `,
  regular_14: css`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[14]};
  `,
  regular_16: css`
    font-size: 1.6rem;
    font-weight: 400;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[16]};
  `,
  medium_14: css`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[14]};
  `,
  medium_16: css`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[16]};
  `,
  medium_20: css`
    font-size: 2rem;
    font-weight: 500;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[20]};
  `,
  semibold_12: css`
    font-size: 1.2rem;
    font-weight: 600;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[12]};
  `,
  semibold_14: css`
    font-size: 1.4rem;
    font-weight: 600;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[14]};
  `,
  semibold_18: css`
    font-size: 1.8rem;
    font-weight: 600;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[18]};
  `,
  bold_14: css`
    font-size: 1.4rem;
    font-weight: 700;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[14]};
  `,
  bold_21: css`
    font-size: 2.1rem;
    font-weight: 700;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[21]};
  `,
  bold_38: css`
    font-size: 3.8rem;
    font-weight: 700;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[38]};
  `,
  extrabold_20: css`
    font-size: 2rem;
    font-weight: 800;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[20]};
  `,
  extrabold_24: css`
    font-size: 2.4rem;
    font-weight: 800;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[24]};
  `,
  extrabold_30: css`
    font-size: 3rem;
    font-weight: 800;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[30]};
  `,
  extrabold_34: css`
    font-size: 3.4rem;
    font-weight: 800;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[34]};
  `,
  extrabold_42: css`
    font-size: 4.2rem;
    font-weight: 800;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[42]};
  `,
  extrabold_54: css`
    font-size: 5.4rem;
    font-weight: 800;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[54]};
  `,
  heavy_40: css`
    font-size: 4rem;
    font-weight: 900;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[40]};
  `,
  heavy_50: css`
    font-size: 5rem;
    font-weight: 900;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[50]};
  `,
} as const;

export type FontType = typeof font;
