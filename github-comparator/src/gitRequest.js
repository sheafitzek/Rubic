/*So far, the only function that would interact with components is getPLayerInfo() at the bottom of the page*/

//this funtion accepts a url and returns a JSON object from the gitHub server 
const gitGet = (url) => {
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = () => {
			if (request.status == 200){
				resolve(JSON.parse(request.response));
			}
			else{
				reject(request.statusText);
			}
		};
		request.onerror = () => reject(request.statusText);
	});
}

/*this function accepts a parameter, data, which is the type of data the program wants to request from gitHub's server. And another parameter, name, which is the specification for the specific element of the set the program wants to retrieve. For example, if data == 'user' && name == PoitierStinger: createUrl() would return a string that could then be passed to gitGet() so it could request basic profile info for PoitierStinger. Currently this function only retrieve basic profile info. The idea would be to add cases as neccessarry once we figure out for to pass the data into the right react components*/

const createUrl = (data, name) => {
	switch(data){
		case 'user': 		 
			return `https://api.github.com/users/${name}`;
			break;
		default:
			console.log('createUrl() in gitRequest.js is not setup for this case');
	}
}

/*This is the only function that interacts directly with the application. It takes two inputs, player1name and player2name, uses createUrl() to make a url that asks for player data and passes that to gitGet() which makes the request, returning a promise that we can then act upon however we see fit. */
export const getPlayerInfo = (player1name, player2name) => {
	var player1Url = createUrl(user, player1name);
	var player2Url = createUrl(user, player2name);

	var player1Info = gitGet(user, Player1Url);
	var player2Info = gitGet(user, Player2Url);

	player1Info.then(filterData).catch(error);
	player2Info.then(filterData).catch(error);	
}


