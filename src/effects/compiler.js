import $ from 'jquery';
export const addHtmlToBody = (htmlStr) => {
    $('body').append(htmlStr);
}
export const clearBodyContent = ()=>{
    $('body').html('');
}