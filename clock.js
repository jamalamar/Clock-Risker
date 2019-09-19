
let seconds = 0
let minutes = 0
let hours = 0


function Clock (){
	let seconds = Date.now() / 1000
	let days = seconds / 86400
	let years = days / 365.25

	let time = days - Math.floor(days)

	//returns hour of the day
	let hoursNow = time * 24
	//returns the percentage of the hour of the day
	let minutesPercentage = hoursNow - Math.floor(hoursNow)
	//returns minutes of the hour
	let minutesNow = minutesPercentage * 60
	let secondsPercentage = minutesNow - Math.floor(minutesNow)
	let secondsNow = secondsPercentage * 60



	return secondsNow
}




function timestamp(){
	console.log(Clock())
	setTimeout(timestamp, 1000)
}

timestamp()





// let today = new Date()
// console.log(today)


