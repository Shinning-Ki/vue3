// 需求：定义一个类，用来存储用户的相关信息（id,名字，年龄）
// 通过一个类的实例对象调用add方法可以添加多个用户信息对象，调用getUserId方法可以根据id获取某个指定的用户信息对象

// 定义一个泛型接口
interface IBaseCRUD<T> {
    data: T[]
    add: (t: T) => T
    getUserId: (id: number ) => T | undefined
}

// 定义一个用户的类
class User {
    id?: number
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
class UserCRUD implements IBaseCRUD<User>{
    data: User[] = []
    // 添加用户信息
    add(user: User): User {
        // 产生id
        user.id = Date.now() + Math.random()
        // 把用户信息添加到data数组中
        this.data.push(user)
        return user
    }
    // 根据id来查找指定用户的信息对象
    getUserId(id: number | undefined): User | undefined {
        // 把查找到的user给返回出来
        return this.data.find(user => user.id === id)
    }
}
const userCRUD: UserCRUD = new UserCRUD()
userCRUD.add(new User('kjl', 23))
userCRUD.add(new User('xulina', 23))
const { id } = userCRUD.add(new User('zhouhuil', 23))
const user = userCRUD.getUserId(id)
