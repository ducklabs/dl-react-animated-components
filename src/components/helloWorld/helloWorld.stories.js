import React from "react"
import HelloWorld from "./index"

export default {
  title: "DL/HelloWorld",
  component: HelloWorld
}

const Template = args => <HelloWorld {...args}/>


export const Default = Template.bind({})
