import { NodeProps } from "reactflow"
import { HandleNodeComponent } from "./handleNodeComponent"
import React from "react";

interface BodyNodeComponentProps{
  readonly className: string
  readonly data: NodeProps['data']
}

interface NodeComponentProps {
  readonly data: NodeProps['data']
}

/* export function BodyNodeComponent(props: React.PropsWithoutRef<BodyNodeComponentProps>){
  return (
    <HandleNodeComponent>
      <div className = {props.className}>
        <span className='hover-over-text'>
          <div className='one-line'>name:{props.data.label}</div><br/>
          <div className='one-line'>id:{props.data.id}</div><br/>
          <div className='one-line'>when:{props.data.when}</div><br/>
        </span>
        <label htmlFor="text">{props.data.label}</label>
      </div>
    </HandleNodeComponent>
  )
}
*/

const BodyNodeComponent: React.FC<BodyNodeComponentProps> = (props) => {
  return (
    <HandleNodeComponent>
      <div className = {props.className}>
        <HoverOverComponent name={props.data.label} id={props.data.id} when= {props.data.when}/>
      <label htmlFor="text">{props.data.label}</label>
      </div>
    </HandleNodeComponent>
  )
}

interface HoverOverComponentProps{
  readonly name: string,
  readonly id: string,
  readonly when: string
}
export const HoverOverComponent: React.FC<HoverOverComponentProps> = (props) => {
  return (
    <span className='hover-over-text'>
      <div className='one-line'>name:{props.name}</div><br/>
      <div className='one-line'>id:{props.id}</div><br/>
      <div className='one-line'>when:{props.when}</div><br/>
    </span>
  )
}

export const VariableDefinitionNode: React.FC<NodeComponentProps> = ({ data }) => {
  return <BodyNodeComponent data={data} className='variable-definition-node base-node'/>
}

export const UseNode: React.FC<NodeComponentProps> = ({ data }) => {
  return <BodyNodeComponent data={data} className='use-node base-node'/>
}

export const FunctionCallNode: React.FC<NodeComponentProps> = ({ data }) => {
  return <BodyNodeComponent data={data} className='function-call-node base-node'/>
}

export const ExitPointNode: React.FC<NodeComponentProps> = ({ data }) => {
  return <BodyNodeComponent data={data} className='exit-point-node base-node'/>
}