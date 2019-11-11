//Over-fetching은 서버로부터 불필요한 정보까지 받아오는 것을 뜻한다.  
//Under-fetching은 REST에서 하나를 완성하려고 많은 소스를 요청하는것.
//GraphQL은 위 두 문제를 해결 할 수 있다.
//Schema는 받거나 줄 데이터에 대한 서술이다.
//resolvers은 View같은 것이다. Display되는 부분.
//schema는 어디로 갈지 정해주는 URLs같은 것이다.

/*
function(){
    return abc;
}

=== 위 코드와 아래 코드는 같은 뜻이다 ===

() => abc
*/

/*

type Query{
    people: [Person]!
    person(id : Int!): Person 
    여기서 Person뒤에 "!"를 붙이면 항상 Person을 return하라는 뜻인데, 만약 Quety에서 return 받을 data가 없을 경우 "!"을 붙이면 오류가 나게되고, 안 붙이면 그냥 null값을 반환한다. 있을 수도 없을 수도 있는 값이 반환 될 것 같다면 "!"를 안 붙이는게 좋다.
}

*/

/*

export const getById = id => {
        const filteredPeople = people.filter(person => person.id === String(id));
        //filter는 people의 배열을 다 확인한 후 해당조건에 맞는 데이터를 내보낸다.
        return filteredPeople[0];
    };

*/
