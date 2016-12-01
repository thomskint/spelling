/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Spelling.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    listen: {
        global: {
            navigate: 'onNavigate'
        }
    },

    init: function() {
        var menu = Ext.create('Spelling.view.main.MainMenu',{
            width: 250
        });

        Ext.Viewport.setMenu(menu, {
            side: 'left',
            // omitting the reveal config defaults the animation to 'cover'
            reveal: true
        });

        Ext.Viewport.showMenu('left');
    },

    onNavigate: function (indx) {
        Ext.Viewport.hideMenu('left');
        this.getViewModel().set('mainView',indx);
    }
});
