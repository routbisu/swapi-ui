/**
 * Change text returned from API into human readable text
 * @param text input text
 * @returns human readable text
 */
export const santiseAPIText = (text?: string): string | undefined => {
  if (!text) return text;

  if (text?.toLowerCase() === "n/a") return "Not available";

  return text;
};
