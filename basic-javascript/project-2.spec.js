const funcs = require('./project-2');

describe('testing method in project-2',()=>{
    it('1-get the biggest number return the bigger number', ()=>{
        expect(funcs.getBiggest(5,7)).toBe(7);
        expect(funcs.getBiggest(7,7)).toBe(7);
    })
    it('2-greeting return different languages according to the input', ()=>{
        expect(funcs.greeting()).toBe('Hello!')
        expect(funcs.greeting('Spanish')).toBe('Hola!')
    })
    it('3-return 2 or 5', ()=>{
        expect(funcs.isTenOrFive(5)).toBe(true)
        expect(funcs.isTenOrFive(11)).toBe(false)
    })
    it('4-check to see if is in range working', ()=>{
        expect(funcs.isInRange(23)).toBe(true);
    })
    it('5-check to see if is integer working', ()=>{
        expect(funcs.isInteger(6.8)).toBe(false);
        expect(funcs.isInteger(6.2)).toBe(false);
    })
    it('6-check to see if fizzbuzz is working', ()=>{
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
        expect(funcs.fizzBuzz(28)).toBe(28)
    })
    it('7-checking prime number', ()=>{
        expect(funcs.isPrime(7)).toBe(true);
        expect(funcs.isPrime(4)).toBe(false);
    })
    it('8-receive the first item in the array', ()=>{
        expect(funcs.returnFirst([1,2,3,4,5])).toBe(1)
        expect(funcs.returnFirst()).toBe('There is no item in an array')
    })
    it('9-get the last item in an array',()=>{
        expect(funcs.returnLast([1,3,4,5])).toBe(5);
    })
    it('10-increment by 1', ()=>{
        expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4]);
    })
    it('11-add Item to array', ()=>{
        expect(funcs.addItemToArray([1,2,3,4],5)).toEqual([1,2,3,4,5]);
    })
    it('12-add item to the front', ()=>{
        expect(funcs.addItemToFront([1,2,3,4],5)).toEqual([5,1,2,3,4]);
    })
    it('13-check to see if word to sentence is correct', ()=>{
        expect(funcs.wordsToSentence(['this','is','a','sentence'])).toBe('this is a sentence')
    })
    it('14-check to see if an array contain a certain word',()=>{
        expect(funcs.contains(['t','b','c'],'c')).toBe(true);
        expect(funcs.contains(['t','b','c'],'d')).toBe(false);
    })
    it('15-check to see if a sum function is correct', ()=>{
        expect(funcs.addNumbers([1,2,3,4,5])).toBe(15);
    })
    it('16-return the average test score', ()=>{
        expect(funcs.averageTestScore([1,2,3,4,5])).toBe(3) 
    })
    it('17-Get the maximum number',()=>{
        expect(funcs.largestNumber([1,2,3,4,5,6])).toBe(6);
    })

})
