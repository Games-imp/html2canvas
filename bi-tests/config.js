var BI = {};
BI.contentFormat = function () {
    return 123;
};
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
        "name": "中国",
        "zoom": true
    },
    "series": [{
        "dimensionIDs": ["cbd4d3f95a35ce18"],
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
        }, {"name": "湖南省", "value": "101"}],
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
        "enabled": true
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
