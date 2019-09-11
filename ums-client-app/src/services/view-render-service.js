/*
    This function parses the html or any string, for Interpolator symbols and 
    evaluates the placeholders and replaces them within the string/html.
    @d: data object whose properties will be rendered in placeholders
    @l: the Locale Labels or Text to be rendered in the template
*/
export default (htmlStr, d, l) => {
    if (!htmlStr) {
        return '';
    }
    if (typeof htmlStr != 'string') {
        console.error('View renderer ERROR: ', 'The first argument must be of type string');
    }
    let arrL1 = htmlStr.split('{{');
    let ResultArray = [];
    arrL1.map(str => {
        let arrL2 = str.split('}}');
        let staticStr;
        let expression;
        let expresionValue = '';
        if (arrL2.length === 1) {
            staticStr = arrL2[0];
        } else {
            staticStr = arrL2[1];
            expression = arrL2[0];
            try {
                expresionValue = eval(expression);
            } catch (err) {
                // console.error(err);
            }
        }
        ResultArray.push(expresionValue);
        ResultArray.push(staticStr);        
   })
   return ResultArray.join('');
}