class App {
	constructor() {
		this.repositories = [];

		this.formEl = document.getElementById('repo-form');

		this.registerHandlers();
	}

	registerHandlers() {
		this.formEl.onsubmit = event => this.addRepository(event);
	}

	addRepository(event) {
		event.preventDefault();

		this.repositories.push({
			name: 'gabrieloshiro1997',
			description: 'teste',
			avatar_url: 'https://avatars1.githubusercontent.com/u/46484835?v=4',
			html_url: 'http://github.com/rocketseat/rocketseat.com.br'
		});

		console.log(this.repositories);
	}
}

new App();