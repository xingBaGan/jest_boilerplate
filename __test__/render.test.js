import  Vue from '../src/core/vue.js';
import $ from 'jquery'
import { addHtmlToBody, clearBodyContent } from '../src/effects/compiler';
beforeEach(() => {
    clearBodyContent();
})
describe('测试一般对象',()=>{
    beforeEach(()=>{
        let template = `<div id="app">
                            {{name}} has {{hair_color}} hair
                            <span>{{age}}</span>years old
                        </div>`;
        addHtmlToBody(template);
    })
    test('测试vue 对象', () => {
        let data = {
            name: 'jack',
            hair_color: 'red',
            age: 12
        }
        let app = new Vue({
            el: '#app',
            data: data
        })
        app.render();
        let result =    `<div id="app">
                            jack has red hair
                            <span>12</span>years old
                        </div>`;
        expect($('body').html()).toBe(result);
    })
})
describe('测试 describe',()=>{
    beforeEach(()=>{
        let template = `<div id="app">
                            {{name}} has {{hair_color}} hair
                            <span>{{age}}</span>years old
                            <div>live in {{address.city}}</div>
                        </div>`;
        addHtmlToBody(template);
    })
    test('测试deep 对象', () => {
        let data = {
            name: 'jack',
            hair_color: 'red',
            age: 12,
            address: {
                city: 'beijing',
            }
        }
        let app = new Vue({
            el: '#app',
            data: data
        })
        app.render();
        let result =    `<div id="app">
                            jack has red hair
                            <span>12</span>years old
                            <div>live in beijing</div>
                        </div>`;
        expect($('body').html()).toBe(result);
    })
})

describe('测试 describe 反例',()=>{
    beforeEach(()=>{
        let template = `<div id="app">
                            {{name}} has {{hair_color}} hair
                            <span>{{age}}</span>years old
                            <div>live in {{address.city.area}}</div>
                        </div>`;
        addHtmlToBody(template);
    })
    test('测试deep 对象', () => {
        let data = {
            name: 'jack',
            hair_color: 'red',
            age: 12,
            address: {
                city: 'beijing',
            }
        }
        let app = new Vue({
            el: '#app',
            data: data
        })
        try{
            app.render();
        }catch(e){
            console.log(e)
        }
    })
})