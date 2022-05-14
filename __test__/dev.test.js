import $ from 'jquery';

test('测试 compiler TEXT_NODE 分支', () => {
    //副作用
    $('body').append('world');
    expect($('body').html()).toBe('world');
})