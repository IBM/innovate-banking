import PropTypes from 'prop-types';
import React, { createRef, useState } from 'react';

import { PaginationNav, Row } from 'carbon-components-react';

import ConditionalWrapper from '@/components/ConditonalWrapper';
import Styles from './styles.module.scss';
import clsx from 'clsx';

const TeaserList = ({ children, rowWrap, showPagination }) => {
	const childCount = children.length;
	const teaserRowRef = createRef(null);

	const [currentPage, setCurrentPage] = useState(0);

	const onPaginationChange = index => {
		setCurrentPage(index);
	};

	return (
		<ConditionalWrapper
			condition={showPagination}
			wrapper={wrappedChildren => (
				<div className={clsx(Styles.TeaserList, showPagination && Styles.HasPagination)}>{wrappedChildren}</div>
			)}
		>
			<ConditionalWrapper
				condition={rowWrap === true}
				wrapper={wrappedChildren => {
					const currentTranslation = currentPage * -50;

					return (
						<>
							<Row
								style={{
									flexWrap: showPagination ? 'nowrap' : null,
									transform: showPagination ? `translate3d(${currentTranslation}%,0,0)` : null,
								}}
								className={Styles.TransitionRow}
							>
								{wrappedChildren}
							</Row>
							{showPagination && (
								<PaginationNav
									totalItems={childCount}
									page={currentPage}
									onChange={onPaginationChange}
									className={Styles.PaginationNav}
									itemsShown={2}
								/>
							)}
						</>
					);
				}}
			>
				{children.map((child, childIndex) => {
					return React.cloneElement(child, {
						teaserIndex: childIndex,
						teaserCount: childCount,
						paginationCurrentPage: currentPage,
					});
				})}
				{showPagination && !rowWrap && (
					<PaginationNav
						totalItems={childCount}
						page={currentPage}
						onChange={onPaginationChange}
						className={Styles.PaginationNav}
						itemsShown={2}
					/>
				)}
			</ConditionalWrapper>
		</ConditionalWrapper>
	);
};

TeaserList.defaultProps = {
	rowWrap: false,
};

TeaserList.propTypes = {
	children: PropTypes.array.isRequired,
	rowWrap: PropTypes.bool,
	showPagination: PropTypes.bool,
};

export default TeaserList;