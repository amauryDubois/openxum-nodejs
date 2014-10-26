"use strict";

Tzaar.RestWebServicePlayer = function (c, e, l) {
// private attributes
    var _super = new OpenXum.RestWebServicePlayer(c, e, l);

// public methods
    this.color = _super.color;
    this.confirm = _super.confirm;
    this.is_ready = _super.is_ready;
    this.is_remote = _super.is_remote;
    this.move = _super.move;
    this.reinit = _super.reinit;
    this.set_level = _super.set_level;
    this.set_manager = _super.set_manager;
    this.set_url = _super.set_url;

    this.build_move = function (o) {
        return new Tzaar.Move(o.type, o.color, o.from, o.to, o.choice);
    };

    this.get_name = function () {
        return 'tzaar';
    };

    _super.that(this);
};
