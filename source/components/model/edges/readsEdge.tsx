import { BodyEdgeCompontent } from "./edgeBase"

export default function ReadsEdge({ id, sourceX, sourceY, targetX, targetY} : {
    id: string,
    sourceX: number,
    sourceY: number,
    targetX: number,
    targetY: number
    }) {
    return <BodyEdgeCompontent
      id = {id}
      sourceX = {sourceX}
      sourceY = {sourceY}
      targetX = {targetX}
      targetY = {targetY}
      edgeStyle = {{stroke: 'black', strokeDasharray: '5,5'}}
      label = 'reads'
      arrowEnd = {true}
    />
  }