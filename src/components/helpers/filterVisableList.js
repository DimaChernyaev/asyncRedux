export function filterVisableList(arr, value) {
  return arr.filter(item => item.name.toLowerCase().includes(value));
}
