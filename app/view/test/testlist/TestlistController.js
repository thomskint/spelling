/**
 * Created by ajthomps on 11/16/2016.
 */
Ext.define('Spelling.view.test.testlist.TestlistController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.testlist',

    onTestTap: function(view , index , target , record , e , eOpts){

        Ext.GlobalEvents.fireEvent('loadTest',record);

        this.getView().setActiveItem(1);
        Ext.GlobalEvents.fireEvent('navigate', 3);

    }
});