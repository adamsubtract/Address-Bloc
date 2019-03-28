const MenuController = require("../controllers/MenuController");

// #1
 describe("MenuController", () => {

   beforeEach(() => {
      this.menu = new MenuController();
    });

   describe("#getContactCount()", () => {

// #2
     it("should return 0 when no contacts are in the book", () => { });

     it("should return 1 when there is exactly one contact in the book", () => {
    const menu = new MenuController();
    menu.contacts.push("Bob");
    expect(menu.getContactCount()).toBe(1)
  });

   });
 });
