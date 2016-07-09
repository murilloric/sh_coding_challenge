var TxBlkg = {
	createMultiArray:function(lines){
		//first split string into array
		var split_lines = lines.map(function(cur, idx){
			return cur.split('')
		});

		///second push first item into new array
		var ltrs = []
		var final_lines = []
		for (var i = 0; i < split_lines.length; i ++){
			ltrs[i] = split_lines[i][0]
			final_lines.push(ltrs)
		};

		//third join new array items into string
		var output_lines = final_lines.map(function(cur, idx){
			var join_array = cur.join().replace(/,/g, '')
			return join_array
		});

		return output_lines
	},
	createNewArray:function(lines){
		return lines[0].split('')
	},
	createSingleArray:function(lines){
		return [lines.join().replace(/,/g, '')]
	},
	stackBlocks:function(pros_of_passage){
		try{
			var col_lines;
			var lines = pros_of_passage
			var len = lines.length
			console.log('prose input: ', lines);
			//case 1:  array with len > 1 with string len > 1
			//case 2:  array with len <= 1 with string len > 1
			//case 3:  array with len <= 1 with string len <=1
			//case 4:  array with len <= 0

			if (len > 1 && lines[0].length > 1){
				col_lines = this.createMultiArray(lines)
			}else if (len <= 1 && lines[0].length > 1){
				col_lines = this.createNewArray(lines)
			}else if (len > 1 && lines[0].length <=1){
				col_lines = this.createSingleArray(lines)
			}else if(len <= 0){
				col_lines = []
			}else{
				throw 'ERROR:please stick to the prose of passage'
			}
			console.log('prose output: ', col_lines)
			return col_lines;
		}catch(err){
			console.log('ERROR:please stick to the prose of passage')
			return false
		}
	}
}





