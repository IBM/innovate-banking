// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const home = require('@/data/page/home.js');
const prozessTransformation = require('@/data/page/home.js');

const pageData = { home, 'prozess-transformation': prozessTransformation };

export default (req, res) => {
	const pageName = req.query.name || 'home';

	if (typeof pageData[pageName] !== 'undefined') {
		res.status(200).json(pageData[pageName](req));
	} else {
		return res.status(404).end();
	}

	return res.status(500).end();
};
