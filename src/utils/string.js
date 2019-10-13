/**
 * @param str {String}
 * @param lengthConstraint {Function}
 * @param chConstraint {Function} for every codePoint of str
 * @return boolean
 */
export function checkStr (str, lengthConstraint, chConstraint) {
  if (!str) str = ''
  if (!lengthConstraint(str.length)) { return false }
  for (let ch of str) {
    let codePoint = ch.codePointAt(0)
    if (!chConstraint(codePoint)) { return false }
  }
  return true
}
