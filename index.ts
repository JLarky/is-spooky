export function isSpooky(date: Date = new Date()): boolean {
  return date.getMonth() === 9;
}

export function printSpookyMessage(date: Date = new Date()): void {
  if (isSpooky(date)) {
    console.log("Spooky!");
  } else {
    console.log("Not spooky.");
  }
}

printSpookyMessage();
