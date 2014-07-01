describe("Calculadora", function() {
  var calculadora;

  beforeEach(function() {
    calculadora = new Calculadora();
  });

  it("Deveria somar dois numeros", function() {
    expect(calculadora.somar(2,3)).toEqual(5);
  });

  it("Deveria subtrarir dois numeros", function() {
    expect(calculadora.subtrair(2,3)).toEqual(-1);
  });

});
