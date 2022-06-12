import { css } from "styled-components";

const space = 5;

export const S = {
  flex: (
    direction = "row",
    justify = "flex-start",
    align = "flex-start",
    wrap = "wrap"
  ) => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};
  `,

  size: (width: string, height = width) => css`
    width: ${width};
    height: ${height};
  `,

  emptyAbsolute: () => css`
    content: " ";
    position: absolute;
  `,

  fullAbsolute: () => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,

  flexCenter: (direction: string = "row", wrap = "nowrap") => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: center;
    align-items: center;
  `,

  round: (radius: string) => css`
    border-radius: ${radius};
  `,
  responsiveContainer: (maxWidth = "100%") => css`
    max-width: ${maxWidth};
    width: 100%;
  `,

  spacing: (value: number) => {
    const val = value * space;
    return val + "px";
  },
  shadow: (color: string) => {
    return `box-shadow : 0 2px 4px ${color}`;
  },

  centerAbsolute: (size: "string") => {
    return `calc(50% - ${size} / 2)`;
  },

  iframeResponsive: (height: string, width: string) => css`
    overflow: hidden;
    padding-top: percentage(height / width);
    position: relative;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `,
};
