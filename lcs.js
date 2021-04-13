function substr(arr)
{
	let min = arr.reduce((x, y) => x.length <= y.length ? x : y);
	let max = min.length;
	for(let leng = max; leng >= 0; leng--)
	{
		for(let first = 0; first <= max - leng; first++)
		{
			let str = min.substring(first, first + leng);
			if(arr.every(elem => ~elem.indexOf(str)))
			{
				return str;
			}
		}
	}
	return '';
}
let inputLeng = process.argv.length;
if(inputLeng < 3)
	console.log('');
else
	console.log(substr(process.argv.slice(2)));

