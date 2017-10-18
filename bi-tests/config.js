var BI = {};
BI.contentFormat = function () {
    return 123;
};
var options = {
    "plotOptions": {
        "dataLabels": {
            "formatter": {
                "identifier": "${VALUE}"
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
        "connectNulls": true,
        "large": false,
        "shadow": false,
        "sizeBy": "width",
        "borderWidth": 0,
        "marker": {
            "symbol": "square",
            "enabled": true
        },
        "tooltip": {
            "padding": 10,
            "shared": false,
            "backgroundColor": "#ffffff",
            "borderRadius": 2,
            "shadow": true,
            "borderWidth": 0,
            "style": {
                "fontFamily": "Verdana",
                "color": "#1a1a1a",
                "fontSize": "14px"
            },
            "enabled": true,
            "animation": true
        },
        "minSize": 12,
        "maxSize": 40,
        "inverted": false,
        "animation": true
    },
    "yAxis": {},
    "xAxis": {},
    "data": {
        "s": [
            151
        ],
        "c": [
            {
                "s": [
                    16
                ],
                "x": 1,
                "n": "01"
            },
            {
                "s": [
                    15
                ],
                "x": 1,
                "n": "0101"
            },
            {
                "s": [
                    11
                ],
                "x": 1,
                "n": "010101"
            },
            {
                "s": [
                    11
                ],
                "x": 1,
                "n": "010102"
            },
            {
                "s": [
                    11
                ],
                "x": 1,
                "n": "0102"
            },
            {
                "s": [
                    11
                ],
                "x": 1,
                "n": "0103"
            },
            {
                "s": [
                    19
                ],
                "x": 1,
                "n": "2011"
            },
            {
                "s": [
                    19
                ],
                "x": 1,
                "n": "2011.01"
            },
            {
                "s": [
                    19
                ],
                "x": 1,
                "n": "2011.01.001"
            },
            {
                "s": [
                    19
                ],
                "x": 1,
                "n": "2011.01.002"
            }
        ],
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
    "series": [
        {
            "dataLabels": {
                "formatter": {
                    "identifier": "${VALUE}",
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
            "yAxis": 0,
            "dimensionIDs": [
                "f0a2c22c262c8304"
            ],
            "data": [
                {
                    "x": "01",
                    "y": "16",
                    "longDate": "01"
                },
                {
                    "x": "0101",
                    "y": "15",
                    "longDate": "0101"
                },
                {
                    "x": "010101",
                    "y": "11",
                    "longDate": "010101"
                },
                {
                    "x": "010102",
                    "y": "11",
                    "longDate": "010102"
                },
                {
                    "x": "0102",
                    "y": "11",
                    "longDate": "0102"
                },
                {
                    "x": "0103",
                    "y": "11",
                    "longDate": "0103"
                },
                {
                    "x": "2011",
                    "y": "19",
                    "longDate": "2011"
                },
                {
                    "x": "2011.01",
                    "y": "19",
                    "longDate": "2011.01"
                },
                {
                    "x": "2011.01.001",
                    "y": "19",
                    "longDate": "2011.01.001"
                },
                {
                    "x": "2011.01.002",
                    "y": "19",
                    "longDate": "2011.01.002"
                }
            ],
            "targetIDs": [
                "0ca252249e64326a"
            ],
            "name": "厂家维度表记录数",
            "tooltip": {
                "formatter": {
                    "identifier": "${CATEGORY}${SERIES}${VALUE}",
                    "arrivalRateFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}",
                    "valueFormat": "function(){return BI.contentFormat(arguments[0], \"#,###.##\") + \"\"}",
                    "percentFormat": "function(){return BI.contentFormat(arguments[0], \"#.##%\")}"
                },
                "padding": 10,
                "shared": false,
                "backgroundColor": "#ffffff",
                "borderRadius": 2,
                "shadow": true,
                "borderWidth": 0,
                "style": {
                    "fontFamily": "Verdana",
                    "color": "#1a1a1a",
                    "fontSize": "14px"
                },
                "enabled": true,
                "animation": true
            },
            "type": "forceBubble"
        }
    ],
    "chartType": "forceBubble",
    "style": "normal",
    "tools": {
        "hidden": false,
        "toImage": {
            "enabled": false
        },
        "refresh": {
            "enabled": false
        },
        "sort": {
            "enabled": false
        },
        "fullScreen": {
            "enabled": false
        }
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
    "colors": [
        "#00c5dc",
        "#5867c3",
        "#ff525e",
        "#ffa9cc",
        "#ffaa00",
        "#ffdb03",
        "#9ccc66",
        "#36c398",
        "#00a7af",
        "#2281bc",
        "#766aef",
        "#c576d3",
        "#00c5dc",
        "#5867c3",
        "#ff525e",
        "#ffa9cc",
        "#ffaa00",
        "#ffdb03",
        "#9ccc66",
        "#36c398",
        "#00a7af",
        "#2281bc",
        "#766aef",
        "#c576d3",
        "#00c5dc",
        "#5867c3",
        "#ff525e",
        "#ffa9cc",
        "#ffaa00",
        "#ffdb03",
        "#9ccc66",
        "#36c398"
    ]
};
