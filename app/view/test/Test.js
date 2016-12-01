/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.test.Test', {
    extend: 'Ext.Container',

    requires: [
        'Spelling.view.test.TestModel',
		'Spelling.view.test.TestController',
        'Spelling.view.test.answers.Answers'
    ],

    xtype: 'test',

    viewModel: {
        type: 'test'
    },

    controller: 'test',

    requires: [
        'Ext.carousel.Carousel'
    ],

    cls: 'cards',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        cls: 'demo-solid-background',
        flex: 1
    },
    items: [{
        xtype: 'carousel',
        reference: 'questions',
        bind: {
            activeItem: '{activeQuestion}',
            items: '{questionArr}'
        }
    }]
});
