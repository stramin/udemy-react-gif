import React from 'react'; // , { useState, useEffect }
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({cat}) => {

	const {data:images,loading}=useFetchGifs(cat);
	/* const [state, setState] = useState([]);

	useEffect(()=>{
		//getGifs(cat).then(i=>setState(i));
		getGifs(cat).then(setState);
	},[cat]); */

	return (
		<>
			<h3 className="animate__animated animate__fadeIn">{cat}</h3>

			{loading && <p className="animate__animated animate__flash">Cargando...</p>}

			<div>
					{
						images.map((img)=>(
							<GifGridItem
								key={img.id}
								{...img}
							/>
						))
					}
			</div>
		</>
	)
}
