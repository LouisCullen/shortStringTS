/**
 * Shortens a string to a maximum character length with ellipses.
 */
export function shortString(original: string, length: number){
  var short = original;
  if (short.length > length) {
    var short = original.substring(0, length);
    short = short.substring(0, short.lastIndexOf(" ")) + "...";
  }
  return short;
}