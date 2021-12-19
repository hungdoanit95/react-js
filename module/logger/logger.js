import TYPE_LOG from '../constants.js';
function logger(text='',type=TYPE_LOG){
    console[type](text);
}
export default logger;