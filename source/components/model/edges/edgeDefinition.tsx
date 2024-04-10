import { getStraightPath, BaseEdge, EdgeLabelRenderer, MarkerType, getMarkerEnd } from "reactflow";


export function edgeTagMapper(edgeTag:string):string{
  switch(edgeTag){
    case 'reads': return 'readsEdge'
    case 'defined-by': return 'definedByEdge'
    case 'same-read-read': return 'sameReadReadEdge'
    case 'same-def-def': return 'sameDefDefEdge'
    case 'calls': return 'callsEdge'
    case 'returns': return 'returnsEdge'
    case 'defines-on-call': return 'definesOnCallEdge'
    case 'defined-by-on-call': return 'definedByOnCallEdge'
    case 'argument': return 'argumentEdge'
    case 'side-effect-on-call': return 'sideEffectOnCallEdge'
    case 'relates': return 'relatesEdge'
  }
  return ''
}

interface BodyEdgeComponentProps {
  readonly id: string,
  readonly sourceX: number,
  readonly sourceY: number,
  readonly targetX: number,
  readonly targetY: number,
  readonly edgeStyle: React.CSSProperties,
  readonly label: string,
  readonly markerEnd: string
}

function BodyEdgeCompontent(props: React.PropsWithoutRef<BodyEdgeComponentProps>){
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX: props.sourceX ,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
  })
  return (
    <>
    <BaseEdge id={props.id} path={edgePath} style={props.edgeStyle} />
    <EdgeLabelRenderer>
      <div
      style={{
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
        fontSize: 12,
        pointerEvents: 'all',
      }}
      className="nodrag nopan"
      >
      {props.id}
      </div>
    </EdgeLabelRenderer>
    </>
  );
}

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
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function DefinedByEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'black'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function SameReadReadEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'grey', strokeDasharray: '2,5'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function SameDefDefEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'blue', strokeDasharray: '2,7'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function CallsEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'blue', strokeDasharray: '3,7'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function ReturnsEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'blue', strokeDasharray: '4,7'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function DefinesOnCallEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'blue', strokeDasharray: '5,7'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function DefinedByOnCallEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'blue', strokeDasharray: '6,7'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function ArgumentEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'blue', strokeDasharray: '7,7'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function SideEffectOnCallEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'blue'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}

export function RelatesEdge({ id, sourceX, sourceY, targetX, targetY} : {
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
    edgeStyle = {{stroke: 'blue', strokeDasharray: '2,3'}}
    label = 'reads'
    markerEnd = {getMarkerEnd(MarkerType.Arrow)}
  />
}