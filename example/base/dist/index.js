'use strict';

function render(__data__) {
    var __root__ = (typeof self === 'object' && self.self === self && self) ||
        (typeof global === 'object' && global.global === global && global) || this;
        var name = __data__['name'] || __root__['name'];
    var b = __data__['b'] || __root__['b'];
    var if1 = __data__['if1'] || __root__['if1'];
    var for1 = __data__['for1'] || __root__['for1'];
    var yan6 = __data__['yan6'] || __root__['yan6'];
    var console = __data__['console'] || __root__['console'];
    var aa1 = __data__['aa1'] || __root__['aa1'];
    var aaif1 = __data__['aaif1'] || __root__['aaif1'];
    var aaiffor1 = __data__['aaiffor1'] || __root__['aaiffor1'];
    var window = __data__['window'] || __root__['window'];
    var document = __data__['document'] || __root__['document'];
    try {
        var __code__ = '';
        var __encodeHTML__ = template.__encodeHTML;
        ;__code__ += ("<div>     test     ")
;__code__ += (__encodeHTML__(typeof (name) === "undefined" ? "" : name))
;__code__ += ("     ")
;var a = 1
;__code__ += ("     <span>         ")
;if (b) {
;__code__ += ("             ")
;const yan = 3
;__code__ += ("             ")
;__code__ += (__encodeHTML__(typeof (yan) === "undefined" ? "" : yan))
;__code__ += ("             ")
;if (1) {
;__code__ += ("                 ")
;__code__ += (__encodeHTML__(typeof (if1) === "undefined" ? "" : if1))
;__code__ += ("             ")
;}
;__code__ += ("             ")
;for(let i = 1; i < 10; i++) {
;__code__ += ("                 ")
;__code__ += (__encodeHTML__(typeof (i) === "undefined" ? "" : i))
;__code__ += ("                 ")
;__code__ += (__encodeHTML__(typeof (for1) === "undefined" ? "" : for1))
;__code__ += ("             ")
;}
;__code__ += ("             ")
;for (let i in yan6) {}
;__code__ += ("             ")
;function aa(aa) {
                console.log(aa);
                console.log(aa1);
                if (1) {
                    console.log(aaif1);
                    for (;;) {
                        console.log(aaiffor1);
                    }
                }
            }
;__code__ += ("         ")
;}
;__code__ += ("         ")
;__code__ += (__encodeHTML__(typeof (window) === "undefined" ? "" : window))
;__code__ += ("         ")
;__code__ += (__encodeHTML__(typeof (window.yan) === "undefined" ? "" : window.yan))
;__code__ += ("         ")
;__code__ += (__encodeHTML__(typeof (window.document) === "undefined" ? "" : window.document))
;__code__ += ("         ")
;__code__ += (__encodeHTML__(typeof (window.document.getElementById) === "undefined" ? "" : window.document.getElementById))
;__code__ += ("         ")
;__code__ += (__encodeHTML__(typeof (document) === "undefined" ? "" : document))
;__code__ += ("     </span> </div>");


        return __code__;
    } catch(e) {
        e.name = 'RenderError';
        e.tpl = 'test.tmpl';
        template.__handelError(e);
        return 'template.js error';
    }
}

document.querySelector('#container').innerHTML = render({ name: 'yanhaijing' });
