import Ractive from 'ractive';
import Template from '../../views/layout/search-user.html';

var SearchGithub = Ractive.extend({
	isolated: true,
	template: Template,

	oninit() {
		this.on('searchUser', (rEvent) => {
			rEvent.original.preventDefault();

			let username = rEvent.context.query;

			console.log('This is the user you want to look up:', username);
		});
	},

	data: {
		query: ''
	}
});

export default SearchGithub;