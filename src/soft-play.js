// do not change these lines

function reset() {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  }

  adults += numAdults
  children += numChildren
  return true
}

function occupancy() {
  return { adults, children }
}

function leave(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else if (children - numChildren > adults - numAdults) {
    return false
  } else {
    adults -= numAdults
    children -= numChildren
    return true
  }
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
