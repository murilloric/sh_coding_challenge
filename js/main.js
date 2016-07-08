///test prose
var prose_one = ["AAA", "BBB","CCC", "DDD", "EEE", "FFF"]
var prose_two = ["AAAAAAAAAAAAA"]
var prose_three = ["A","A","A","A","A"]
/// four and five trigger error
var prose_four = ["A"]
var prose_five = []
///end test prose




///instantiate test blocking module object
var block = TxBlkg.stackBlocks(prose_one)
console.log('block', block)


var race = RaceAverage.avgMinutes()
console.log('race', race)