let today=new Date()

export const dataMOCK = [

    {
        id: 1,
        firstname: "User",
        lastname: 'User last name',
        address: "Block street 1",
        dateOfCreation: today.toDateString(),
        orders: [{id:1, name: "order 1"}, {id:2, name: "order 2"}, {id:3, name: "order 3"} ]
    },
    {
        id: 2,
        firstname: "User 2",
        lastname: 'User last name',
        address: "Block street 2",
        dateOfCreation: today.toDateString(),
        orders: [{id:1, name: "order 21"}, {id:2, name: "order 212"}, {id:3, name: "order 211"}, {id:4, name: "order 211"} ]
    },
    {
        id: 3,
        firstname: "User 3",
        lastname: 'User last name',
        address: "Block street 1",
        dateOfCreation: today.toDateString(),
        orders: [{id:1, name: "order 43"}, {id:2, name: "order 42342"}, {id:3, name: "order 32"} ]
    },
    {
        id: 4,
        firstname: "User 4",
        lastname: 'User last name',
        address: "Block street 143",
        dateOfCreation: today.toDateString(),
        orders: [{id:1, name: "order 1332"}, {id:2, name: "order 222"}, {id:3, name: "order 1253"} ]
    },

    


]