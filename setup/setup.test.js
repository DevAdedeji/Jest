let animals = ['elephant', 'zebra', 'bear', 'tiger']

beforeEach(()=>{
    console.log("BEFORE EACH TEST");
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})

afterEach(()=>{
    console.log("AFTER EACH TEST");
})

describe("animals array", ()=>{
    it("Should add animal to end of array", ()=>{
        
        animals.push("alligator")
        expect(animals[animals.length - 1]).toBe("alligator")
    })

    it("Should add animal to beginning of array", ()=>{
        animals.unshift("monkey")
        expect(animals[0]).toBe("monkey")
    })

    it("should have initial length of 4", ()=>{
        expect(animals.length).toBe(4)
    })
})