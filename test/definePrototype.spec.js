test('测试defineProperty',()=>{
    let val = 23;
    let data = {};
    Object.defineProperty(data,'age',{
        enumerable:true,
        configurable:true,
        // val 被绑定了
        get(){
            return val;
        },
        set(){
            val = 45;
        }
    });
    expect(val).toBe(23);
    expect(data.age).toBe(23);
    // 如果通过直接修改会导致无法预测的问题，所以用闭包包裹最好
    val = 40;
    expect(data.age).toBe(40);
    data.age = 30;
    expect(val).toBe(45);
    // console.log(this)

    var num =2.446242342;  

    num = num.toFixed(2); 

    expect(num).toBe('2.45');
})