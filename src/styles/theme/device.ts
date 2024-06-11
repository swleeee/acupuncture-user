import { DEVICE_SIZE } from "@/constants";

export const device = {
  tablet: `screen and (min-width: ${DEVICE_SIZE.TABLET}px)`,
  laptop: `screen and (min-width: ${DEVICE_SIZE.LAPTOP}px)`,
};

export type deviceType = typeof device;
