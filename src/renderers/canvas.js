var Renderer = require('../renderer');
var LinearGradientContainer = require('../lineargradientcontainer');
var log = require('../log');

function CanvasRenderer(width, height) {
    Renderer.apply(this, arguments);
    this.canvas = this.options.canvas || this.document.createElement("canvas");
    if (!this.options.canvas) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    this.ctx = this.canvas.getContext("2d");
    this.taintCtx = this.document.createElement("canvas").getContext("2d");
    this.ctx.textBaseline = "bottom";
    this.variables = {};
    log("Initialized CanvasRenderer with size", width, "x", height);
}

CanvasRenderer.prototype = Object.create(Renderer.prototype);

CanvasRenderer.prototype.setFillStyle = function (fillStyle) {
    this.ctx.fillStyle = typeof (fillStyle) === "object" && !!fillStyle.isColor ? fillStyle.toString() : fillStyle;
    return this.ctx;
};

CanvasRenderer.prototype.rectangle = function (left, top, width, height, color) {
    this.setFillStyle(color).fillRect(left, top, width, height);
};

CanvasRenderer.prototype.circle = function (left, top, size, color) {
    this.setFillStyle(color);
    this.ctx.beginPath();
    this.ctx.arc(left + size / 2, top + size / 2, size / 2, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fill();
};

CanvasRenderer.prototype.circleStroke = function (left, top, size, color, stroke, strokeColor) {
    this.circle(left, top, size, color);
    this.ctx.strokeStyle = strokeColor.toString();
    this.ctx.stroke();
};

CanvasRenderer.prototype.drawShape = function (shape, color) {
    this.shape(shape);
    this.setFillStyle(color).fill();
};

CanvasRenderer.prototype.taints = function (imageContainer) {
    if (imageContainer.tainted === null) {
        this.taintCtx.drawImage(imageContainer.image, 0, 0);
        try {
            this.taintCtx.getImageData(0, 0, 1, 1);
            imageContainer.tainted = false;
        } catch (e) {
            this.taintCtx = document.createElement("canvas").getContext("2d");
            imageContainer.tainted = true;
        }
    }

    return imageContainer.tainted;
};

CanvasRenderer.prototype.drawImage = function (imageContainer, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (!this.taints(imageContainer) || this.options.allowTaint) {
        this.ctx.drawImage(imageContainer.image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
};

CanvasRenderer.prototype.clip = function (shapes, callback, context, container) {
    this.ctx.save();

    if (container && container.hasTransform()) {
        var len = shapes.length;
        var calOffset = function (shape, scale, offSetX, offSetY) {
            var temp = [];
            for (var i = 0, currShapeLen = shape.length; i < currShapeLen; i++) {
                var arr = [];
                for (var j = 0, length = shape[i].length; j < length; j++) {
                    arr.push(shape[i][j]);
                }
                temp.push(arr);
            }
            temp[1][1] = temp[2][1] = (temp[1][1] - temp[0][1]) / scale + temp[0][1];
            temp[2][2] = temp[3][2] = (temp[2][2] - temp[1][2]) / scale + temp[1][2];
            temp[0][1] -= offSetX / scale;
            temp[0][2] -= offSetY / scale;
            temp[1][1] -= offSetX / scale;
            temp[1][2] -= offSetY / scale;
            temp[2][1] -= offSetX / scale;
            temp[2][2] -= offSetY / scale;
            temp[3][1] -= offSetX / scale;
            temp[3][2] -= offSetY / scale;
            return temp;
        };
        //BI-11228 leaflet地图图层的特殊处理
        var isMapBGImage = container.node.nodeName === 'IMG' && container.node.parentNode.className.indexOf('leaflet-tile-container') > -1;
        if (isMapBGImage) {
            var p = container.parent.parent.parent.parent;
            var offSetX = p.transformMatrix[4] + container.parent.transformMatrix[4];
            var offSetY = p.transformMatrix[5] + container.parent.transformMatrix[5];
            var scale = container.parent && container.transformMatrix ? container.parent.transformMatrix[0] : 1;

            if (shapes[0]) {
                shapes[0] = calOffset(shapes[0], scale, offSetX, offSetY);
            }
            if (shapes[1]) {
                shapes[1] = calOffset(shapes[1], scale, offSetX, offSetY);
            }

            if (shapes[len - 1]) {
                shapes[len - 1][0][1] += container.transformMatrix[4];
                shapes[len - 1][0][2] += container.transformMatrix[5];
                shapes[len - 1][1][1] += container.transformMatrix[4];
                shapes[len - 1][1][2] += container.transformMatrix[5];
                shapes[len - 1][2][1] += container.transformMatrix[4];
                shapes[len - 1][2][2] += container.transformMatrix[5];
                shapes[len - 1][3][1] += container.transformMatrix[4];
                shapes[len - 1][3][2] += container.transformMatrix[5];
            }
        }
        // var isMaptile = container.node.className.indexOf('leaflet-tile-container') > -1;
        this.setTransform(container.inverseTransform());
        shapes.filter(hasEntries).forEach(function (shape) {
            // if (isMaptile) {
            //     // class为leaflet-tile-container的元素css中有scale属性，有缩放会使地图显示不全。
            //     var w = shape[1][1] - shape[0][1];
            //     var gap = ((w) / container.transformMatrix[0]) - w;
            //     shape[1][1] += gap;
            //     shape[2][1] += gap;
            //     shape[2][2] += gap;
            //     shape[3][2] += gap;
            // }
            this.shape(shape).clip();
        }, this);
        this.setTransform(container.parseTransform());
    } else {
        shapes.filter(hasEntries).forEach(function (shape) {
            this.shape(shape).clip();
        }, this);
    }
    callback.call(context);
    this.ctx.restore();
};

CanvasRenderer.prototype.shape = function (shape) {
    this.ctx.beginPath();
    shape.forEach(function (point, index) {
        if (point[0] === "rect") {
            this.ctx.rect.apply(this.ctx, point.slice(1));
        } else {
            this.ctx[(index === 0) ? "moveTo" : point[0] + "To"].apply(this.ctx, point.slice(1));
        }
    }, this);
    this.ctx.closePath();
    return this.ctx;
};

CanvasRenderer.prototype.font = function (color, style, variant, weight, size, family) {
    this.setFillStyle(color).font = [style, variant, weight, size, family].join(" ").split(",")[0];
};

CanvasRenderer.prototype.fontShadow = function (color, offsetX, offsetY, blur) {
    this.setVariable("shadowColor", color.toString())
        .setVariable("shadowOffsetY", offsetX)
        .setVariable("shadowOffsetX", offsetY)
        .setVariable("shadowBlur", blur);
};

CanvasRenderer.prototype.clearShadow = function () {
    this.setVariable("shadowColor", "rgba(0,0,0,0)");
};

CanvasRenderer.prototype.setOpacity = function (opacity) {
    this.ctx.globalAlpha = opacity;
};

CanvasRenderer.prototype.setTransform = function (transform) {
    this.ctx.translate(transform.origin[0], transform.origin[1]);
    this.ctx.transform.apply(this.ctx, transform.matrix);
    this.ctx.translate(-transform.origin[0], -transform.origin[1]);
};

CanvasRenderer.prototype.setVariable = function (property, value) {
    if (this.variables[property] !== value) {
        this.variables[property] = this.ctx[property] = value;
    }

    return this;
};

CanvasRenderer.prototype.text = function (text, left, bottom) {
    //bug appears when using fabric to convert svg to canvas
    this.ctx.fillText(text, left, bottom);
};

CanvasRenderer.prototype.backgroundRepeatShape = function (imageContainer, backgroundPosition, size, bounds, left, top, width, height, borderData) {
    var shape = [
        ["line", Math.round(left), Math.round(top)],
        ["line", Math.round(left + width), Math.round(top)],
        ["line", Math.round(left + width), Math.round(height + top)],
        ["line", Math.round(left), Math.round(height + top)]
    ];
    this.clip([shape], function () {
        this.renderBackgroundRepeat(imageContainer, backgroundPosition, size, bounds, borderData[3], borderData[0]);
    }, this);
};

CanvasRenderer.prototype.renderBackgroundRepeat = function (imageContainer, backgroundPosition, size, bounds, borderLeft, borderTop) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left + borderLeft),
        offsetY = Math.round(bounds.top + backgroundPosition.top + borderTop);
    this.setFillStyle(this.ctx.createPattern(this.resizeImage(imageContainer, size), "repeat"));
    this.ctx.translate(offsetX, offsetY);
    this.ctx.fill();
    this.ctx.translate(-offsetX, -offsetY);
};

CanvasRenderer.prototype.renderBackgroundGradient = function (gradientImage, bounds) {
    if (gradientImage instanceof LinearGradientContainer) {
        var gradient = this.ctx.createLinearGradient(
            bounds.left + bounds.width * gradientImage.x0,
            bounds.top + bounds.height * gradientImage.y0,
            bounds.left + bounds.width * gradientImage.x1,
            bounds.top + bounds.height * gradientImage.y1);
        gradientImage.colorStops.forEach(function (colorStop) {
            gradient.addColorStop(colorStop.stop, colorStop.color.toString());
        });
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, gradient);
    }
};

CanvasRenderer.prototype.resizeImage = function (imageContainer, size) {
    var image = imageContainer.image;
    if (image.width === size.width && image.height === size.height) {
        return image;
    }

    var ctx, canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
    return canvas;
};

function hasEntries(array) {
    return array.length > 0;
}

module.exports = CanvasRenderer;
