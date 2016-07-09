///TEXT BLOCKING TEST
var prose_one = ["AAA", "BBB","CCC"]
var prose_two = ["AAAAAAAAAAAAA"]
var prose_three = ["A","A","A","A","A"]
/// four and five trigger error
var prose_four = ["A"]
var prose_five = []
///end test prose


function testProseOne(){
	var correct_prose = ["ABC","ABC","ABC"].toString()
	var avg = (TxBlkg.stackBlocks(prose_one).toString() === correct_prose)?true:false
	console.log(avg)
	if(avg){
		console.log('test pass')
	}else{
		console.log('test failed')
	}
}

function testProseTwo(){
	var correct_prose = ["A","A","A","A","A","A","A","A","A","A","A","A","A"].toString()
	var avg = (TxBlkg.stackBlocks(prose_two).toString() === correct_prose)?true:false
	console.log(avg)
	if(avg){
		console.log('test pass')
	}else{
		console.log('test failed')
	}
}


function testProseThree(){
	var correct_prose = ["AAAAA"].toString()
	var avg = (TxBlkg.stackBlocks(prose_three).toString() === correct_prose)?true:false
	console.log(avg)
	if(avg){
		console.log('test pass')
	}else{
		console.log('test failed')
	}
}

//RUN TEST
testProseOne()
testProseTwo()
testProseThree()




//// RACE AVERAGE TEST
var races_one = ["12:00 PM, DAY 1", "12:01 PM, DAY 1"]
var races_two = ['12:00 AM, DAY 2']
var races_three = ["02:00 PM, DAY 19", "02:00 PM, DAY 20", "01:58 PM, DAY 20"]

var race = new RaceAverage()


function testRaceOne(){
	var correct_avg = 241
	var avg = (race.avgMinutes(races_one) === correct_avg)?true:false
	console.log(avg)
	if(avg){
		console.log('test pass')
	}else{
		console.log('test failed')
	}
}

function testRaceTwo(){
	var correct_avg = 960
	var avg = (race.avgMinutes(races_two) === correct_avg)?true:false
	console.log(avg)
	if(avg){
		console.log('test passed')
	}else{
		console.log('test failed')
	}
}

function testRaceThree(){
	var correct_avg = 27239
	var avg = (race.avgMinutes(races_three) === correct_avg)?true:false
	console.log(avg)
	if(avg){
		console.log('test passed')
	}else{
		console.log('test failed')
	}
}

///RUN TEST
testRaceOne()
testRaceTwo()
testRaceThree()