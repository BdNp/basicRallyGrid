Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
        //API Docs: https://help.rallydev.com/apps/2.0/doc/

        console.log('Running the app.');

        var myStore = Ext.create('Rally.data.wsapi.Store', {
        	model: 'User Story',
        	autoLoad: true,
        	listeners: {
        		load: function(myStore, data, success) {
        			console.log('got data! ', myStore, data, success);

        			var myGrid = Ext.create('Rally.ui.grid.Grid', {
        				store: myStore,
        				columnCfgs: [
	        				'FormattedID', 'Name', 'ScheduleState'
        				],
        			});

        			console.log('my grid', myGrid);

        			this.add(myGrid);
        			console.log(this);
        		},
        		scope: this
        	},
        	fetch: ['FormattedID', 'Name', 'ScheduleState']
        });


        
    }
});
