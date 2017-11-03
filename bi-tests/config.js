var BI = {};
var a = 1;
BI.contentFormat = function () {
    return a++;
};

var barChartOptions = {
    "plotOptions": {
        "dataLabels": {
            "formatter": {"identifier": "${VALUE}"},
            "connectorWidth": 1,
            "autoAdjust": true,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "align": "outside",
            "enabled": true
        },
        "connectNulls": true,
        "borderWidth": 0,
        "tooltip": {
            "padding": 10,
            "shared": false,
            "backgroundColor": "#ffffff",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {"fontFamily": "Verdana", "color": "#1a1a1a", "fontSize": "14px"},
            "enabled": true,
            "animation": true
        },
        "inverted": false,
        "animation": true
    },
    "yAxis": [{
        "gridLineColor": "#dddddd",
        "lineColor": "#dddddd",
        "plotLines": [],
        "type": "value",
        "title": {
            "rotation": 90,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "text": "销售额(万)"
        },
        "showLabel": true,
        "lineWidth": 1,
        "formatter": "function(){return BI.contentFormat(arguments[0], \"#,###.##\")}",
        "gridLineWidth": 1,
        "maxHeight": "30%",
        "labelStyle": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "position": "left",
        "labelRotation": 0,
        "reversed": false,
        "maxWidth": "30%"
    }, {
        "gridLineColor": "#dddddd",
        "lineColor": "#dddddd",
        "plotLines": [],
        "type": "value",
        "title": {
            "rotation": 90,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "text": ""
        },
        "showLabel": true,
        "lineWidth": 1,
        "formatter": "function(){return BI.contentFormat(arguments[0], \"#,###.##\")}",
        "gridLineWidth": 0,
        "maxHeight": "30%",
        "labelStyle": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "position": "right",
        "labelRotation": 0,
        "reversed": false,
        "maxWidth": "30%"
    }, {
        "gridLineColor": "#dddddd",
        "lineColor": "#dddddd",
        "plotLines": [],
        "type": "value",
        "title": {
            "rotation": 90,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "text": ""
        },
        "showLabel": true,
        "lineWidth": 1,
        "formatter": "function(){return BI.contentFormat(arguments[0], \"#,###.##\")}",
        "gridLineWidth": 0,
        "maxHeight": "30%",
        "labelStyle": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "position": "right",
        "labelRotation": 0,
        "reversed": false,
        "maxWidth": "30%"
    }],
    "xAxis": [{
        "gridLineColor": "#dddddd",
        "gridLineWidth": 1,
        "maxHeight": "30%",
        "labelStyle": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "lineColor": "#dddddd",
        "position": "bottom",
        "type": "category",
        "title": {
            "rotation": 0,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "text": ""
        },
        "labelRotation": 0,
        "showLabel": true,
        "reversed": false,
        "maxWidth": "30%"
    }],
    "data": {
        "s": [5.2904527E7],
        "c": [{"s": [4181450], "x": 1, "n": "床上用品"}, {"s": [9866262], "x": 1, "n": "兒童服裝"}, {
            "s": [1.4453957E7],
            "x": 1,
            "n": "男仕配飾"
        }, {"s": [1416877], "x": 1, "n": "男仕皮鞋"}, {"s": [1221876], "x": 1, "n": "男仕輕便服裝"}, {
            "s": [2183940],
            "x": 1,
            "n": "女仕內衣"
        }, {"s": [5692346], "x": 1, "n": "女仕皮鞋"}, {"s": [1571104], "x": 1, "n": "女仕輕便服裝"}, {
            "s": [2004766],
            "x": 1,
            "n": "女仕上班服裝"
        }, {"s": [1.0311949E7], "x": 1, "n": "運動服裝及用品"}],
        "x": 11
    },
    "legend": {
        "visible": true,
        "maxHeight": "30%",
        "style": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "position": "bottom",
        "enabled": true,
        "maxWidth": "30%"
    },
    "series": [{
        "dataLabels": {
            "formatter": {
                "identifier": "${VALUE}",
                "arrivalRateFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}",
                "valueFormat": "function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}",
                "percentFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}"
            },
            "connectorWidth": 1,
            "autoAdjust": true,
            "style": {
                "fontFamily": "Microsoft YaHei",
                "color": "#1a1a1a",
                "fontSize": "12px",
                "fontStyle": "",
                "fontWeight": ""
            },
            "align": "outside",
            "enabled": true
        },
        "yAxis": 0,
        "dimensionIDs": ["293549cdd2b0a373"],
        "data": [{"x": "床上用品", "y": "418.14", "longDate": "床上用品"}, {
            "x": "兒童服裝",
            "y": "986.63",
            "longDate": "兒童服裝"
        }, {"x": "男仕配飾", "y": "1445.4", "longDate": "男仕配飾"}, {
            "x": "男仕皮鞋",
            "y": "141.69",
            "longDate": "男仕皮鞋"
        }, {"x": "男仕輕便服裝", "y": "122.19", "longDate": "男仕輕便服裝"}, {
            "x": "女仕內衣",
            "y": "218.39",
            "longDate": "女仕內衣"
        }, {"x": "女仕皮鞋", "y": "569.23", "longDate": "女仕皮鞋"}, {
            "x": "女仕輕便服裝",
            "y": "157.11",
            "longDate": "女仕輕便服裝"
        }, {"x": "女仕上班服裝", "y": "200.48", "longDate": "女仕上班服裝"}, {
            "x": "運動服裝及用品",
            "y": "1031.19",
            "longDate": "運動服裝及用品"
        }],
        "targetIDs": ["98bd8aaed87e37a8"],
        "name": "销售额",
        "tooltip": {
            "formatter": {
                "identifier": "${CATEGORY}${SERIES}${VALUE}",
                "arrivalRateFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}",
                "valueFormat": "function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"万\"}",
                "percentFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}"
            },
            "padding": 10,
            "shared": false,
            "backgroundColor": "#ffffff",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {"fontFamily": "Verdana", "color": "#1a1a1a", "fontSize": "14px"},
            "enabled": true,
            "animation": true
        },
        "type": "column"
    }],
    "chartType": "column",
    "style": "normal",
    "tools": {
        "hidden": false,
        "toImage": {"enabled": false},
        "refresh": {"enabled": false},
        "sort": {"enabled": false},
        "fullScreen": {"enabled": false}
    },
    "dataSheet": {
        "borderColor": "#dddddd",
        "borderWidth": 1,
        "style": {
            "fontFamily": "Microsoft YaHei",
            "color": "#1a1a1a",
            "fontSize": "12px",
            "fontStyle": "",
            "fontWeight": ""
        },
        "enabled": false
    },
    "colors": ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#7cb5ec", "#434348", "#90ed7d", "#f7a35c"]
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
