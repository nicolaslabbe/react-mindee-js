// @flow
import type { Polygon, Point } from "helpers/geometry"

export type Shape = {
  id: string,
  featureIndex: number,
  polygon: Polygon,
  featureName: string,
  index: number,
  isActive: boolean,
  color?: string,
  lineWidth?: number,
  fillOpacity?: number,
  closePath?: boolean,
  strokes?: boolean,
  fill?: boolean,
  active?: {
    color?: string,
    lineWidth?: number,
    fillOpacity?: number,
    closePath?: boolean,
    strokes?: boolean,
    fill?: boolean,
  },
  image?: string,
  element?: any,
  data?: any,
}

export type LensProps = {
  cursorPosition: Point,
  selectedShape: Shape,
}
