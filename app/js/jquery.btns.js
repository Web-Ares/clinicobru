( function(){

    $( function() {

        $.each( $( '.btn' ), function() {

            new Btn ( $( this ) );

        } );

    });

    var Btn = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _canvas = _obj.find('canvas').eq(1),
            _canvasShadow = _obj.find('canvas').eq(0),
            _window = $( window );

        //private methods
        var _onEvents = function() {

                _window.on( {
                    resize: function () {

                        _drawCanvas()
                    }
                } );

            },
            _drawCanvas = function () {

                if ( _canvas[0].getContext && _canvasShadow[0].getContext ){

                    var ctx = _canvas[0].getContext( '2d' ),
                        ctxShadow = _canvasShadow[0].getContext( '2d' ),
                        width = _obj.width(),
                        height = _obj.height(),
                        fillBtn = _obj.data('fill'),
                        fillShadow = _obj.data('shadow');

                    _canvas[0].width = width;
                    _canvas[0].height = height;
                    _canvasShadow[0].width = width;
                    _canvasShadow[0].height = height;

                    if (_window.width() < 768) {

                        console.log(100);

                        if (_obj.hasClass('btn_1')) {

                            ctxShadow.beginPath();
                            ctxShadow.moveTo(10,0);
                            ctxShadow.lineTo(270,0);
                            ctxShadow.lineTo(280,60);
                            ctxShadow.lineTo(22,60);
                            ctxShadow.fillStyle = fillShadow;
                            ctxShadow.fill();

                            ctx.beginPath();
                            ctx.moveTo(0,10);
                            ctx.lineTo(260,10);
                            ctx.lineTo(270,70);
                            ctx.lineTo(12,61);
                            ctx.fillStyle = fillBtn;
                            ctx.fill();

                        }

                        else if(_obj.hasClass('btn_2')){

                            ctxShadow.beginPath();
                            ctxShadow.moveTo(10,10);
                            ctxShadow.lineTo(270,10);
                            ctxShadow.lineTo(250,60);
                            ctxShadow.lineTo(0,70);
                            ctxShadow.fillStyle = '#ffffff';
                            ctxShadow.fill();

                            ctx.beginPath();
                            ctx.moveTo(20,0);
                            ctx.lineTo(280,0);
                            ctx.lineTo(260,50);
                            ctx.lineTo(10,60);
                            ctx.fillStyle = fillBtn;
                            ctx.fill();

                        }else if (_obj.hasClass('btn_3')) {

                            ctxShadow.beginPath();
                            ctxShadow.moveTo(20,10);
                            ctxShadow.lineTo(280,10);
                            ctxShadow.lineTo(260,61);
                            ctxShadow.lineTo(10,70);
                            ctxShadow.fillStyle = fillShadow;
                            ctxShadow.fill();

                            ctx.beginPath();
                            ctx.moveTo(10,0);
                            ctx.lineTo(270,0);
                            ctx.lineTo(250,51);
                            ctx.lineTo(0,60);
                            ctx.fillStyle = fillBtn;
                            ctx.fill();
                        }

                    } else {

                        if (_obj.hasClass('btn_1')) {

                            ctxShadow.beginPath();
                            ctxShadow.moveTo(10,0);
                            ctxShadow.lineTo(358,0);
                            ctxShadow.lineTo(368,81);
                            ctxShadow.lineTo(32,81);
                            ctxShadow.fillStyle = fillShadow;
                            ctxShadow.fill();

                            ctx.beginPath();
                            ctx.moveTo(0,10);
                            ctx.lineTo(350,10);
                            ctx.lineTo(361,91);
                            ctx.lineTo(22,81);
                            ctx.fillStyle = fillBtn;
                            ctx.fill();

                        }
                        else if(_obj.hasClass('btn_2')){

                            ctxShadow.beginPath();
                            ctxShadow.moveTo(10,10);
                            ctxShadow.lineTo(358,10);
                            ctxShadow.lineTo(337,81);
                            ctxShadow.lineTo(0,91);
                            ctxShadow.fillStyle = fillShadow;
                            ctxShadow.fill();

                            ctx.beginPath();
                            ctx.moveTo(20,0);
                            ctx.lineTo(368,0);
                            ctx.lineTo(348,71);
                            ctx.lineTo(10,81);
                            ctx.fillStyle = fillBtn;
                            ctx.fill();

                        }else if (_obj.hasClass('btn_3')) {

                            ctxShadow.beginPath();
                            ctxShadow.moveTo(20,10);
                            ctxShadow.lineTo(369,10);
                            ctxShadow.lineTo(349,81);
                            ctxShadow.lineTo(10,91);
                            ctxShadow.fillStyle = fillShadow;
                            ctxShadow.fill();

                            ctx.beginPath();
                            ctx.moveTo(10,0);
                            ctx.lineTo(358,0);
                            ctx.lineTo(339,71);
                            ctx.lineTo(0,81);
                            ctx.fillStyle = fillBtn;
                            ctx.fill();

                        }
                    }
                }
            },
            _init = function() {
                _onEvents();
                _drawCanvas()
            };

        _init();
    };


} )();

