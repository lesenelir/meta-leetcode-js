export function BinarySearch(arr, rightIndex, value) {
  let left = 0
  let right = rightIndex

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (value > mid) {
      left = mid - 1
    } else {
      right = mid + 1
    }

  }
  return left
}
