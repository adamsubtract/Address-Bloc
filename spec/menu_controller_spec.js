const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

    beforeEach(function(){
        menu = new MenuController();
    });

    describe('remindMe function', () => {
        it('should return a string', () => {
          expect(menu.remindMe()).toBe('Learning is a life-long pursuit');
        })
    });

});
