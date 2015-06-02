function baseController() {

    var _self = this;
    _self.rootType = 'baseController';

    console.log('-- init baseController');
};

baseController.prototype.getRootType = function () {
    return _self.rootType;
};