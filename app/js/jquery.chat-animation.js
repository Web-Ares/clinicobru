( function(){

    $( function() {

        $.each( $( '.profession__list' ), function() {

            new ChatAnimation ( $( this ) );

        } );

    });

    var ChatAnimation = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _openChatBtn = _obj.find('.popup__open'),
            _chatMessages = $('.chat__item > span');

        //private methods
        var _onEvents = function() {

                _openChatBtn.on( {
                    click: function () {
                        console.log(2000);

                        var curData = $( this ).attr( 'data-popup' );
                        console.log(_chatMessages.length);
                        _chatMessages.removeClass( 'new' );
                        _animationMessages( curData );
                    }
                } );

            },
            _animationMessages = function ( dataChat ) {

                var curChat = $('.popup__content').filter('.popup__'+dataChat+''),
                    messages = curChat.find('.chat__item > span'),
                    delay = 100;

                console.log(messages.length);

                messages.each( function(){

                    console.log(delay);

                    var curMessages = $( this) ;

                    if( !curMessages.hasClass( 'new' ) ) {

                        setTimeout(function(){

                            curMessages.addClass( 'new' )

                        }, delay);

                        delay+=300
                    }
                });

            },
            _init = function() {
                _onEvents();
            };

        _init();
    };


} )();

