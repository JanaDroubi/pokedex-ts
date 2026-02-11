export function cleanInput(input: string): string[] {
  const trimmed = input.trim();
  const words = trimmed.split(/\s+/).filter((word) => word.length > 0);
  return words.map((word) => word.toLowerCase());
}
