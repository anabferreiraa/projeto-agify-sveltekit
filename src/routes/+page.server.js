/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const name = url.searchParams.get('name');

	if (!name) {
		return { ageData: { name: null, age: null, count: null } };
	}
	if (!name) {
		return { ageData: { name: null, age: null, count: null } };
	}

	if (name.trim() === '') {
		return { error: 'O nome não pode conter apenas espaços.' };
	}
	try {
		const response = await fetch(`https://api.agify.io/?name=${name}`);

		if (!response.ok) {
			throw new Error('Não foi possível conectar à API Agify.');
		}

		const data = await response.json();

		return {
			ageData: {
				name: data.name,
				age: data.age,
				count: data.count
			}
		};
	} catch (error) {
		return { error: error.message };
	}
}
