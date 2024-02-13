import type { FC } from "react"

type Props = {
  name: string
  age: number
}

export const ReactComponent: FC<Props> = ({ name, age }) => {

  return (
    <div>My name is {name}, age {age}</div>
  )
}
