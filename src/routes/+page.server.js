// Usamos a JSDoc @type para ter um autocompletar e verificação de tipos mais inteligentes no VSCode.
/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	// Obtém o parâmetro 'name' da URL.
	const name = url.searchParams.get('name');

	// Se não houver nome na URL, retorna um estado inicial para a página.
	if (!name) {
		return { ageData: { name: null, age: null, count: null } };
	}

	// Validação para nome que contém apenas espaços.
	if (name.trim() === '') {
		return { error: 'O nome não pode conter apenas espaços.' };
	}

	// Tenta buscar os dados da API.
	try {
		const response = await fetch(`https://api.agify.io/?name=${name}`);

		if (!response.ok) {
			throw new Error('Não foi possível conectar à API Agify.');
		}

		const data = await response.json();

		// Retorna os dados da API, mesmo que a idade seja `null`.
		// O frontend decidirá como exibir isso (ex: 'nome não encontrado').
		return {
			ageData: {
				name: data.name,
				age: data.age,
				count: data.count
			}
		};
	} catch (error) {
		// Retorna uma mensagem de erro genérica em caso de falha.
		return { error: error.message };
	}
}
