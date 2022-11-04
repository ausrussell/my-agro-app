# A Flexible Button component

The MysteryComponent.tsx is a flexible button component which renders a HTML button element and can accept a click callback and numerous styling props. It can wrap around text or any other components supplied as children. 
e.g. 
`<MysteryComponent>Click Me!</MysteryComponent>`

Defined props:
  styleType: "primary" | "secondary"
  icon: element or string
    - iconPos: "left" or "right"
  size: "small" | "large" | "icon"
  className: string
  disable: boolean

This App shows an example use of it.
The App.tsx file uses it as button with a callback to store in redux the number of times it is clicked.
MysteryCounter.tsx displays that number.
