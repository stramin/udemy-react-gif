import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

	//const cat = ['A','B','C'];
	const [cat, setCat] = useState(['Batman']);
	
	/* const handleAdd = ()=>{
		setCat(a=>[...a,'D']);
	} */

	return (
	<>
		<h2>GifExpert</h2>
		<AddCategory setCat={setCat} />
		<hr />
		<ol>
			{
				cat.map((c,i)=> // c = A,B,C | i = 0,1,2
					<GifGrid
					key={c}
					cat={c}
					/>
				)
			}
		</ol>
	</>
	)
}
