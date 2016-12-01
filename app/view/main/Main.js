/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('Spelling.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Spelling.view.main.MainMenu',
        'Spelling.view.main.MainController',
        'Spelling.view.main.MainModel',
        'Spelling.view.main.List'
    ],
    tools: [{
        type: 'expand',
        iconCls: 'x-fa fa-ellipsis-h',
        handler: function() {
            Ext.Viewport.showMenu('left');
        }
    }],
    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    layout: 'card',

    bind: {
        activeItem: '{mainView}'
    },

    items: [
        {
            xtype: 'panel'
        },
        {
            xtype: 'testlist'
        },
        {
            xtype: 'panel'
        },
        {
            xtype: 'test'
        }
    ]
});
