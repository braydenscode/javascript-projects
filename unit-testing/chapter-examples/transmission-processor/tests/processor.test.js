const processor = require('../processor.js');

describe("transmission processor", function() {

   //  TODO: put tests here
    test("takes a string and returns an object", function () {
      let result = processor("9701::<489584872710>");
      expect(typeof result).toBe("object");
    });

    test("returns -1 if '::' not found", function() {
      let result = processor("9701<489584872710>");
      expect(result).toBe(-1);
    });

    test("returns id in object", function() {
      let result = processor("9701::<489584872710>");
      expect(result.id).not.toBeUndefined();
    });

    test("converts id to a number", function() {
      let result = processor("9701::<489584872710>");
      expect(result.id).toBe(9701);
    });

    test("returns rawData in object", function() {
      let result = processor("9701::<487297403495720912>");
      expect(result.rawData).not.toBeUndefined();
    });

    test("returns -1 for rawData if missing < at position 0", function() {
      let result = processor("9701::487297403495720912>");
      expect(result.rawData).toBe(-1);
    });

    test("trims leading and trailing whitespace from transmission", function() {
      let result = processor(" 9701::<489584872710> ");
      expect(result.rawData).toBe("<489584872710>");
    });

    test("returns -1 if the id part of the transmission cannot be converted to a number", function() {
      let result = processor("word::<489584872710>")
      expect(result.id).toBe(-1);
    });

    test("returns -1 if more than one '::' is found in transmission", function() {
      let result = processor("9701::123::<489584872710>");
      expect(result).toBe(-1);
    });

    // test("rawData does not include < or > symbols", function() {
    //   let result = processor("9701::<487297403495720912>");
    //   expect(result.rawData).toBe("487297403495720912");
    // });

    test("returns -1 for the value of rawData if anything besides numbers are present between the < > symbols", function() {
      let result = processor("9701::<48958a4872710>");
      expect(result.rawData).toBe(-1);
    });
 });