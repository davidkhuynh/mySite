
$(document).on('ready', function() {
        var $stage = createDiv('stage');
        $(document.body).append($stage);
        stage.css({width: '100%', height: '100%'});
        var splitLines = new SplitLines();
        splitLines.beginAnimation();
    });



function SplitLines() {
        var $container;
        var _lines = [];

        (function() {
            initElements();
        })();

        function initElements() {
            $container = createDiv('container');
            $container.css({width: 340, height: 110, top: '50%', left: '50%'});
            $stage.append($container);
            $container.hide();

            for(var i = 0; i < 68; i++) {
                var l = {
                    outer: createDiv(),
                    inner: createDiv()
                }
                l.outer.css({width: 5, height: 110, left: i*5});
                l.inner.css({background: Colors.black, width: 5, height: 110});
                $container.append(l.outer);
                l.outer.append(l.inner);
                _lines.push(l);
            }
        }

        this.beginAnimation = function(callback) {
            $container.show();

            setTimeout(function() {
                var midway = _lines.length/2;
                for(var i in _lines) {
                    _lines[i].inner.velocity({translateY: -30+(Math.random()*60)}, {duration: 160, easing: 'easeOutQuart'});
                    _lines[i].inner.velocity({translateY: -30+(Math.random()*60)}, {duration: 160, easing: 'easeInOutQuart'});
                    _lines[i].inner.velocity({translateY: (i%2 == 0) ? -200 : 200}, {duration: 400, easing: 'easeInOutQuart'});
                    if(i < midway) {
                        _lines[i].inner.velocity({translateX: '-='+(midway-i)*2*(midway-i)/10+'px'}, {duration: 300, easing: 'easeInOutCubic'});
                    } else {
                        _lines[i].inner.velocity({translateX: '+='+(i-midway)*2*(i-midway)/10+'px'}, {duration: 300, easing: 'easeInOutCubic'});
                    }

                    _lines[i].inner.velocity({translateX: 0}, {duration: 220, easing: 'easeInCubic'});
                    _lines[i].inner.velocity({rotateZ: '360deg', translateY: 0, translateX: -i*5, height: 5}, {duration: 600, easing: 'easeInOutCubic', delay: i*20});
                }

            }, 30);


            $container.velocity({translateX: [160, 0], translateY: [50, 0]}, {duration: 1800, easing: 'easeInOutCubic', delay: 1400, complete: function() {
                callback();
                $container.hide();
            }});
        }
        
        this.reset = function() {
          $container.css({width: 340, height: 110, top: '50%', left: '50%', marginLeft: -170,
                marginTop: -60, transform: $container.transform({x: 0, y: 0})});
          for(var i = 0; i < 68; i++) {
            _lines[i].outer.remove();
            var l = {
                    outer: createDiv(),
                    inner: createDiv()
                }
                l.outer.css({width: 5, height: 110, left: i*5});
                l.inner.css({background: Colors.white, width: 5, height: 110});
                $container.append(l.outer);
                l.outer.append(l.inner);
                _lines[i] = l;
          }
        }
    }        