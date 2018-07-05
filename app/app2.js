// const enigma = require('enigma.js');
// const schema = require('enigma.js/schemas/12.20.0.json');
// const WebSocket = require('ws');

// const url = `ws://${process.env.ENGINE_HOST || 'localhost'}:19076/app/`;
// const session = enigma.create({ schema, url, createSocket: url => new WebSocket(url) });
//Kanske behövs?
//session.on('traffic:*', (dir, data) => console.log(dir === 'sent' ? '->' : '<-', JSON.stringify(data)));

async function run() {
    const script = 'LOAD * FROM [lib://prom/Coverage_henrik.qvd](qvd)';
    const global = await session.open();
    const doc = await global.createSessionApp();
    await doc.createConnection({
        qType: 'folder',
        qName: 'prom',
        qConnectionString: '/data',
    });
    await doc.setScript(script);
    const reload = doc.doReload();
    const success = await reload;
    const progress = await global.getProgress(reload.requestId);

    if (!success) {
        throw new Error('Reload failed!');
    }

    const numberOfRows = parseFloat(progress.qTransientProgressMessage.qMessageParameters[0].replace(/,/g, ''));
    //console.log("mjello" + JSON.stringify(progress));
    if (numberOfRows > 0) {
        console.log(`${'-'.repeat(78)}\nTotal number of ${numberOfRows} rows fetched from the Prometheus connector.`);
    } else {
        throw new Error('No rows loaded!');
    }
    /*qInitialDataFetch: [
      {
        qHeight: 5,
        qWidth: 2,
      },
  ],*/
    const obj = await doc.createObject({
        qInfo: {qType: 'my-data-object'},
        qHyperCubeDef: {
            qInitialDataFetch: [
                {
                    qHeight: 2000,
                    qWidth: 4,
                }
            ],
            "qStateName": "",
            "qDimensions": [
                {
                    "qDef": {
                        "qGrouping": "N",
                        "qFieldDefs": [
                            "repository_name"
                        ],
                        "qFieldLabels": [
                            ""
                        ],
                        "qSortCriterias": [
                            {
                                "qSortByState": 0,
                                "qSortByFrequency": 0,
                                "qSortByNumeric": 1,
                                "qSortByAscii": 1,
                                "qSortByLoadOrder": 1,
                                "qSortByExpression": 0,
                                "qExpression": {
                                    "qv": ""
                                },
                                "qSortByGreyness": 0
                            }
                        ],
                        "qNumberPresentations": [],
                        "qReverseSort": false,
                        "qActiveField": 0,
                        "qLabelExpression": "",
                        "autoSort": true,
                        "othersLabel": "Others",
                        "textAlign": {
                            "auto": true,
                            "align": "left"
                        },
                        "representation": {
                            "type": "text",
                            "urlLabel": ""
                        }
                    },
                    "qNullSuppression": false,
                    "qIncludeElemValue": false,
                    "qOtherTotalSpec": {
                        "qOtherMode": "OTHER_OFF",
                        "qOtherCounted": {
                            "qv": "10"
                        },
                        "qOtherLimit": {
                            "qv": "0"
                        },
                        "qOtherLimitMode": "OTHER_GE_LIMIT",
                        "qSuppressOther": false,
                        "qForceBadValueKeeping": true,
                        "qApplyEvenWhenPossiblyWrongResult": true,
                        "qGlobalOtherGrouping": false,
                        "qOtherCollapseInnerDimensions": false,
                        "qOtherSortMode": "OTHER_SORT_DESCENDING",
                        "qTotalMode": "TOTAL_OFF",
                        "qReferencedExpression": {
                            "qv": ""
                        }
                    },
                    "qShowTotal": false,
                    "qShowAll": false,
                    "qOtherLabel": {
                        "qv": "Others"
                    },
                    "qTotalLabel": {
                        "qv": ""
                    },
                    "qCalcCond": {
                        "qv": ""
                    },
                    "qAttributeExpressions": [],
                    "qAttributeDimensions": [],
                    "qCalcCondition": {
                        "qCond": {
                            "qv": ""
                        },
                        "qMsg": {
                            "qv": ""
                        }
                    }
                },
                {
                    "qDef": {
                        "qGrouping": "N",
                        "qFieldDefs": [
                            "TimeStamp"
                        ],
                        "qFieldLabels": [
                            ""
                        ],
                        "qSortCriterias": [
                            {
                                "qSortByState": 0,
                                "qSortByFrequency": 0,
                                "qSortByNumeric": -1,
                                "qSortByAscii": 1,
                                "qSortByLoadOrder": 1,
                                "qSortByExpression": 0,
                                "qExpression": {
                                    "qv": ""
                                },
                                "qSortByGreyness": 0
                            }
                        ],
                        "qNumberPresentations": [],
                        "qReverseSort": false,
                        "qActiveField": 0,
                        "qLabelExpression": "",
                        "autoSort": false,
                        "cId": "QqFZdWu",
                        "othersLabel": "Others",
                        "textAlign": {
                            "auto": true,
                            "align": "left"
                        },
                        "representation": {
                            "type": "text",
                            "urlLabel": ""
                        }
                    },
                    "qNullSuppression": false,
                    "qIncludeElemValue": false,
                    "qOtherTotalSpec": {
                        "qOtherMode": "OTHER_OFF",
                        "qOtherCounted": {
                            "qv": "10"
                        },
                        "qOtherLimit": {
                            "qv": "0"
                        },
                        "qOtherLimitMode": "OTHER_GE_LIMIT",
                        "qSuppressOther": false,
                        "qForceBadValueKeeping": true,
                        "qApplyEvenWhenPossiblyWrongResult": true,
                        "qGlobalOtherGrouping": false,
                        "qOtherCollapseInnerDimensions": false,
                        "qOtherSortMode": "OTHER_SORT_DESCENDING",
                        "qTotalMode": "TOTAL_OFF",
                        "qReferencedExpression": {
                            "qv": ""
                        }
                    },
                    "qShowTotal": false,
                    "qShowAll": false,
                    "qOtherLabel": {
                        "qv": "Others"
                    },
                    "qTotalLabel": {
                        "qv": ""
                    },
                    "qCalcCond": {
                        "qv": ""
                    },
                    "qAttributeExpressions": [],
                    "qAttributeDimensions": [],
                    "qCalcCondition": {
                        "qCond": {
                            "qv": ""
                        },
                        "qMsg": {
                            "qv": ""
                        }
                    }
                },
                {
                    "qLibraryId": "",
                    "qDef": {
                        "qGrouping": "N",
                        "qFieldDefs": [
                            "latest_commit"
                        ],
                        "qFieldLabels": [
                            ""
                        ],
                        "qSortCriterias": [
                            {
                                "qSortByState": 0,
                                "qSortByFrequency": 0,
                                "qSortByNumeric": 1,
                                "qSortByAscii": 1,
                                "qSortByLoadOrder": 1,
                                "qSortByExpression": 0,
                                "qExpression": {
                                    "qv": ""
                                },
                                "qSortByGreyness": 0
                            }
                        ],
                        "qNumberPresentations": [],
                        "qReverseSort": false,
                        "qActiveField": 0,
                        "qLabelExpression": "",
                        "autoSort": true,
                        "cId": "xxbXHa",
                        "othersLabel": "Others",
                        "textAlign": {
                            "auto": true,
                            "align": "left"
                        },
                        "representation": {
                            "type": "text",
                            "urlLabel": ""
                        }
                    },
                    "qNullSuppression": false,
                    "qIncludeElemValue": false,
                    "qOtherTotalSpec": {
                        "qOtherMode": "OTHER_OFF",
                        "qOtherCounted": {
                            "qv": "10"
                        },
                        "qOtherLimit": {
                            "qv": "0"
                        },
                        "qOtherLimitMode": "OTHER_GE_LIMIT",
                        "qSuppressOther": false,
                        "qForceBadValueKeeping": true,
                        "qApplyEvenWhenPossiblyWrongResult": true,
                        "qGlobalOtherGrouping": false,
                        "qOtherCollapseInnerDimensions": false,
                        "qOtherSortMode": "OTHER_SORT_DESCENDING",
                        "qTotalMode": "TOTAL_OFF",
                        "qReferencedExpression": {
                            "qv": ""
                        }
                    },
                    "qShowTotal": false,
                    "qShowAll": false,
                    "qOtherLabel": {
                        "qv": "Others"
                    },
                    "qTotalLabel": {
                        "qv": ""
                    },
                    "qCalcCond": {
                        "qv": ""
                    },
                    "qAttributeExpressions": [],
                    "qAttributeDimensions": [],
                    "qCalcCondition": {
                        "qCond": {
                            "qv": ""
                        },
                        "qMsg": {
                            "qv": ""
                        }
                    }
                }
            ],
            "qMeasures": [
                {
                    "qDef": {
                        "qLabel": "",
                        "qDescription": "",
                        "qTags": [],
                        "qGrouping": "N",
                        "qDef": "Sum(coverage)",
                        "qNumFormat": {
                            "qType": "U",
                            "qnDec": 10,
                            "qUseThou": 0,
                            "qFmt": "",
                            "qDec": "",
                            "qThou": ""
                        },
                        "qRelative": false,
                        "qBrutalSum": false,
                        "qAggrFunc": "Expr",
                        "qAccumulate": 0,
                        "qReverseSort": false,
                        "qActiveExpression": 0,
                        "qExpressions": [],
                        "qLabelExpression": "",
                        "autoSort": true,
                        "cId": "gPuYd",
                        "numFormatFromTemplate": true,
                        "textAlign": {
                            "auto": true,
                            "align": "left"
                        }
                    },
                    "qSortBy": {
                        "qSortByState": 0,
                        "qSortByFrequency": 0,
                        "qSortByNumeric": -1,
                        "qSortByAscii": 0,
                        "qSortByLoadOrder": 1,
                        "qSortByExpression": 0,
                        "qExpression": {
                            "qv": ""
                        },
                        "qSortByGreyness": 0
                    },
                    "qAttributeExpressions": [],
                    "qAttributeDimensions": [],
                    "qCalcCond": {
                        "qv": ""
                    },
                    "qCalcCondition": {
                        "qCond": {
                            "qv": ""
                        },
                        "qMsg": {
                            "qv": ""
                        }
                    }
                }
            ],
            "qInterColumnSortOrder": [
                1,
                0,
                2,
                3
            ]
        }
    });

    function dateCheck(temp, today, beat) {
        var old = (new Date(temp)).getTime;
        var curr = (new Date(today)).getTime;
        if (curr > old) {
            console.log(beat);
            if (old < beat && curr > beat) {
                return curr;
            }
        }
        return beat;
    }

    const layout = await obj.getLayout();
    //console.log(JSON.stringify(layout.qHyperCube, null, '  '));
    //console.log(JSON.stringify(layout.qHyperCubeDef));
    var first = 0;
    // ctemp = senaste tiden det ändrades
    var ctemp = [];
    const current = [];
    const bool = [];
    var temp = "";
    var date = "";
    var dt;
    const timeSet = [];
    const theObject = {
        year: [19],
        month: [19],
        beat: [19],
        quarter: [19],
    };

    const formatDate = (date, format) => {
        let multiplier;
        switch (format) {
            case 'year':
                multiplier = 31536000000;
                break;
            case 'quarter':
                multiplier = 2628000000 * 4;
                break;
            case 'month':
                multiplier = 2628000000;
                break;
            case 'beat':
                multiplier = (1209600000);
                break;
            default:
                multiplier = 1;
        }
        return (new Date(date - multiplier)).toISOString().substring(0, 10);
    }
    dt = new Date();
    /*
    year = (new Date(dt - 31536000000)).toISOString().substring(0,10);
    quarter = (new Date(dt - (2628000000*4))).toISOString().substring(0,10);
    month = (new Date(dt - 2628000000)).toISOString().substring(0,10);
    beat = (new Date(dt - (86400000*14))).toISOString().substring(0,10);
*/
    year = formatDate(dt, 'year');
    quarter = formatDate(dt, 'quarter');
    month = formatDate(dt, 'month');
    beat = formatDate(dt, 'beat');
    console.log("Beat " + beat);
    const data = layout.qHyperCube.qDataPages[0].qMatrix.map(item => {
        //20 is the number of repositories
        beat = dateCheck(temp, item[1].qText, beat);

        if (first < 20) {
            console.log(item[0].qText + "   " + item[1].qText + "    " + item[2].qText + "    " + item[3].qText);
            //current[first] =(item[0].qText + "," + item[1].qText + "," + item[2].qText + "," + item[3].qText);
            //date = item[1].qText;
            current[first] = (item[3].qText);
            ctemp[first] = item[3].qText;
        }
        else {
            if (ctemp[first % 20] != item[3].qText && bool[first % 20] != 1) {
                ctemp[first % 20] = item[3].qText + "," + item[1].qText;
                bool[first % 20] = 1;
            }
            dateCheck(temp, item[1].qText, beat, month, quarter, year);

            //if (item[1].qText !== year && item[1].qText !== month && item[1].qText !== month && item[1].qText !== beat) { return; }

            switch (item[1].qText) {
                case year:
                    theObject.year[first % 20] = item[3].qText;
                    break;
                case quarter:
                    theObject.quarter[first % 20] = item[3].qText;
                    break;
                case month:
                    theObject.month[first % 20] = item[3].qText;
                    break;
                case beat:
                    theObject.beat[first % 20] = item[3].qText;
                    break;
                default:

            }
        }
        temp = item[1].qText
        first += 1;
    });
    console.log(ctemp);
    console.log(JSON.stringify(current));
    console.log(temp);
    //console.log(date.substring(0,4) + date.substring(5,7) + date.substring(8,10));
    //dt -= 31536000000;
    //console.log(new Date(dt - 31536000000).toISOString());
    console.log(theObject.year + "year     " + theObject.quarter + "quarter   " + theObject.month + "month  " + theObject.beat + "done");
    await session.close();
}

(async () => {
    try {
        await run();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();