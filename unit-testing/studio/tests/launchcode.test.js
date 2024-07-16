// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("value of orginization is 'nonprofit'", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("value of executiveDirector is 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("value of percentageCoolEmployees is 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  
  test("value of programsOffereds are correct", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("launchOutput returns 'Launch' when passed a number that is ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });

  test("launchOutput returns 'Code!' when passed a number that is ONLY divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });

  test("launchOutput returns 'Rocks!' when passed a number that is ONLY divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });

  test("launchOutput returns 'LaunchCode!' when passed a number that is both divisible by 2 & 3", function() {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });

  test("launchOutput returns 'Code Rocks!' when passed a number that is both divisible by 3 & 5", function() {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  test("launchOutput returns 'Launch Rocks! (CRASH!!!!)' when passed a number that is both divisible by 2 & 5", function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("launchOutput returns 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3, & 5", function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("launchOutput returns 'Rutabagas! That doesn't work.' when passed a number that is not divisible by 2, 3, & 5", function() {
    expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
  });
});