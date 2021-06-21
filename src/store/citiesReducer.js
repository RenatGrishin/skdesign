let initialState = [
	{
		"id": "MOW",
		"name": "Москва"
	},
	{
		"id": "SPB",
		"name": "Санкт-Петербург"
	},
	{
		"id": "KZN",
		"name": "Казань"
	},
	{
		"id": "KDA",
		"name": "Краснодар"
	}
]

export function cities (state=initialState, action){
	switch (action.type) {
		default: return state;
	}
}