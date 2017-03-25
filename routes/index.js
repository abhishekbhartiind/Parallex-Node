
module.exports.index = index;

function index(req,res){

	res.render('index', {
		layout: 'layout',
		title: 'Parallax',
		description: 'Parallax',
		keywords: 'Parallax'
	});
};
