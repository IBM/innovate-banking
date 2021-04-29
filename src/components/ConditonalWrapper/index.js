import PropTypes from 'prop-types';

/**
 * Compont "ConditionalWrapper"
 *
 * @param	{Bool}  				condition		Boolean condition if the wrapper should be applied
 * @param   {React.DOMElement}   	wrapper			An element which is the wrapper
 * @param   {Mixed}				   	children		The children to wrap
 *
 * @return  {React.Component}
 */
const ConditionalWrapper = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

/**
 * Components prop types
 *
 * @var {Object}
 */
ConditionalWrapper.propTypes = {
	condition: PropTypes.bool,
	wrapper: PropTypes.any,
	children: PropTypes.any,
};

/**
 * Components default props
 *
 * @var {Object}
 */
ConditionalWrapper.defaultProps = {};

/**
 * Components display name
 *
 * @var {String}
 */
ConditionalWrapper.displayName = 'ConditionalWrapper';

export default ConditionalWrapper;
