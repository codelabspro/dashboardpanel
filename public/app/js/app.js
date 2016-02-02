import Ractive from 'ractive';
import template from '../views/app.html';

let App = new Ractive({
	el: '#app',
	template: template,
	data: {
		name: 'DashboardPanel'
	}
});

export default App;


