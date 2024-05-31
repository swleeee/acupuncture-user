const deviceSizes = {
  mobile: "375px",
  tablet: "750px",
  laptop: "1400px",
};

export const device = {
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
};

export type deviceType = typeof device;
