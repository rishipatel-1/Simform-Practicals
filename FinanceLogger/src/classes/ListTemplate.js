"use strict";
exports.__esModule = true;
exports.ListTemplate = void 0;
var Position;
(function (Position) {
    Position["Start"] = "start";
    Position["End"] = "end";
})(Position || (Position = {}));
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === Position.Start) {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
exports.ListTemplate = ListTemplate;
