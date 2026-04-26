/** Elevation shadows using brand antracito as shadow base */
export const shadows = {
  1: '0 1px 3px rgba(28, 39, 51, 0.08), 0 1px 2px rgba(28, 39, 51, 0.06)',
  2: '0 4px 6px rgba(28, 39, 51, 0.07), 0 2px 4px rgba(28, 39, 51, 0.06)',
  3: '0 10px 15px rgba(28, 39, 51, 0.07), 0 4px 6px rgba(28, 39, 51, 0.05)',
  4: '0 20px 25px rgba(28, 39, 51, 0.08), 0 10px 10px rgba(28, 39, 51, 0.04)',
  5: '0 25px 50px rgba(28, 39, 51, 0.12)',
  bronze: '0 4px 14px rgba(165, 115, 64, 0.25)',
} as const;

export type ShadowLevel = keyof typeof shadows;
