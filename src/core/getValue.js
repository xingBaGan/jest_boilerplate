/**
 * 
 * @param {string} path 访问路径
 * @param {Object} data 数据源
 * @returns 值
 * @example
 *   let path = 'name';
    let data = {
        name:'jack',
        hair_color:'red',
        age:12
    }
    let result = 'jack';
    expect(getValue(path,data)).toBe(result);
 */

export default function getValue(path,data){
    let keys = path.split('.');
    let value = data;
    for(let key of keys){
        value = value[key];
    }
    return value;
}