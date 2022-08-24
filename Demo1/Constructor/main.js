//Khởi tạo đối tượng
function people(name,age,gender)
{
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.changeName = function(name)
    {
        this.name = name;
    }
}
var p = new people("Nguyen Van B",21,"male")
p.changeName("Alex");
console.log(p);

//inherit
/**class Person extends people{
    colorSkin()
    {
        console.log('brown');
    }
}
const me = new Person('Yen');
console.log(me.name);
me.colorSkin();**/