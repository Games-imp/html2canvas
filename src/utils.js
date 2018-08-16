exports.smallImage = function smallImage() {
    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
};

exports.bind = function (callback, context) {
    return function () {
        return callback.apply(context, arguments);
    };
};

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

exports.decode64 = function (base64) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var len = base64.length, i, encoded1, encoded2, encoded3, encoded4, byte1, byte2, byte3;

    var output = "";

    for (i = 0; i < len; i += 4) {
        encoded1 = chars.indexOf(base64[i]);
        encoded2 = chars.indexOf(base64[i + 1]);
        encoded3 = chars.indexOf(base64[i + 2]);
        encoded4 = chars.indexOf(base64[i + 3]);

        byte1 = (encoded1 << 2) | (encoded2 >> 4);
        byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        byte3 = ((encoded3 & 3) << 6) | encoded4;
        if (encoded3 === 64) {
            output += String.fromCharCode(byte1);
        } else if (encoded4 === 64 || encoded4 === -1) {
            output += String.fromCharCode(byte1, byte2);
        } else {
            output += String.fromCharCode(byte1, byte2, byte3);
        }
    }

    return output;
};

exports.getBounds = function (node) {
    if (node.getBoundingClientRect) {
        var clientRect = node.getBoundingClientRect();
        var width = node.offsetWidth == null ? clientRect.width : node.offsetWidth;
        // ie10 这边做一下恶心的处理 ie10下 getBoundingClientRect得到的top不是svg距离页面顶端的高度，先设置为0
        var top = node.nodeName === 'svg' && (BI && BI.isIE && BI.isIE() && BI.getIEVersion() === 10) ? (clientRect.top - clientRect.height) : clientRect.top;
        var bottom = node.nodeName === 'svg' && (BI && BI.isIE && BI.isIE() && BI.getIEVersion() === 10) ? (clientRect.bottom - clientRect.height) : clientRect.bottom;
        return {
            top: top,
            bottom: bottom || (clientRect.top + clientRect.height),
            right: clientRect.left + width,
            left: clientRect.left,
            width: width,
            height: node.offsetHeight == null ? clientRect.height : node.offsetHeight
        };
    }
    return {};
};

exports.getBoundingBoxInArbitrarySpace = function (element, mat) {
    var svgRoot = element.ownerSVGElement || element;
    var bbox = element.getBBox();

    var cPt1 = svgRoot.createSVGPoint();
    cPt1.x = bbox.x;
    cPt1.y = bbox.y;
    cPt1 = cPt1.matrixTransform(mat);

    // repeat for other corner points and the new bbox is
    // simply the minX/minY  to maxX/maxY of the four points.
    var cPt2 = svgRoot.createSVGPoint();
    cPt2.x = bbox.x + bbox.width;
    cPt2.y = bbox.y;
    cPt2 = cPt2.matrixTransform(mat);

    var cPt3 = svgRoot.createSVGPoint();
    cPt3.x = bbox.x;
    cPt3.y = bbox.y + bbox.height;
    cPt3 = cPt3.matrixTransform(mat);

    var cPt4 = svgRoot.createSVGPoint();
    cPt4.x = bbox.x + bbox.width;
    cPt4.y = bbox.y + bbox.height;
    cPt4 = cPt4.matrixTransform(mat);

    var points = [cPt1, cPt2, cPt3, cPt4];

    //find minX,minY,maxX,maxY
    var minX = Number.MAX_VALUE;
    var minY = Number.MAX_VALUE;
    var maxX = 0;
    var maxY = 0;
    for (var i = 0; i < points.length; i++) {
        if (points[i].x < minX) {
            minX = points[i].x;
        }
        if (points[i].y < minY) {
            minY = points[i].y;
        }
        if (points[i].x > maxX) {
            maxX = points[i].x;
        }
        if (points[i].y > maxY) {
            maxY = points[i].y;
        }
    }

    //instantiate new object that is like an SVGRect
    var newBBox = {"x": minX, "y": minY, "width": maxX - minX, "height": maxY - minY};
    return newBBox;
};

exports.getBBoxInScreenSpace = function (element) {
    return exports.getBoundingBoxInArbitrarySpace(element, element.getScreenCTM());
};

exports.offsetBounds = function (node, matrix) {

    if (node.tagName === 'svg' || node.tagName === 'path') {
        var bounds = exports.getBounds(node);
        if (exports.isEmptyObject(bounds)) {
            return bounds;
        }

        return {
            top: -matrix[5] + bounds.top,
            bottom: bounds.bottom,
            right: bounds.right,
            left: -matrix[4] + bounds.left,
            width: bounds.width,
            height: bounds.height
        };
    }

    var parent = node.offsetParent ? exports.offsetBounds(node.offsetParent) : {top: 0, left: 0};

    return {
        top: node.offsetTop + parent.top,
        bottom: node.offsetTop + node.offsetHeight + parent.top,
        right: node.offsetLeft + parent.left + node.offsetWidth,
        left: node.offsetLeft + parent.left,
        width: node.offsetWidth,
        height: node.offsetHeight
    };
};

exports.parseBackgrounds = function (backgroundImage) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        mode = 0, numParen = 0, quote, args;
    var appendResult = function () {
        if (method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }
            if (definition) {
                args.push(definition);
            }
            if (method.substr(0, 1) === '-' && (prefix_i = method.indexOf('-', 1) + 1) > 0) {
                prefix = method.substr(0, prefix_i);
                method = method.substr(prefix_i);
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args,
                image: null
            });
        }
        args = [];
        method = prefix = definition = block = '';
    };
    args = [];
    method = prefix = definition = block = '';
    backgroundImage.split("").forEach(function (c) {
        if (mode === 0 && whitespace.indexOf(c) > -1) {
            return;
        }
        switch (c) {
            case '"':
                if (!quote) {
                    quote = c;
                } else if (quote === c) {
                    quote = null;
                }
                break;
            case '(':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    mode = 1;
                    block += c;
                    return;
                } else {
                    numParen++;
                }
                break;
            case ')':
                if (quote) {
                    break;
                } else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        block += c;
                        appendResult();
                        return;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition);
                        definition = '';
                        block += c;
                        return;
                    }
                }
                break;
        }

        block += c;
        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};

exports.isEmptyObject = function isEmptyObject(e) {
    var t;
    for (t in e) {
        return !1;
    }
    return !0;
};
