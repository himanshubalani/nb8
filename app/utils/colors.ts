/**
 * Returns true if a hex color is visually dark
 * Uses perceived luminance (WCAG-inspired)
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
  
  if (isNaN(r) || isNaN(g) || isNaN(b)) return false;

  // perceived luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminance < 120;
}
