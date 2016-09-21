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
            _chatMessages = $('.chat__item > span'),
            _flag = true;

        //private methods
        var _onEvents = function() {

                _openChatBtn.on( {
                    click: function () {

                        var curData = $( this ).attr( 'data-popup' );

                        _chatMessages.removeClass( 'new prev ' );
                        _chatMessages.parent().removeClass( 'chat__item_grey' );
                        _chatMessages.parent().hide();

                        _animationMessages( curData );
                    }
                } );

            },
            _animationMessages = function ( dataChat ) {

                var curChat = $('.popup__content').filter('.popup__'+dataChat+''),
                    // curChatBtn = curChat.find('.btn-main'),
                    messagesWrap = curChat.find('.chat__inner'),
                    // messages = curChat.find('.chat__item > span'),
                    delay = 100,
                    i = 1;

                messagesWrap.css({
                    height: 0
                });

                messagesWrap.each( function(){

                    var curWrap = $( this),
                        curMessages = curWrap.find('.chat__item > span');

                    i = 1;

                    curMessages.each( function(){

                        var curMessage = $( this);

                        if( !curMessage.hasClass( 'new' ) ) {

                            setTimeout(function(){

                                curMessage.parent().slideDown(300);

                                setTimeout(function () {

                                    curMessage.addClass( 'new' );
                                    curWrap.css({
                                        height: 'auto'
                                    })

                                }, 350);

                            }, delay );

                            i+=1;
                            delay+=2500;

                            if ( curWrap.next().length || curMessage.parent().next().length ) {

                                setTimeout(function(){

                                    curMessage.addClass( 'prev' );
                                    curMessage.parent().addClass( 'chat__item_grey' )

                                }, delay );

                            }

                            // if ( i >= curMessage.length ) {
                            //
                            //     setTimeout(function(){
                            //
                            //         curWrap.next().slideDown(200)
                            //
                            //     }, delay += 4000 );
                            //
                            // }

                        }
                    });

                });

            },
            _init = function() {
                _onEvents();
            };

        _init();
    };


} )();

