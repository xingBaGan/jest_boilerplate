import getValue from '../core/getValue.js'
/**
 *
 *
 * @export
 * @param {Node} template
 * @param {object} data
 */
export default function compiler(template, data) {
    let childNodes = template.childNodes;
    for (let node of childNodes) {
        let type = node.nodeType;
        let key ;
        //
        if (type == Node.TEXT_NODE) {
            // let reg =/\{\{\s{0,}(.*?)\s{0,}\}\}/g;
            let txt = node.textContent;
            //对于文本节点（text）、注释节点（comment）和属性节点（attr），textContent属性的值与nodeValue属性相同。
            txt = txt.replace(/\{\{\s{0,}(.*?)\s{0,}\}\}/g,(match,capture)=>{
                key = capture;
                let value = getValue(key,data); 
                return value?value:'';
             });
             if(txt){
                 node.textContent = txt;
             }else{
                 throw new Error(`编译不通过,data 中${key}该属性不存在`)
             }
        } else if (type == Node.ELEMENT_NODE) {
            compiler(node, data);
        }
    }

}