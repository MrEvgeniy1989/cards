import React from "react"
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox"
import { PaletteTree } from "./palette"
import { Counter } from "@/features/counter/Counter"

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Counter">
        <Counter />
      </ComponentPreview>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
