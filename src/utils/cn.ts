/**
 * Utility function to combine class names
 * Useful for conditional Tailwind CSS classes
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
