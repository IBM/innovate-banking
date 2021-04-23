// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const home = require('@/data/page/home.js');

const pageData = { home };

export default (req, res) => {
	const pageName = req.query.name || 'home';
	res.status(200).json(pageData[pageName](req.query));
};
