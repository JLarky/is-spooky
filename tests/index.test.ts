import { describe, it, expect } from "bun:test";
import { isSpooky, printSpookyMessage } from "../index";

describe("isSpooky", () => {
  it("should return true for October (month 9)", () => {
    const octoberDate = new Date(2025, 9, 15); // October 15, 2025
    expect(isSpooky(octoberDate)).toBe(true);
  });

  it("should return false for other months", () => {
    const nonOctoberDates = [
      new Date(2025, 0, 15), // January
      new Date(2025, 1, 15), // February
      new Date(2025, 2, 15), // March
      new Date(2025, 3, 15), // April
      new Date(2025, 4, 15), // May
      new Date(2025, 5, 15), // June
      new Date(2025, 6, 15), // July
      new Date(2025, 7, 15), // August
      new Date(2025, 8, 15), // September
      new Date(2025, 10, 15), // November
      new Date(2025, 11, 15), // December
    ];

    nonOctoberDates.forEach((date) => {
      expect(isSpooky(date)).toBe(false);
    });
  });

  it("should work with any day in October", () => {
    for (let day = 1; day <= 31; day++) {
      const date = new Date(2025, 9, day);
      expect(isSpooky(date)).toBe(true);
    }
  });

  it("should work with different years", () => {
    const octoberDates = [
      new Date(2020, 9, 15),
      new Date(2021, 9, 15),
      new Date(2024, 9, 15),
      new Date(2025, 9, 15),
      new Date(2030, 9, 15),
    ];

    octoberDates.forEach((date) => {
      expect(isSpooky(date)).toBe(true);
    });
  });

  it("should use current date when no argument is provided", () => {
    const now = new Date();
    const result = isSpooky();
    const expected = now.getMonth() === 9;
    expect(result).toBe(expected);
  });

  it("should return false for September (month 8)", () => {
    const septemberDate = new Date(2025, 8, 30);
    expect(isSpooky(septemberDate)).toBe(false);
  });

  it("should return false for November (month 10)", () => {
    const novemberDate = new Date(2025, 10, 1);
    expect(isSpooky(novemberDate)).toBe(false);
  });
});

describe("printSpookyMessage", () => {
  it("should print 'Spooky!' for October dates", () => {
    const octoberDate = new Date(2025, 9, 15);
    const consoleSpy = console.log;
    let output = "";

    console.log = (message: any) => {
      output = message;
    };

    printSpookyMessage(octoberDate);

    console.log = consoleSpy;
    expect(output).toBe("Spooky!");
  });

  it("should print 'Not spooky.' for non-October dates", () => {
    const januaryDate = new Date(2025, 0, 15);
    const consoleSpy = console.log;
    let output = "";

    console.log = (message: any) => {
      output = message;
    };

    printSpookyMessage(januaryDate);

    console.log = consoleSpy;
    expect(output).toBe("Not spooky.");
  });

  it("should print 'Spooky!' when called without arguments in October", () => {
    // This test only runs correctly in October
    const now = new Date();
    const isOctober = now.getMonth() === 9;

    const consoleSpy = console.log;
    let output = "";

    console.log = (message: any) => {
      output = message;
    };

    printSpookyMessage();

    console.log = consoleSpy;
    expect(output).toBe(isOctober ? "Spooky!" : "Not spooky.");
  });
});
