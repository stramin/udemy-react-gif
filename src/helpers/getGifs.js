
export const getGifs=async(cat)=>{
	const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=10&api_key=YKTIsnQ6qAEfAuiXQ3iJuXtciE4NhIWI`
	const resp = await fetch(url);
	if(resp.ok){
		const {data} = await resp.json();

		const gifs = data.map(img=>{
			return {
				id: img.id,
				title: img.title,
				url: img.images.downsized_medium.url
			}
		});
		return gifs;
	}
}
