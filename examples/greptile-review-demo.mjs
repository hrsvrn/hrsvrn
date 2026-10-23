// Standalone fixture for testing the Rowboat Greptile integration (2026-10-23).
export function summarizeNumbers(values) {
  if (!Array.isArray(values) || !values.every(value => Number.isFinite(value))) {
    throw new TypeError('Expected an array of finite numbers');
  }
  if (values.length === 0) return { count: 0, min: null, max: null };

  let min = values[0];
  let max = values[0];
  for (const value of values) {
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  return { count: values.length, min, max };
}
