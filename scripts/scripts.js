

 new Vue(
{
	el: '#simpleApp',
	data: {
		apiData: '',
		
		selected: '',
		
		job:'',
		dialog: false,
	},
	methods: {                              
		loadApi: function () {
			this.$http.get('https://data.cityofnewyork.us/resource/swhp-yxa4.json').
			then(this.successCallback, this.errorCallback);
		},
		successCallback: function(response) {
			this.apiData = response.data;
			
            
			console.log('successCallback this.apiData:' , this.apiData);
		},
		errorCallback: function(response) {
			console.log('errorCallback response:' , response);
		},
		selectionChanged: function(job) {
			this.job =job;
			this.dialog = !this.dialog;
			
			console.log('selection:this.selected:' , this.dialog,this.job);
		}

		
	}
	
	
}
);