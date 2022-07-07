import { addHtmlToBody, clearBodyContent } from '../src/effects/compiler.js';
import  compiler  from '../src/core/compiler';
import $ from 'jquery';
beforeEach(() => {
    clearBodyContent();
})

test('测试 compiler TEXT_NODE 分支', () => {
    //副作用
    addHtmlToBody('<div class="test">{{hello}}</div>');
    let dom = document.getElementsByClassName('test')[0];
    compiler(dom, { hello: 'world' })
    expect($('.test').html()).toBe('world');
})

test('测试 compiler data 中不存在数据反例', () => {
    //副作用
    addHtmlToBody('<div class="test">{{hello}}</div>');
    let dom = document.getElementsByClassName('test')[0];
    expect(()=>{
        compiler(dom, { fuck: 'world' })
    }).toThrowError(/编译不通过,data 中[\w\.]*该属性不存在/);
})

test('测试 compiler  分支', () => {
    let template = `<div id="app">
                        {{name}} has {{hair_color}} hair
                        <span>{{age}}</span>years old
                    </div>`;
        let result = `<div id="app">
                        jack has red hair
                        <span>12</span>years old
                    </div>`;
    let data = {
        name:'jack',
        hair_color:'red',
        age:12
    }
    //副作用
    addHtmlToBody(template);
    let dom = document.getElementById('app')
    compiler(dom, data)
    expect($('body').html()).toBe(result);
})

test('测试 compiler  分支', () => {
    let template = `<div id="app">
                        {{name}} has {{ hair_color }} hair
                        <span>{{age}}</span>years old
                    </div>`;
        let result = `<div id="app">
                        jack has red hair
                        <span>12</span>years old
                    </div>`;
    let data = {
        name:'jack',
        hair_color:'red',
        age:12
    }
    //副作用
    addHtmlToBody(template);
    // console.log($('#app').get(0).childNodes)
    // for(let node of $('#app').get(0).childNodes){
    //     console.log(node)
    // }
    let dom = document.getElementById('app')
    compiler(dom, data)
    // expect($('body').html()).toBe(result);
})