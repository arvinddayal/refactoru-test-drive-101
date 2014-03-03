describe("Splice", function() {
  it("should remove elements from string", function() {
    expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);
  });

  it("should remain unchanged", function() {
    expect((['a','b','c','d','e'])).toEqual(['a','b','c','d','e']);
  });

  it("should insert the 4th argument", function() {
    expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e']);
  });

  it("should insert elements without removing any", function() {
	expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
  });

  it("should insert arguments at end with high index(1st)", function() {
	expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
  });

   it("should insert arguments at end with high index(2nd)", function() {
	expect(splice(['a','b','c'],99, 1, 'z')).toEqual(['a','b','c','z']);
  });
  
   it("should insert an arbitrary number of values using multiple arguments", function() {
	expect(splice(['a','b','c'], 99, 1, 'x', 'y', 'z')).toEqual(['a','b','c','x','y','z']);
  });
});