const fetchData = require("./async")

it("should return coorect todo", async ()=>{
    const num = 2
    const todo = await fetchData(num);
    expect(todo.id).toBe(num)
})