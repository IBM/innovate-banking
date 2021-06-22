import { UpToTop24 } from '@carbon/icons-react';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Styles from './styles.module.scss';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > window.innerHeight * 0.55) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility, true);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<CSSTransition in={isVisible} timeout={200} classNames="back-to-top">
			<a className={Styles.Button} href="#top">
				<UpToTop24 className={Styles.Icon} />
			</a>
		</CSSTransition>
	);
};

export default BackToTopButton;
