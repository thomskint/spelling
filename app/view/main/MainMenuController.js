/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.main.MainMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmenu',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    navigate: function(button){
        Ext.GlobalEvents.fireEvent('navigate', this.getView().items.indexOf(button));
    }
});