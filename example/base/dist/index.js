'use strict';

function render(data) {
                var keyArr = [], valArr = [];
                data = data || {};
                data.__encodeHTML__ = template.__encodeHTML;
                for(var key in data) {
                    keyArr.push('"' + key + '"');
                    valArr.push(data[key]);
                }
                var source = 'new Function(' + keyArr.join(',') + ', "\\"use strict\\";var __code__ = \\"\\";;__code__ += (\\"<div>     test     \\");__code__ += (__encodeHTML__(typeof (name) === \\"undefined\\" ? \\"\\" : name));__code__ += (\\"     <span>         rrr     </span> </div>\\");return __code__")';
                try {
                    var fn = eval(source);
                    var html = fn.apply(null, valArr);
                } catch (e) {
                    e.name = 'RenderError';
                    e.tpl = 'test.tmpl';
                    template.__handelError(e);
                    return 'template.js error';
                }
                
                return html;
            }

document.querySelector('#container').innerHTML = render({ name: 'yanhaijing' });
