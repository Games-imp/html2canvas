var BI = {};
var a = 1;
BI.contentFormat = function () {
    return a++;
};

var barChartOptions = {"plotOptions":{"dataLabels":{"formatter":{"identifier":"${VALUE}"},"connectorWidth":1,"autoAdjust":true,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"align":"outside","enabled":true},"connectNulls":true,"borderWidth":0,"marker":{"symbol":"circle","radius":4.5,"enabled":true},"tooltip":{"formatter":{"identifier":"${CATEGORY}${SERIES}${VALUE}"},"padding":10,"shared":true,"backgroundColor":"#ffffff","borderRadius":2,"shadow":true,"borderWidth":0,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"enabled":true,"animation":true},"inverted":false,"animation":true},"yAxis":[{"gridLineColor":"#dddddd","lineColor":"#dddddd","plotLines":[],"type":"value","title":{"rotation":90,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"text":"浏览量"},"showLabel":true,"lineWidth":1,"formatter":"function(){return BI.contentFormat(arguments[0], \"#,###.##\")}","gridLineWidth":1,"maxHeight":"30%","labelStyle":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"position":"left","labelRotation":0,"reversed":false,"maxWidth":"30%"},{"gridLineColor":"#dddddd","lineColor":"#dddddd","plotLines":[],"type":"value","title":{"rotation":90,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"text":""},"showLabel":true,"lineWidth":1,"formatter":"function(){return BI.contentFormat(arguments[0], \"#,###.##\")}","gridLineWidth":0,"maxHeight":"30%","labelStyle":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"position":"right","labelRotation":0,"reversed":false,"maxWidth":"30%"},{"gridLineColor":"#dddddd","lineColor":"#dddddd","plotLines":[],"type":"value","title":{"rotation":90,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"text":""},"showLabel":true,"lineWidth":1,"formatter":"function(){return BI.contentFormat(arguments[0], \"#,###.##\")}","gridLineWidth":0,"maxHeight":"30%","labelStyle":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"position":"right","labelRotation":0,"reversed":false,"maxWidth":"30%"}],"xAxis":[{"gridLineColor":"#dddddd","gridLineWidth":1,"maxHeight":"30%","labelStyle":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"lineColor":"#dddddd","position":"bottom","type":"category","title":{"rotation":0,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"text":""},"labelRotation":0,"showLabel":true,"reversed":false,"maxWidth":"30%"}],"data":{"s":[23345,8065,8974],"c":[{"s":[4897,1723,1837],"x":1,"n":"基础上线工作"},{"s":[4533,1520,1731],"x":1,"n":"轮台、贴吧推广"},{"s":[3216,1129,1240],"x":1,"n":"品牌基础推广"},{"s":[1362,473,535],"x":1,"n":"事件营销"},{"s":[1142,380,442],"x":1,"n":"手机厂商预装"},{"s":[1177,396,434],"x":1,"n":"水货刷机"},{"s":[2138,725,889],"x":1,"n":"微博推广"},{"s":[3830,1337,1475],"x":1,"n":"微信推广"},{"s":[1050,382,391],"x":1,"n":"行货店面"}],"x":10},"legend":{"visible":true,"maxHeight":"30%","style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"position":"bottom","enabled":true,"maxWidth":"30%"},"series":[{"dataLabels":{"formatter":{"identifier":"${VALUE}","arrivalRateFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}","valueFormat":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","percentFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}"},"connectorWidth":1,"autoAdjust":true,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"align":"outside","enabled":true},"yAxis":0,"dimensionIDs":["fc3b6bc62a22e64e"],"data":[{"x":"基础上线工作","y":"4897","longDate":"基础上线工作"},{"x":"轮台、贴吧推广","y":"4533","longDate":"轮台、贴吧推广"},{"x":"品牌基础推广","y":"3216","longDate":"品牌基础推广"},{"x":"事件营销","y":"1362","longDate":"事件营销"},{"x":"手机厂商预装","y":"1142","longDate":"手机厂商预装"},{"x":"水货刷机","y":"1177","longDate":"水货刷机"},{"x":"微博推广","y":"2138","longDate":"微博推广"},{"x":"微信推广","y":"3830","longDate":"微信推广"},{"x":"行货店面","y":"1050","longDate":"行货店面"}],"targetIDs":["d1be1deae0145844"],"curve":false,"name":"浏览量","tooltip":{"formatter":{"identifier":"${CATEGORY}${SERIES}${VALUE}","arrivalRateFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}","valueFormat":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","percentFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}"},"padding":10,"shared":true,"backgroundColor":"#ffffff","borderRadius":2,"shadow":true,"borderWidth":0,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"enabled":true,"animation":true},"step":false,"type":"column","dataSheet":{"formatter":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","enabled":true}},{"dataLabels":{"formatter":{"identifier":"${VALUE}","arrivalRateFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}","valueFormat":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","percentFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}"},"connectorWidth":1,"autoAdjust":true,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"align":"outside","enabled":true},"yAxis":1,"dimensionIDs":["fc3b6bc62a22e64e"],"data":[{"x":"基础上线工作","y":"1723","longDate":"基础上线工作"},{"x":"轮台、贴吧推广","y":"1520","longDate":"轮台、贴吧推广"},{"x":"品牌基础推广","y":"1129","longDate":"品牌基础推广"},{"x":"事件营销","y":"473","longDate":"事件营销"},{"x":"手机厂商预装","y":"380","longDate":"手机厂商预装"},{"x":"水货刷机","y":"396","longDate":"水货刷机"},{"x":"微博推广","y":"725","longDate":"微博推广"},{"x":"微信推广","y":"1337","longDate":"微信推广"},{"x":"行货店面","y":"382","longDate":"行货店面"}],"targetIDs":["a28ac19fb2eeaaf4"],"curve":false,"name":"跳出次数","tooltip":{"formatter":{"identifier":"${CATEGORY}${SERIES}${VALUE}","arrivalRateFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}","valueFormat":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","percentFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}"},"padding":10,"shared":true,"backgroundColor":"#ffffff","borderRadius":2,"shadow":true,"borderWidth":0,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"enabled":true,"animation":true},"step":false,"type":"column","dataSheet":{"formatter":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","enabled":true}},{"dataLabels":{"formatter":{"identifier":"${VALUE}","arrivalRateFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}","valueFormat":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","percentFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}"},"connectorWidth":1,"autoAdjust":true,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"align":"outside","enabled":true},"yAxis":1,"dimensionIDs":["fc3b6bc62a22e64e"],"data":[{"x":"基础上线工作","y":"1837","longDate":"基础上线工作"},{"x":"轮台、贴吧推广","y":"1731","longDate":"轮台、贴吧推广"},{"x":"品牌基础推广","y":"1240","longDate":"品牌基础推广"},{"x":"事件营销","y":"535","longDate":"事件营销"},{"x":"手机厂商预装","y":"442","longDate":"手机厂商预装"},{"x":"水货刷机","y":"434","longDate":"水货刷机"},{"x":"微博推广","y":"889","longDate":"微博推广"},{"x":"微信推广","y":"1475","longDate":"微信推广"},{"x":"行货店面","y":"391","longDate":"行货店面"}],"targetIDs":["2f90b464be9c899f"],"curve":false,"name":"访问次数","tooltip":{"formatter":{"identifier":"${CATEGORY}${SERIES}${VALUE}","arrivalRateFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}","valueFormat":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","percentFormat":"function(){return BI.contentFormat(arguments[0], \"#.##%\")}"},"padding":10,"shared":true,"backgroundColor":"#ffffff","borderRadius":2,"shadow":true,"borderWidth":0,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"enabled":true,"animation":true},"step":false,"type":"column","dataSheet":{"formatter":"function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}","enabled":true}}],"chartType":"column","style":"normal","tools":{"hidden":false,"toImage":{"enabled":false},"refresh":{"enabled":false},"sort":{"enabled":false},"fullScreen":{"enabled":false}},"dataSheet":{"borderColor":"#dddddd","borderWidth":1,"style":{"fontFamily":"Microsoft YaHei","color":"#1a1a1a","fontSize":"12px","fontStyle":"","fontWeight":""},"enabled":false},"colors":["#d7f0f7","#99b3cc","#9da5bc","#bec2cd","#beb9c0","#ecaca3","#b28d94","#594662","#4e4967","#384064","#24385d","#16324a","#d7f0f7","#99b3cc","#9da5bc","#bec2cd","#beb9c0","#ecaca3","#b28d94","#594662","#4e4967","#384064","#24385d","#16324a","#d7f0f7","#99b3cc","#9da5bc","#bec2cd","#beb9c0","#ecaca3","#b28d94","#594662"]};

var bubbleMapOptions = {
    "plotOptions": {
        "dataLabels": {"autoAdjust": true, "enabled": false},
        "borderWidth": 1,
        "tooltip": {
            "formatter": {"identifier": "${VALUE}${NAME}${SERIES}"},
            "padding": 10,
            "shared": true,
            "backgroundColor": "#ffffff",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "enabled": true,
            "animation": true
        },
        "animation": true
    },
    "geo": {
        "data": "./mapData/china.json",
        "tileLayer": "",
        "name": "中国(省级)",
        "zoom": true
    },
    "series": [{
        "dimensionIDs": ["27f16cbe848cc541"],
        "data": [{"size": "83", "name": "安徽省"}, {
            "size": "69",
            "name": "福建省"
        }, {"size": "81", "name": "甘肃省"}, {"size": "89", "name": "广东省"}, {
            "size": "93",
            "name": "广西壮族自治区"
        }, {"size": "80", "name": "贵州省"}, {"size": "152", "name": "河北省"}, {
            "size": "128",
            "name": "河南省"
        }, {"size": "78", "name": "黑龙江省"}, {"size": "101", "name": "湖南省"}],
        "targetIDs": ["e8b2690ddf38c303"],
        "name": "城市地区维度表记录数",
        "tooltip": {
            "formatter": {
                "identifier": "${VALUE}${NAME}${SERIES}",
                "arrivalRateFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}",
                "valueFormat": "function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}",
                "percentFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}"
            },
            "padding": 10,
            "shared": true,
            "backgroundColor": "#ffffff",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "enabled": true,
            "animation": true
        },
        "type": "bubble"
    }],
    "chartType": "areaMap",
    "style": "normal",
    "rangeLegend": {
        "visible": true,
        "maxHeight": "30%",
        "continuous": false,
        "range": {"color": "#04b1c2"},
        "style": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "position": "right-bottom",
        "enabled": true,
        "maxWidth": "30%"
    },
    "tools": {
        "hidden": false,
        "toImage": {"enabled": false},
        "refresh": {"enabled": false},
        "sort": {"enabled": false},
        "fullScreen": {"enabled": false}
    },
    "colors": ["#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#00a7af", "#2281bc", "#766aef", "#c576d3", "#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#00a7af", "#2281bc", "#766aef", "#c576d3", "#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#5caae4", "#70cc7f", "#ebbb67", "#e97e7b", "#6ed3c9"],
    "dTools": {
        "backgroundColor": "white",
        "style": {"fontFamily": "Microsoft YaHei", "color": "#b2b2b2", "fontSize": "12px"},
        "currentColor": "62b2ef",
        "enabled": true
    }
};

var areaMapOptions = {
    "plotOptions": {
        "dataLabels": {
            "formatter": {"identifier": "${SIZE}${VALUE}"},
            "connectorWidth": 0,
            "autoAdjust": false,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "align": "center",
            "enabled": true
        },
        "borderWidth": 1,
        "tooltip": {
            "formatter": {"identifier": "${SIZE}${VALUE}${NAME}${SERIES}"},
            "padding": 10,
            "shared": true,
            "backgroundColor": "#884898",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "enabled": true,
            "animation": true
        },
        "animation": true
    },
    "geo": {
        "data": "../mapData/china.json",
        "tileLayer": "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
        "name": "中国",
        "zoom": true
    },
    "data": {
        "s": [2305],
        "c": [{"s": [83], "x": 1, "n": "安徽省"}, {"s": [3], "x": 1, "n": "北京市"}, {
            "s": [69],
            "x": 1,
            "n": "福建省"
        }, {"s": [81], "x": 1, "n": "甘肃省"}, {"s": [89], "x": 1, "n": "广东省"}, {
            "s": [93],
            "x": 1,
            "n": "广西壮族自治区"
        }, {"s": [80], "x": 1, "n": "贵州省"}, {"s": [19], "x": 1, "n": "海南省"}, {
            "s": [152],
            "x": 1,
            "n": "河北省"
        }, {"s": [128], "x": 1, "n": "河南省"}, {"s": [78], "x": 1, "n": "黑龙江省"}, {
            "s": [79],
            "x": 1,
            "n": "湖北省"
        }, {"s": [101], "x": 1, "n": "湖南省"}, {"s": [49], "x": 1, "n": "吉林省"}, {
            "s": [76],
            "x": 1,
            "n": "江苏省"
        }, {"s": [92], "x": 1, "n": "江西省"}, {"s": [57], "x": 1, "n": "辽宁省"}, {
            "s": [37],
            "x": 1,
            "n": "内蒙古自治区"
        }, {"s": [20], "x": 1, "n": "宁夏回族自治区"}, {"s": [40], "x": 1, "n": "青海省"}, {
            "s": [114],
            "x": 1,
            "n": "山东省"
        }, {"s": [107], "x": 1, "n": "山西省"}, {"s": [96], "x": 1, "n": "陕西省"}, {
            "s": [3],
            "x": 1,
            "n": "上海市"
        }, {"s": [162], "x": 1, "n": "四川省"}, {"s": [4], "x": 1, "n": "天津市"}, {
            "s": [78],
            "x": 1,
            "n": "西藏自治区"
        }, {"s": [88], "x": 1, "n": "新疆维吾尔自治区"}, {"s": [125], "x": 1, "n": "云南省"}, {
            "s": [74],
            "x": 1,
            "n": "浙江省"
        }, {"s": [28], "x": 1, "n": "重庆市"}],
        "x": 32
    },
    "series": [{
        "dataLabels": {
            "formatter": {
                "identifier": "${SIZE}${VALUE}",
                "arrivalRateFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}",
                "valueFormat": "function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}",
                "percentFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}"
            },
            "connectorWidth": 0,
            "autoAdjust": false,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "align": "center",
            "enabled": true
        },
        "dimensionIDs": ["0e1edba9078d4382"],
        "data": [{"name": "安徽省", "value": "83"}, {"name": "北京市", "value": "3"}, {
            "name": "福建省",
            "value": "69"
        }, {"name": "甘肃省", "value": "81"}, {"name": "广东省", "value": "89"}, {
            "name": "广西壮族自治区",
            "value": "93"
        }, {"name": "贵州省", "value": "80"}, {"name": "海南省", "value": "19"}, {
            "name": "河北省",
            "value": "152"
        }, {"name": "河南省", "value": "128"}, {"name": "黑龙江省", "value": "78"}, {
            "name": "湖北省",
            "value": "79"
        }, {"name": "湖南省", "value": "101"}, {"name": "吉林省", "value": "49"}, {
            "name": "江苏省",
            "value": "76"
        }, {"name": "江西省", "value": "92"}, {"name": "辽宁省", "value": "57"}, {
            "name": "内蒙古自治区",
            "value": "37"
        }, {"name": "宁夏回族自治区", "value": "20"}, {"name": "青海省", "value": "40"}, {
            "name": "山东省",
            "value": "114"
        }, {"name": "山西省", "value": "107"}, {"name": "陕西省", "value": "96"}, {
            "name": "上海市",
            "value": "3"
        }, {"name": "四川省", "value": "162"}, {"name": "天津市", "value": "4"}, {
            "name": "西藏自治区",
            "value": "78"
        }, {"name": "新疆维吾尔自治区", "value": "88"}, {"name": "云南省", "value": "125"}, {
            "name": "浙江省",
            "value": "74"
        }, {"name": "重庆市", "value": "28"}],
        "targetIDs": ["89f15d49a4d24a5d"],
        "name": "城市地区维度表记录数",
        "tooltip": {
            "formatter": {
                "identifier": "${SIZE}${VALUE}${NAME}${SERIES}",
                "arrivalRateFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}",
                "valueFormat": "function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}",
                "percentFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}"
            },
            "padding": 10,
            "shared": true,
            "backgroundColor": "#884898",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "enabled": true,
            "animation": true
        },
        "type": "areaMap"
    }],
    "chartType": "areaMap",
    "style": "normal",
    "rangeLegend": {
        "visible": true,
        "maxHeight": "30%",
        "continuous": false,
        "range": {"color": "#04b1c2"},
        "style": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "position": "right-bottom",
        "enabled": true,
        "maxWidth": "30%"
    },
    "tools": {
        "hidden": false,
        "toImage": {"enabled": false},
        "refresh": {"enabled": false},
        "sort": {"enabled": false},
        "fullScreen": {"enabled": false}
    },
    "colors": ["#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#00a7af", "#2281bc", "#766aef", "#c576d3", "#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#00a7af", "#2281bc", "#766aef", "#c576d3", "#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#5caae4", "#70cc7f", "#ebbb67", "#e97e7b", "#6ed3c9"],
    "dTools": {
        "backgroundColor": "white",
        "style": {"fontFamily": "Microsoft YaHei", "color": "#b2b2b2", "fontSize": "12px"},
        "currentColor": "62b2ef",
        "enabled": false
    }
};

var dotMapOptions = {
    "plotOptions": {
        "dataLabels": {"autoAdjust": true, "enabled": false},
        "large": false,
        "borderWidth": 0,
        "marker": {"symbol": "location", "radius": 8, "enabled": true},
        "tooltip": {
            "formatter": {"identifier": "${VALUE}${NAME}${SERIES}"},
            "padding": 10,
            "shared": true,
            "backgroundColor": "#ffffff",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "enabled": true,
            "animation": true
        },
        "animation": true
    },
    "geo": {"tileLayer": "", "zoom": true},
    "series": [{
        "dimensionIDs": ["cbd4d3f95a35ce18"],
        "data": [{"lnglat": ["118.3008", "25.9277"], "size": "69", "name": "福建省"}, {
            "lnglat": ["99.7129", "38.166"],
            "size": "81",
            "name": "甘肃省"
        }, {"lnglat": ["113.4668", "22.8076"], "size": "89", "name": "广东省"}, {
            "lnglat": ["107.7813", "23.6426"],
            "size": "93",
            "name": "广西壮族自治区"
        }, {"lnglat": ["115.4004", "39.4688"], "size": "152", "name": "河北省"}, {
            "lnglat": ["113.0668", "33.8818"],
            "size": "128",
            "name": "河南省"
        }, {"lnglat": ["126.1445", "48.7156"], "size": "78", "name": "黑龙江省"}, {
            "lnglat": ["112.2363", "31.1572"],
            "size": "79",
            "name": "湖北省"
        }, {"lnglat": ["111.5332", "27.3779"], "size": "101", "name": "湖南省"}],
        "targetIDs": ["f5960edc174e2355"],
        "name": "城市地区维度表记录数",
        "tooltip": {
            "formatter": {
                "identifier": "${VALUE}${NAME}${SERIES}",
                "arrivalRateFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}",
                "valueFormat": "function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}",
                "percentFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}"
            },
            "padding": 10,
            "shared": true,
            "backgroundColor": "#ffffff",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "enabled": true,
            "animation": true
        },
        "type": "scatter"
    }],
    "chartType": "pointMap",
    "style": "normal",
    "rangeLegend": {
        "visible": true,
        "maxHeight": "30%",
        "continuous": false,
        "range": {"color": ""},
        "style": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "position": "right-bottom",
        "enabled": true,
        "maxWidth": "30%"
    },
    "tools": {
        "hidden": false,
        "toImage": {"enabled": false},
        "refresh": {"enabled": false},
        "sort": {"enabled": false},
        "fullScreen": {"enabled": false}
    },
    "colors": ["#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#00a7af", "#2281bc", "#766aef", "#c576d3", "#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#00a7af", "#2281bc", "#766aef", "#c576d3", "#00c5dc", "#5867c3", "#ff525e", "#ffa9cc", "#ffaa00", "#ffdb03", "#9ccc66", "#36c398", "#5caae4", "#70cc7f", "#ebbb67", "#e97e7b", "#6ed3c9"]
};
