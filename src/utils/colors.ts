export function rgba<T = ''>(hex: T, alpha?: string | number): string {
  const r = parseInt(String(hex).slice(1, 3), 16)
  const g = parseInt(String(hex).slice(3, 5), 16)
  const b = parseInt(String(hex).slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  }
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}
