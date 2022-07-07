import defineReactive from '../src/core/reactive';

test('测试 defineReactive 分支', () => {
    let data = {};
    defineReactive(data, 'weight', '50');
    defineReactive(data, 'height', '1.74');
    // data.weight = "50" //kg
    // data.height = "1.74" //m
    expect(data.weight).toBe('50');
    expect(data.height).toBe('1.74');
    let BMI = data.weight / (data.height * data.height);


    defineReactive(data, 'weight', '60');
    expect(data.weight).toBe('60');
    data.weight = '70'
    expect(data.weight).toBe('70');
    //保留四位小数
    expect(BMI.toFixed(4)).toBe("16.5147");

    BMI = data.weight / (data.height * data.height);
    expect(BMI.toFixed(4)).toBe("23.1206");
})

test('测试 defineReactive 分支', () => {
    let data = {};
    defineReactive(data, 'weight', '50');
    defineReactive(data, 'height', '1.74');
    let BMI;
    window.target = () => {
         BMI = data.weight / (data.height * data.height);
    }
    window.target();
    // debugger
     //保留四位小数
     expect(BMI.toFixed(4)).toBe("16.5147");

    data.weight = '70'
    // BMI = data.weight / (data.height * data.height);
    expect(BMI.toFixed(4)).toBe("23.1206");
})