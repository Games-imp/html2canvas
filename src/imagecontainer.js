function ImageContainer(src, cors) {
    this.src = src;
    this.image = new Image();
    var self = this;
    this.tainted = null;
    this.promise = new Promise(function(resolve, reject) {
        self.image.onload = resolve;
        self.image.onerror = reject;
        if (cors) {
            self.image.crossOrigin = "anonymous";
        }
        //BI-12645 chrome会缓存图片 canvas画缓存的图片会跨域
        // wangjun的mapbox 服务器不支持参数id
        if (src.indexOf("wangjun") === -1) {
            var mark = src.indexOf && src.indexOf("?") > -1 ? "&" : "?";
            self.image.src = src + mark + 'id=' + Math.random();
        }
        // self.image.src = src;
        if (self.image.complete === true) {
            resolve(self.image);
        }
    });
}

module.exports = ImageContainer;
