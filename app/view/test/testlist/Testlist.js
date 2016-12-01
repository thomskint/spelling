/**
 * Created by ajthomps on 11/16/2016.
 */
Ext.define('Spelling.view.test.testlist.Testlist', {
    extend: 'Ext.Container',

    requires: [
        'Spelling.view.test.testlist.TestlistModel',
		'Spelling.view.test.testlist.TestlistController'
    ],

    xtype: 'testlist',

    viewModel: {
        type: 'testlist'
    },

    controller: 'testlist',

    layout: {
        type: 'card',
        align: 'stretch'
    },
    defaults: {
        flex: 1
    },
    items: [{
        width: Ext.os.deviceType == 'Phone' ? null : '50%',
        height: Ext.os.deviceType == 'Phone' ? null : '80%',
        xtype: 'list',
        html: 'year 1',
        bind: {store: '{year1}'},
        itemTpl: '{name} here we are',
        listeners:{
            itemTap: 'onTestTap'
        }
    }
    ]
});