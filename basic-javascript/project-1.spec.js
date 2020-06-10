const helpers = require('./project-1');

describe("test all the helpers method", ()=>{
    it('1-test the multiply by 10 function', ()=>{
        expect(helpers.multiplyByTen(10)).toBe(100);
    });
    it('2-test the subtract five function', ()=>{
        expect(helpers.subtractFive(10)).toBe(5);
    })
    it('3-function to check if the 2 strings are equal', ()=>{
        expect(helpers.areSameLength('helper','cuties')).toBe(true);
    })
    it('4-check to see if 2 numbers are equal', ()=>{
        expect(helpers.areEqual(2,2)).toBe(true);
    })
    it('5-check to see if the number is less than 90', ()=>{
        expect(helpers.lessThanNinety(50)).toBe(true);
        expect(helpers.lessThanNinety(91)).toBe(false);
    })
    it('6-check to see if greater than 50 is working', ()=>{
        expect(helpers.greaterThanFifty(51)).toBe(true);
    })
    it('7-add 2 numbers together', ()=>{
        expect(helpers.add(3,4)).toBe(7);
    })
    it('8-subtract two numbers successfully', ()=>{
        expect(helpers.subtract(4,3)).toBe(1);
    })
    it('9-divide two numbers successfully', ()=>{
        expect(helpers.divide(6,2)).toBe(3);
    })
    it('10-multiply 2 numbers successfully', ()=>{
        expect(helpers.multiply(1,2)).toBe(2);
    })
    it('11-get remainder function return successfully', ()=>{
        expect(helpers.getRemainder(10,9)).toBe(1);
    })
    it('12- test if the isEven function successfully return the result',()=>{
        expect(helpers.isEven(2)).toBe(true)
        expect(helpers.isEven(3)).toBe(false)
    })
    it('13-check if the isOdd function is working properly', ()=>{
        expect(helpers.isOdd(3)).toBe(true)
        expect(helpers.isOdd(4)).toBe(false)
    })
    it('14-check if the square method is correct', ()=>{
        expect(helpers.square(2)).toBe(4);
        expect(helpers.square(5)).toBe(25);
    })
    it('15-check to see if raise to power is working', ()=>{
        expect(helpers.raiseToPower(2,3)).toBe(8)
    })
    it('16-expect round number is working correctly', ()=>{
        expect(helpers.roundNumber(3.44)).toBe(3);
    })
    it('17-the number will be round up',()=>{
        expect(helpers.roundUp(3.236)).toBe(4);
    })
    it('18-add exclamation point will working ', ()=>{
        expect(helpers.addExclamationPoint('this is an expression')).toBe('this is an expression !')
    })
    it('19-combines string will work as expected', ()=>{
        expect(helpers.combineNames('Jack','Tran')).toBe('Jack Tran')
    })
    it('20- greeting user method will work as expected',()=>{
        expect(helpers.getGreeting('Jack')).toBe('Hello Jack!')
    })
    it('21-get rectangle are will work',()=>{
        expect(helpers.getRectangleArea(3,4)).toBe(12);
        expect(helpers.getRectangleArea(5,5)).toBe(25);
    })
    it('22-get triangle area will work',()=>{
        expect(helpers.getTriangleArea(5,10)).toBe(25);
    })
    it('23-get circle area', ()=>{
        expect(helpers.getCircleArea(4)).toBe(50.26548245743669)
    })
    it('24-get rectangular prism volume will work as expected',()=>{
        expect(helpers.getRectangularPrismVolume(3,4,2)).toBe(24);
    })

})