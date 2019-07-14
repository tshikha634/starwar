function makeUserRequest(method, data, api="/login") {
	// returns a Promise
	return axios({
		method: method,
		url: api,
		data: data
	})
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export function manualLogin(
		data,
		successPath // path to redirect to upon successful log in
	) {	
		//console.log('hqhgdjhgfjsdgfjsdgfjgsdjfgsdjfgsdjfgsdjfgsdjhfgsdjgfjsdfgjsdhgfs')
	return dispatch => {
		dispatch(beginLogin())
		console.log(data);
		axios.get( `https://swapi.co/api/people/?search=${data.username}`).then(res => {
			
		console.log(res);
		if(res.data.results.length){
			if(res.data.results[0].birth_year == data.password){
				dispatch(loginSuccess(data));
				browserHistory.push('/search');
			}
			else
		{
			dispatch(loginError(data));
			alert("wrong username/password!!")
			let loginMessage = "wrong username / password"
			return loginMessage	
		}

		}
		
		else
		{
			dispatch(loginError(data));
			alert("wrong username/password!!")
			let loginMessage = "wrong username / password"
			return loginMessage	
		}
		})			
	}
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export function manualLogout() {
	return dispatch => {
		dispatch(beginLogout())

		return axios.get("/logout")
			.then(response => {
				if (response.data.success) {
					dispatch(logoutSuccess())
					// use browserHistory singleton to control navigation. Will generate a 
					// state change for time-traveling as we are using the react-router-redux package
					browserHistory.push("/") // logout to home page
				} else {
					dispatch(logoutError())
				}
			})
			.catch(response => {
			    if (response instanceof Error) {
			      // Something happened during logout that triggered an Error
			      console.log('Error', response.message);
			    }
			})
	}			
}

export function manualRegister(data) {	
	
	return dispatch => {
		dispatch(beginRegister())

		return makeUserRequest("post", data, "/register")	
			.then(response => {
				if (response.data.success) {					
					dispatch(registerSuccess())
					dispatch(manualLogin(data, "/"))
				} else {					
					dispatch(registerError())
					let registerMessage = response.data.message
					return registerMessage
				}
			})
			.catch(response => {
			    if (response instanceof Error) {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', response.message);
			    }
		    })
	}

}