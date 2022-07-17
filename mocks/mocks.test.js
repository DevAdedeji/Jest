// const forEach = (items, callback) => {
//     for(let i = 0; i < items.length; i++){
//         callback(items[i])
//     }
// }

// it("mock callback", ()=>{
//     const mockCalledback = jest.fn(x => 42 + x)
//     forEach([0,1], mockCalledback)
//     // expect(mockCalledback.mock.calls.length).toBe(2)
//     // expect(mockCalledback.mock.calls[0][0]).toBe(0)
//     expect(mockCalledback.mock.results[0].value).toBe(42)
// })

// it("mock return", ()=>{
//     const mock = jest.fn();
//     mock.mockReturnValueOnce(true);
//     const results = mock();
//     expect(results).toBe(true)
// })

const axios  = require("axios")

const fetchData = async (id)=>{
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return results.data
}

it("mock axios", async ()=>{
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data:{
            id: 1,
            todo: "Get to school"
        }
    })
    const result = await fetchData(1);
    expect(result.todo).toBe("Get to school")
})