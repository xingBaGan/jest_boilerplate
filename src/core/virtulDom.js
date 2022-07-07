// 虚拟dom
// <div /> => {tag: 'div'}
// 文本节点 => {tag:undefined, value: '文本节点'}
// <div title="1" class="c"/> => {tag: 'div', data: {title: '1', class: 'c'}}
// <div><p/></div> => {tag: 'div', children: [{tag:'p'}]}
