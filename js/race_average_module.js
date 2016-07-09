var RaceAverage = function(){
	this.day_one = '07/08/2016'
	this.start_dt = ['08:00 AM, DAY 1']

	this.convertHour = function(hour, ampm){
		console.log('converting', hour , ampm)
		var hr = parseInt(hour)
		if( hr >= 01 && hr <= 11 && ampm === 'PM'){
			return  Math.floor(hr + 12)
		}else if (hr === 12 && ampm === 'PM'){
			return hr
		}else{
			return  Math.floor(hr - 12)
		}
	}

	this.getMinDiff = function(start_dt , finish_dt){
		console.log('start_dt', start_dt)
		console.log('finish_dt', finish_dt)
		var diff = (Math.abs(finish_dt.getTime() - start_dt.getTime()))
		var minutes = Math.floor((diff/1000)/60)
		console.log('minutes', minutes)
		return minutes
	},

	this.avgMinutes = function(race_times){
		console.log('race start date & time', this.start_dt)
		console.log('race finsih date & time', race_times)
		var total_boat_times = 0

		var d_one = this.day_one.split('/')
		var st_dt = this.start_dt[0].split(' ')
		var year = d_one[2]
		var month = parseInt(d_one[0])-1
		var new_st_date = new Date(year, month, d_one[1], st_dt[0].split(':')[0], st_dt[0].split(':')[1])

		//start loop
		for (var i = 0; i < race_times.length; i++ ){
			var fn_dt = race_times[i].split(' ')
			var day = (fn_dt[3] === '1')?d_one[1]:parseInt(d_one[1])+parseInt(fn_dt[3]-1)
			var hour = this.convertHour(fn_dt[0].split(':')[0], fn_dt[1].replace(',', ''))
			var mins = fn_dt[0].split(':')[1]
			var new_fin_date = new Date(year, month, day, hour, mins )

			total_boat_times += this.getMinDiff(new_st_date, new_fin_date);
		}
		var race_avg = Math.round(total_boat_times / race_times.length)
		console.log('race average',  race_avg)
		return race_avg
	}
}