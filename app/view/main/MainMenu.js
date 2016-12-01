/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.main.MainMenu', {
    extend: 'Ext.Menu',
    controller: 'mainmenu',
    defaults: {
        handler: 'navigate'
    },
    /*
    Uncomment to give this component an xtype
    xtype: 'menu',
    */

    items: [{
        text: 'Manage Tests',
        iconCls: 'settings'
    }, {
        text: 'Practice & Test',
        iconCls: 'compose'
    }, {
        text: 'Help',
        iconCls: 'help',
        iconCls: 'x-fa list-ul'
    }]
});