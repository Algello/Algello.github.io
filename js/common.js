document.addEventListener("DOMContentLoaded", function(event) {

    /*****************SKILL BARS SETUP*****************/
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    })();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var SkillBar = (function() {
        function SkillBar(id, perc, color) {
            _classCallCheck(this, SkillBar);

            this.id = id;
            this.percentage = perc + 1;
            this.color = color;

            this.canvas = document.getElementById(this.id).getContext("2d");
            this.no = 0;
            this.pointToFill = 4.72;
            this.cw = this.canvas.canvas.width;
            this.ch = this.canvas.canvas.height;
            this.diff = null;
        }

        _createClass(SkillBar, [
            {
                key: "fillCounter",
                value: function fillCounter() {
                    this.diff = (this.no / 100) * Math.PI * 2 * 10;

                    this.canvas.clearRect(0, 0, this.cw, this.ch);

                    this.canvas.lineWidth = 15;

                    this.canvas.fillStyle = "#3c4761";

                    this.canvas.strokeStyle = this.color;

                    this.canvas.textAlign = "center";

                    this.canvas.font = "50px Titillium Web";

                    this.canvas.fillText(this.no + "%", 103, 118);

                    this.canvas.beginPath();

                    this.canvas.arc(
                        100,
                        100,
                        90,
                        this.pointToFill,
                        this.diff / 10 + this.pointToFill
                    );

                    this.canvas.stroke();

                    this.no++;
                }
            },
            {
                key: "fill",
                value: function fill() {
                    var _this = this;

                    var timer = setInterval(function() {
                        if (_this.no === _this.percentage) {
                            clearTimeout(timer);
                        } else {
                            _this.fillCounter();
                        }
                    }, 50);
                }
            }
        ]);

        return SkillBar;
    })();



    var webDesign = new SkillBar('canvas--web-design',90,'#30bae7');
    webDesign.fill();
    var htmlCss = new SkillBar('canvas--html-css',75,'#d74680');
    htmlCss.fill();
    var design = new SkillBar('canvas--design', 70, '#15c7a8');
    design.fill();
    var ui = new SkillBar('canvas--ui-ux', 85, '#eb7d4b');
    ui.fill();

    /****************MENU NAVIGATION BAR****************/
    var icon = document.getElementById('nav-icon');
    var wrapper = document.getElementById('nav-wrapper');
    icon.addEventListener('click', function(){
        if (wrapper.className === "nav__wrapper") {
            wrapper.className += " responsive";
        } else {
            wrapper.className = "nav__wrapper";
        }
    });
});

