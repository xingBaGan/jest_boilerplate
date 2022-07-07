import getValue from '../src/core/getValue.js'

test('测试 getValue 分支', () => {
    let path = 'name';
    let data = {
        name:'jack',
        hair_color:'red',
        age:12
    }
    let result = 'jack';
    expect(getValue(path,data)).toBe(result);
})

test('测试 getValue 分支', () => {
    let path = 'father.name';
    let data = {
        name:'jack',
        hair_color:'red',
        father:{
            age:54,
            name:'tom',
            hair_color:'black'
        }
    }
    let result = 'tom';
    expect(getValue(path,data)).toBe(result);
})

test('测试 getValue 分支', () => {
    let path = 'father.tool';
    let data = {
        name:'jack',
        hair_color:'red',
        father:{
            age:54,
            name:'tom',
            hair_color:'black'
        }
    }
    // let result = 'tom';
    expect(getValue(path,data)).toBe(undefined);
})