
//fake dataService
const clients = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        email: 'jsmith@gmail.com',
        gender: "M",
        age: 33
    },
    {
        id: 2,
        firstName: 'Amelia',
        lastName: 'Murphy',
        email: 'Grove Street',
        gender: "W",
        age: 21
    },
    {
        id: 3,
        firstName: 'Olivia',
        lastName: 'Jones',
        email: 'olivJo@gmail.com',
        gender: "W",
        age: 45
    },
    {
        id: 4,
        firstName: 'Charlie',
        lastName: `O'Connor`,
        email: 'charlie123@amazon.com',
        gender: "M",
        age: 18
    },
    {
        id: 5,
        firstName: 'William',
        lastName: 'Jones',
        email: 'wj88@gmail.com',
        gender: "M",
        age: 28
    },
    {
        id: 6,
        firstName: 'Jessica',
        lastName: 'Taylor',
        email: 'taylorKid@o2.com',
        gender: "W",
        age: 39
    },
    {
        id: 7,
        firstName: 'Anna',
        lastName: 'Everdeen',
        email: 'aeverdeen@gmail.com',
        gender: "W",
        age: 39
    },
    {
        id: 8,
        firstName: 'George',
        lastName: 'Hammer',
        email: 'hammer00@gmail.com',
        gender: "M",
        age: 19
    },
    {
        id: 9,
        firstName: 'Alex',
        lastName: 'Treb',
        email: 'alexis@gmail.com',
        gender: "M",
        age: 29
    },
    {
        id: 10,
        firstName: 'Laurance',
        lastName: 'Pork',
        email: 'laurpo@gmail.com',
        gender: "W",
        age: 23
    },
    {
        id: 11,
        firstName: 'Julia',
        lastName: 'Alken',
        email: 'jul1ia@gmail.com',
        gender: "W",
        age: 66
    },
    {
        id: 12,
        firstName: 'Bob',
        lastName: 'Joy',
        email: 'joyToy@gmail.com',
        gender: "M",
        age: 56
    },
    {
        id: 13,
        firstName: 'Amber',
        lastName: 'Gold',
        email: 'ambergold@wp.pl',
        gender: "W",
        age: 21
    }

];
export function getClients(){
    return clients;
}