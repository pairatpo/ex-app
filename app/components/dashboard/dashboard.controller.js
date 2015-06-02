(function () {
    'use strict';

    angular.module('ex-app').controller('dashboardController', ctrl);

    function ctrl($scope, $state, $window) {

        var _self = this;
        //this.prototype = new baseController();

        console.log('-- new baseController');
        console.log(_self);

        _self.pageType = 'dashboardController';

        _self.gridsterOptions = {
            margins: [2, 2],
            columns: 8,
            rowHeight: '25',
            //isMobile: true, // stacks the grid items if true
            //mobileBreakPoint: 600, // if the screen is not wider that _self, remove the grid layout and stack the items
            //mobileModeEnabled: true,
            draggable: {
                handle: 'div.panel-heading'
            }
        };
        //_self.standardItems = [
        //    { sizeX: 8, sizeY: 7, row: 0, col: 0 },
        //    { sizeX: 8, sizeY: 7, row: 0, col: 8 },
        //    { sizeX: 8, sizeY: 6, row: 7, col: 0 },
        //    { sizeX: 4, sizeY: 6, row: 7, col: 8 },
        //    { sizeX: 4, sizeY: 6, row: 7, col: 12 },
        //    { sizeX: 4, sizeY: 6, row: 13, col: 0 },
        //    { sizeX: 3, sizeY: 6, row: 13, col: 4 },
        //    { sizeX: 4, sizeY: 6, row: 13, col: 7 },
        //    { sizeX: 5, sizeY: 6, row: 13, col: 11 },
        //    { sizeX: 4, sizeY: 7, row: 19, col: 0 },
        //    { sizeX: 3, sizeY: 7, row: 19, col: 4 },
        //    { sizeX: 4, sizeY: 7, row: 19, col: 7 },
        //    { sizeX: 5, sizeY: 7, row: 19, col: 11 },
        //    { sizeX: 4, sizeY: 8, row: 26, col: 0 },
        //    { sizeX: 6, sizeY: 8, row: 26, col: 4 },
        //    { sizeX: 6, sizeY: 8, row: 26, col: 10 }
        //];

        _self.standardItems = [];

        _self.clickCount = 0;
        _self.generateStandardItems = function () {

            if (_self.clickCount === 0) {
                _self.standardItems = [
                    { sizeX: 4, sizeY: 15, row: 0, col: 0, model: { type: 'chart' } },
                    { sizeX: 4, sizeY: 5, row: 0, col: 5, model: { type: '2' } },
                    { sizeX: 4, sizeY: 5, row: 5, col: 5, model: { type: '2' } },
                    { sizeX: 4, sizeY: 5, row: 10, col: 5, model: { type: '1' } },
                ];
            } else if (_self.clickCount === 1) {
                _self.standardItems = [
                    { sizeX: 4, sizeY: 15, row: 0, col: 0, model: { type: 'chart' } },
                    { sizeX: 2, sizeY: 5, row: 0, col: 0, model: { type: '2' } },
                    { sizeX: 2, sizeY: 5, row: 0, col: 3, model: { type: '2' } },
                    { sizeX: 4, sizeY: 5, row: 10, col: 5, model: { type: '1' } },
                ];
            }

            _self.clickCount += 1;
            if (_self.clickCount === 2) { _self.clickCount = 0; }
        };
        _self.addOne = function () {

            _self.standardItems.push({
                sizeX: Math.floor((Math.random() * 4) + 1),
                sizeY: 8
            });
        };
        _self.removeAll = function () {

            _self.standardItems = [];
        };

        _self.increaseCols = function () {
            _self.gridsterOptions.columns += 1;
        };

        _self.isChartContent = function (item) {
            if (!item) { return false; }
            if (!item.model) { return false; }
            if (!item.model.type) { return false; }
            return item.model.type === 'chart';
        };
        _self.chartModel = {
            'options': {
                'chart': {
                    'type': 'areaspline'
                },
                'plotOptions': {
                    'series': {
                        'stacking': ''
                    }
                }
            },
            'series': [
              {
                  'name': 'Some data',
                  'data': [
                    1,
                    2,
                    4,
                    7,
                    3
                  ],
                  'id': 'series-0'
              }
            ],
            'title': {
                'text': 'Hello'
            },
            'credits': {
                'enabled': false
            },
            'loading': false,
            'size': {
                'width': '600',
                'height': '300'
            }
        };
    };
    ctrl.prototype = new baseController();


})();
