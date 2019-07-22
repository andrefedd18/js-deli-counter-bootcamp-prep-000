var katzDeliLine = [];
function takeANumber(katzDeli, Ada) {
  katzDeli.push(`${Ada}`);
  return(`Welcome, ${Ada}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeliLine, nowServing) {
  function nowServing(katzDeli) {
    let i = 0 ;
    while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
  }
}