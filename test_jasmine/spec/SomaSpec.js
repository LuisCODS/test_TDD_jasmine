var sommme = 10+10;
var soust = 10-10;

// Nommage globale de l'ensemble de test
describe("Operation de base en matemathique", function(){

    // Méthode de configuration
    beforeEach(function(){
    // ...exectuté avant les test
    });

    describe("Test niveau addition: ", function(){
        it("doit retourner 10", function() { expect(sommme).toEqual(20); });
    });

    describe("Test niveau soustraction: ", ()=>{
        it("doit retourner 0", ()=> {
            expect(soust).toBe(0);
        });
    });

});