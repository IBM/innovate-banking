import { ReactNode } from 'react'

type ConditionalWrapperProps = {
  readonly condition?: boolean
  readonly wrapper?: (children: ReactNode) => ReactNode
  readonly children?: ReactNode
}

const ConditionalWrapper = ({ condition, wrapper, children }: ConditionalWrapperProps) => (
  <>{!!condition ? wrapper(children) : children}</>
)

export default ConditionalWrapper
