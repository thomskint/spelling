/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.testmanager.Testmanager', {
    extend: 'Ext.Container',

    requires: [
        'Spelling.view.testmanager.TestmanagerModel',
		'Spelling.view.testmanager.TestmanagerController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'testmanager',
    */

    viewModel: {
        type: 'testmanager'
    },

    controller: 'testmanager',

    items: [
        /* include child components here */
    ]
});