import compiler from './compiler.js'
export default class Vue{
    constructor(options){
        // 内部熟悉初始值
        this._data = options.data;
        this._el = options.el; //'#app'
        this.$el = this._templateDOM = document.querySelector(this._el);
        this._parent  = this.$el.parentNode;
    }

    render(){
        this.compile();
    }
    // 数据更新到模板节点上
    compile(){
        //需要保留原来的的样子，用来更新
        let tempDOM = this._templateDOM.cloneNode(true);
        compiler(tempDOM,this._data)
        this.update(tempDOM)
    }
     //挂载/更新
     update(tempDOM){
        this._parent.replaceChild(tempDOM,  this._templateDOM);
    }

}