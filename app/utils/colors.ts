/**
 * Determines whether a hex color is visually dark.
 *
 * Accepts 3- or 6-digit hex strings, with or without a leading `#`. Returns `false`
 * for falsy or otherwise invalid hex inputs (not 3 or 6 hex digits).
 *
 * @param hex - Hex color string (e.g., `"#ff0000"`, `"f00"`, or `"ff0000"`)
 * @returns `true` if the color's perceived luminance is less than 120, `false` otherwise.
 */
export function isDarkColor(hex: string): boolean {
  if (!hex) return false;

  const cleanHex = hex.replace('#', '');

  // Support short hex (#fff)
  const normalizedHex =
    cleanHex.length === 3
      ? cleanHex
          .split('')
          .map((c) => c + c)
          .join('')
      : cleanHex;

  if (normalizedHex.length !== 6) return false;

  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);

  // perceived luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminance < 120;
}