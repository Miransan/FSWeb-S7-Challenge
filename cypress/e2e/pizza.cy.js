describe("Kontrol edelim bakalim", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("siparise gec", () => {
        cy.get("#siparisegecbuttonu").click()

    });


    it("pizza yanlış data denemsi", () => {
        cy.get("#siparisegecbuttonu").click()
        cy.get("#name-input")
            .type("a")
            .should("have.value", "a");

        cy.wait(2000);

        cy.get(".errormesajları").should(
            "include.text",
            "İsim en az 2 karakter olmalıdır",
            
        );
        cy.wait(2000);

        cy.get("#name-input")
            .clear()
            .type("1")
            .should("have.value", "1");

            cy.wait(2000);

        cy.get(".errormesajları").should(
            "include.text",
            "İsim sayı değeri içeremez",
            
        );

        cy.wait(2000);



        cy.get("#size-dropdown")
            .select("Küçük")
            .should("have.value", "Küçük");

        cy.wait(2000);

        cy.get("#size-dropdown")
            .select("Pizza Boyu Seçiniz")
            .should("have.value", "Pizza Boyu Seçiniz")

        cy.wait(2000);

        cy.get(".errormesajları").should(
            "include.text",
            "Pizza boyutu seçiminizi yapınız"
        );
        cy.wait(2000);

        cy.get("#order-button").should("be.disabled");
    });


    it("dogru siparis denemesi", () => {
        cy.get("#siparisegecbuttonu").click()
        cy.get("#name-input")
            .type("Miran")
            .should("have.value", "Miran");
        cy.wait(1000);

        cy.get("#size-dropdown")
            .select("Ekstra Büyük")
            .should("have.value", "Ekstra Büyük");
        cy.wait(1000);

        cy.get('[type="radio"]').check("Barbekü");
        cy.wait(1000);


        cy.get('#salam').check()
        cy.wait(1000);

        cy.get('#sosis').check()
        cy.wait(1000);

        cy.get('#sucuk').check()       
        cy.wait(1000);


        cy.get('[type="radio"]').check("Peynirli");
        cy.wait(1000);


        cy.get('form').contains('Siparişlere Ekle').click()



    });


    
   
    







});





