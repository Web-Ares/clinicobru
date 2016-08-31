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

                        var curData = $( this ).attr( 'data-popup' );

                        _chatMessages.removeClass( 'new' );
                        _animationMessages( curData );
                    }
                } );

            },
            _animationMessages = function ( dataChat ) {

                var curChat = $('.popup__content').filter('.popup__'+dataChat+''),
                    curChatBtn = curChat.find('.btn-main'),
                    messages = curChat.find('.chat__item > span'),
                    delay = 100,
                    i = 1;

                messages.each( function(){

                    var curMessage = $( this);

                    if( !curMessage.hasClass( 'new' ) ) {

                        setTimeout(function(){

                            curMessage.addClass( 'new' )

                        }, delay );

                        i+=1;
                        delay+=2300;

                        if ( i >= messages.length ) {

                            setTimeout(function(){

                                curChatBtn.addClass( 'animate' )

                            }, delay + 2300 );

                        }
                    }
                });

            },
            _init = function() {
                _onEvents();
            };

        _init();
    };


} )();

