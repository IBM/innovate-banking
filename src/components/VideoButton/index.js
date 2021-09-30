import { PlayOutline32 } from '@carbon/icons-react';
import { Modal } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Styles from './styles.module.scss';

const VideoButton = ({ title, subtitle }) => {
	const iFrameRef = useRef();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const iframe = iFrameRef.current;
		const video = iframe.querySelector('video');

		if (!open) {
			if (iframe) {
				const iframeSrc = iframe.src;
				iframe.src = iframeSrc;
			}

			if (video) {
				video.pause();
			}
		}
	}, [open]);

	return (
		<>
			<button className={Styles.VideoButton} onClick={() => setOpen(true)}>
				<PlayOutline32 className={Styles.Icon} />
				<div>
					<span className={Styles.Title}>{title}</span>
					<span className={Styles.Subtitle}>{subtitle}</span>
				</div>
			</button>
			<Modal
				className={Styles.Modal}
				open={open}
				passiveModal
				size="lg"
				onRequestClose={() => setOpen(false)}
				modalHeading={title}
			>
				<div className={Styles.Video}>
					<iframe
						ref={iFrameRef}
						src="https://www.youtube-nocookie.com/embed/U5eK56asMSQ?modestbranding=1"
						title="Video player"
						allowFullScreen
					/>
				</div>
			</Modal>
		</>
	);
};

VideoButton.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default VideoButton;
