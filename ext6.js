Ext.define('User', {
    extend : 'Ext.data.Model',
    fields : ['id', 'name', 'email', 'phone'],
    proxy : {
        type: 'ajax',
        reader: {
            type: 'json'
        },
        url: 'https://jsonplaceholder.typicode.com/users'
    }

});

Ext.define('Users', {
    extend: 'Ext.data.Store',
    model : 'User',
    proxy : {
        type: 'json',
        url: 'https://jsonplaceholder.typicode.com/users'
    }
})

Ext.define('ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.viewmodel',
    
    data: {
       title : 'aa'
    },
    
    stores : {
        users : {
            model: 'User',
            autoLoad : true
        }
    }
    
})


Ext.define('View', {
    extend: 'Ext.Container',
    xtype: 'main',
    
    require: ['Ext.panel.Collapser'],
   
    viewModel : {
       type: 'viewmodel'
    },
   
    layout : 'hbox',
    maxHeight : 500,
   
    items: [{
        xtype: 'grid',
        title: 'Users',
        bind: '{users}',
        columns : [{
            text: 'Name',
            dataIndex: 'name',
            flex : 1
        }, {
            text: 'Email',
            dataIndex: 'email',
            flex : 1
        }, {
            text: 'Phone',
            dataIndex: 'phone',
            flex : 1
        }],
        flex: 1,
    },{
        xtype: 'formpanel',
        title: 'Form',
        collapsible : {
            collapsed : true,
            direction: 'right'
            
        },
        defaults : {
            xtype: 'textfield'
        },
        items : [{
             
        }],
        width: 300
    }]
   
   
});

Ext.application({
    name : 'Fiddle',

    launch : function() {
        Ext.Viewport.add({
            xtype: 'main'
        })
    }
});

