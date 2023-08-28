import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = ( newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
		// setCategories( cat => ['Valorant', ...cat]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

            <AddCategory 
				// opc 1: enviar el metodo setCategories al comp hijo para que haga la modificación del estado
				// esto funciona pero oculta la implementación y cambio del state 
				// setCategories={setCategories} 

				// opc2: (mucho mejor)
				onNewCategory={value => onAddCategory(value)}
			/>

			{
				categories.map((category) =>  (
					<GifGrid key={category} category={category} />
				))
			}
		</>
	);
};
