export const round2dec = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;
