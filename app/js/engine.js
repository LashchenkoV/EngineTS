"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main = (function () {
    function Main(_canvas) {
        this._canvas = _canvas;
        this._cursor = new Cursor(0, 0);
        this._ctx = this._canvas.getContext("2d");
        this.update();
        this.bindEvent();
    }
    Object.defineProperty(Main.prototype, "ctx", {
        get: function () { return this._ctx; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "canvas", {
        get: function () { return this._canvas; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "cursor", {
        get: function () { return this._cursor; },
        enumerable: true,
        configurable: true
    });
    Main.prototype.bindEvent = function () {
        var _this = this;
        this._canvas.addEventListener("click", function (e) {
            e.preventDefault();
            _this._cursor.setFromEvent(e);
        });
    };
    Main.prototype.update = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.update(); });
    };
    return Main;
}());
window.addEventListener("load", function () {
    new Main(document.getElementById("canvas"));
});
var Point = (function () {
    function Point(_x, _y, _mass) {
        if (_mass === void 0) { _mass = 1; }
        this._x = _x;
        this._y = _y;
        this._mass = _mass;
    }
    Point.prototype.updateForBasis = function (v) {
        this._x = this._x * v[0].x + this._x * v[0].y;
        this._x = this._y * v[1].x + this._y * v[1].y;
    };
    Point.prototype.setLocation = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Point.prototype.getDistance = function (p) {
        return Math.sqrt(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2));
    };
    Point.prototype.equals = function (p) {
        return p.x === this.x && p.y === this.y;
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () { return this._x; },
        set: function (value) { this._x = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () { return this._y; },
        set: function (value) { this._y = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "mass", {
        get: function () { return this._mass; },
        set: function (value) { this._mass = value; },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var Vector2D = (function () {
    function Vector2D(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Vector2D.prototype, "x", {
        get: function () { return this._x; },
        set: function (value) { this._x = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "y", {
        get: function () { return this._y; },
        set: function (value) { this._y = value; },
        enumerable: true,
        configurable: true
    });
    Vector2D.prototype.normalize = function () {
        var res = Vector.normalize(this);
        this._x = res.x;
        this._y = res.y;
    };
    Vector2D.prototype.lengthV = function () {
        return Vector.lengthV(this);
    };
    Vector2D.prototype.distance = function (v) {
        return Vector.distance(this, v);
    };
    Vector2D.prototype.angle = function (v) {
        return Vector.angle(this, v);
    };
    Vector2D.prototype.multipleScalar = function (v) {
        return Vector.multipleScalar(this, v);
    };
    Vector2D.prototype.multipleOnNumber = function (n) {
        var res = Vector.multipleOnNumber(this, n);
        this._x = res.x;
        this._y = res.y;
    };
    Vector2D.prototype.summ = function (v) {
        var res = Vector.summ(this, v);
        this._x = res.x;
        this._y = res.y;
    };
    Vector2D.prototype.subtraction = function (v) {
        var res = Vector.subtraction(this, v);
        this._x = res.x;
        this._y = res.y;
    };
    return Vector2D;
}());
var Canvas = (function () {
    function Canvas() {
    }
    Canvas.getRandomInt = function (min, max) {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    };
    Canvas.getRandomFloat = function (min, max) {
        return this.getRoundNum(min + Math.random() * (max - min), 3);
    };
    Canvas.getRoundNum = function (number, n) { return +parseFloat(number).toFixed(n); };
    return Canvas;
}());
var Color = (function () {
    function Color(_r, _g, _b) {
        if (_r === void 0) { _r = 0; }
        if (_g === void 0) { _g = 0; }
        if (_b === void 0) { _b = 0; }
        this._r = _r;
        this._g = _g;
        this._b = _b;
        this._str = '';
    }
    Object.defineProperty(Color.prototype, "r", {
        get: function () { return this._r; },
        set: function (value) { this._r = value > 255 || value < 0 ? this._r : value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "g", {
        get: function () { return this._g; },
        set: function (value) { this._g = value > 255 || value < 0 ? this._g : value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "b", {
        get: function () { return this._b; },
        set: function (value) { this._b = value > 255 || value < 0 ? this._b : value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "str", {
        get: function () { return this._str; },
        set: function (value) { this._str = value; },
        enumerable: true,
        configurable: true
    });
    return Color;
}());
var ColorRGBA = (function (_super) {
    __extends(ColorRGBA, _super);
    function ColorRGBA(r, g, b, _alpha) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        if (_alpha === void 0) { _alpha = 1; }
        var _this = _super.call(this, r, g, b) || this;
        _this._alpha = _alpha;
        _this.alpha = _alpha;
        _this.createStr();
        return _this;
    }
    Object.defineProperty(ColorRGBA.prototype, "alpha", {
        get: function () { return this._alpha; },
        set: function (alpha) { this._alpha = alpha < 0 || alpha > 1 ? this._alpha : alpha; },
        enumerable: true,
        configurable: true
    });
    ColorRGBA.prototype.getRand = function (alpha) {
        this.r = Canvas.getRandomInt(0, 255);
        this.g = Canvas.getRandomInt(0, 255);
        this.b = Canvas.getRandomInt(0, 255);
        this.alpha = alpha;
        this.createStr();
        return this;
    };
    ColorRGBA.prototype.createStr = function () {
        this.str = "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.alpha + ")";
    };
    ColorRGBA.getRandom = function (alpha) {
        if (alpha === void 0) { alpha = 1; }
        var color = new ColorRGBA();
        color.getRand(alpha);
        return color;
    };
    ColorRGBA.getRandomString = function (alpha) {
        var color = new ColorRGBA();
        color.getRand(alpha);
        return color.str;
    };
    return ColorRGBA;
}(Color));
var Cursor = (function () {
    function Cursor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Cursor.prototype, "x", {
        get: function () { return this._x; },
        set: function (value) { this._x = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cursor.prototype, "y", {
        get: function () { return this._y; },
        set: function (value) { this._y = value; },
        enumerable: true,
        configurable: true
    });
    Cursor.prototype.setFromEvent = function (e) {
        this._x = e.clientX - e.target.parentElement.offsetLeft;
        this._y = e.clientY - e.target.parentElement.offsetTop;
    };
    return Cursor;
}());
var Angle = (function () {
    function Angle() {
    }
    Angle.deg = function (deg) {
        return deg * Math.PI / 180;
    };
    Angle.rad = function (rad) {
        return rad * 180 / Math.PI;
    };
    return Angle;
}());
var Vector = (function () {
    function Vector() {
    }
    Vector.rotate = function (v, rad) {
        var x = v.x * Math.cos(rad) - v.y * Math.sin(rad);
        var y = v.x * Math.sin(rad) + v.y * Math.cos(rad);
        return new Vector2D(x, y);
    };
    Vector.distance = function (v1, v2) {
        return Vector.lengthV(Vector.subtraction(v1, v2));
    };
    Vector.angle = function (v1, v2) {
        return Math.acos(Vector.multipleScalar(Vector.normalize(v1), Vector.normalize(v2)));
    };
    Vector.normalize = function (v1) {
        var len = Vector.lengthV(v1);
        return new Vector2D(v1.x / len, v1.y / len);
    };
    Vector.lengthV = function (v1) {
        return Math.sqrt(Math.pow(v1.x, 2) + Math.pow(v1.y, 2));
    };
    Vector.multipleScalar = function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    };
    Vector.multipleOnNumber = function (v1, n) {
        return new Vector2D(v1.x + n, v1.y + n);
    };
    Vector.summ = function (v1, v2) {
        return new Vector2D(v1.x + v2.x, v1.y + v2.y);
    };
    Vector.subtraction = function (v1, v2) {
        return new Vector2D(v1.x - v2.x, v1.y - v2.y);
    };
    return Vector;
}());
var Figure = (function () {
    function Figure(_points, _colors) {
        if (_colors === void 0) { _colors = { border: ColorRGBA.getRandom(), field: ColorRGBA.getRandom() }; }
        this._points = _points;
        this._colors = _colors;
        this._centerMass = { x: 0, y: 0 };
        this._square = 0;
        this.determineCenterMass();
        this.getSquare();
    }
    Object.defineProperty(Figure.prototype, "colors", {
        get: function () { return this._colors; },
        set: function (value) { this._colors = value; },
        enumerable: true,
        configurable: true
    });
    Figure.prototype.setColorBorder = function (color) { this._colors.border = color; };
    Figure.prototype.setColorField = function (color) { this._colors.field = color; };
    Object.defineProperty(Figure.prototype, "centerMass", {
        get: function () { return this._centerMass; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figure.prototype, "points", {
        get: function () { return this._points; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figure.prototype, "square", {
        get: function () { return this._square; },
        enumerable: true,
        configurable: true
    });
    Figure.prototype.isEntryPoint = function (p) {
        var c = false;
        var j = this._points.length - 1;
        for (var i = 0; i < this._points.length; i++) {
            if (((this._points.length[i].y <= p.y && p.y < this._points.length[j].y) || (this._points.length[j].y <= p.y && p.y < this._points.length[i].y)) && p.x > (this._points.length[j].x - this._points.length[i].x) * (p.y - this._points.length[i].y) / (this._points.length[j].y - this._points.length[i].y) + this._points.length[i].x)
                c = !c;
            j = i;
        }
        return c;
    };
    Figure.prototype.draw = function (ctx) {
        var index = 0;
        var figure = new Path2D();
        ctx.fillStyle = this._colors.field.str;
        ctx.strokeStyle = this._colors.border.str;
        figure.moveTo(this._points[0].x, this._points[0].y);
        for (var i = 0; i < this._points.length; i++) {
            index = i + 1 >= this._points.length ? 0 : i + 1;
            figure.lineTo(this._points[index].x, this._points[index].y);
        }
        ctx.fill(figure);
        ctx.stroke(figure);
    };
    Figure.prototype.getSquare = function () {
        var square = 0;
        var index = 0;
        for (var i = 0; i < this._points.length; i++) {
            index = i + 1 > this._points.length ? 0 : i;
            square += ((this._points[i].x * this._points[index].y) - (this._points[index].x * this._points[i].y));
        }
        this._square = square;
        return square;
    };
    Figure.prototype.delPoint = function (p) {
        for (var i = 0; i < this._points.length; i++) {
            if (this._points[i].equals(p)) {
                this._points.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Figure.prototype.addPoint = function (p) {
        for (var i = 0; i < this._points.length; i++)
            if (!this._points[i].equals(p))
                return false;
        this._points.push(p);
        return true;
    };
    Figure.prototype.determineCenterMass = function () {
        var cx = 0;
        var cy = 0;
        var z = 0;
        for (var i = 0; i < this._points.length; i++) {
            cx += this._points[i].x * this._points[i].mass;
            cy += this._points[i].y * this._points[i].mass;
            z += this._points[i].mass;
        }
        this._centerMass = { x: cx / z, y: cy / z };
        return this._centerMass;
    };
    return Figure;
}());
var CustomFigure = (function (_super) {
    __extends(CustomFigure, _super);
    function CustomFigure(point, color) {
        return _super.call(this, point, color) || this;
    }
    CustomFigure.prototype.rotate = function () {
    };
    CustomFigure.prototype.update = function () {
    };
    return CustomFigure;
}(Figure));
