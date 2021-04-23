import Components from '@/shared/DynamicImports';

export const cleanUrl = url => url.replace(/(https?:\/\/)|(\/)+/gim, '$1$2');

export const renderComponent = (name, props, index) => {
	const DynamicComponent = Components[name];

	if (props.children) {
		return (
			<DynamicComponent key={`Component-${name}-${index}`} {...props}>
				{props.children.map((childComponent, childIndex) => {
					return renderComponent(childComponent.name, childComponent.props, `${index}-${childIndex}`);
				})}
			</DynamicComponent>
		);
	}
	return <DynamicComponent key={`Component-${name}-${index}`} {...props} />;
};

const Utils = {
	cleanUrl,
	renderComponent,
};

export default Utils;
