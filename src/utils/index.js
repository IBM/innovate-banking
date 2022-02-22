import Components from '@/shared/DynamicComponents'

export const renderComponent = (name, props, index, pageMeta) => {
  if (typeof Components[name] === 'undefined') {
    return <p>ERROR: Component named "{name}" is not defined!</p>
  }

  const DynamicComponent = Components[name]

  if (props.children) {
    return (
      <DynamicComponent key={`Component-${name}-${index}`} {...props} pageMeta={pageMeta}>
        {props.children.map((childComponent, childIndex) => {
          return renderComponent(childComponent.name, childComponent.props, `${index}-${childIndex}`, pageMeta)
        })}
      </DynamicComponent>
    )
  }
  return <DynamicComponent key={`Component-${name}-${index}`} {...props} pageMeta={pageMeta} />
}

const Utils = {
  renderComponent,
}

export default Utils
