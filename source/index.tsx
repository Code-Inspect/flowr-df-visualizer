import { createRoot } from 'react-dom/client';
import '../css/main.css';
import { MainContainerComponent } from './components/mainContainerComponent';
import { Graph, transformToVisualizationGraph } from './components/model/graphTransformer';
import { ReactFlowProvider } from 'reactflow';
import { LayoutFlow } from './components/graphComponent';


const flowrGraph: Graph = {
  rootVertices: new Set(['1', '2']),
  vertexInformation: new Map([
    ['1', {name: 'foooooooooooooooooooooooooo', tag: 'use'}],
    ['2', {name: 'exitPoint', tag: 'exit-point'}],
    ['4', {name: 'useNode', tag: 'use'}],
    ['5', {name: 'functionCall', tag: 'function-call'}],
    ['3', {name: 'variableDefinition', tag: 'variable-definition'}],
    ['9', {name: 'functionDefinition', tag: 'function-definition'}],
    ['10', {name: 'exitPoint', tag: 'exit-point'}],
  ]),
  edgeInformation: new Map([
    ['1', new Map([
      ['2', {types: {foo: 'bar1'}}],
      ['9', {types: {foo: 'bar2'}}]
    ])],
    ['2', new Map([
      ['3', {types: {foo: 'bar3'}}],
      ['4', {types: {foo: 'bar4'}}]
    ])],
    ['4', new Map([
      ['5', {types: {foo: 'bar5'}}]
    ])],
    ['5', new Map([
      ['3', {types: {foo: 'bar6'}}]
    ])],
    ['9', new Map([
      ['2', {types: {foo: 'bar7'}}]
    ])]
  ])
}

// borderline graph :D
let graph = transformToVisualizationGraph(flowrGraph)


const main = document.createElement('div');
main.id = 'main';
document.body.appendChild(main);
const root = createRoot(main);

root.render(
   <MainContainerComponent initialize={() => { console.log('Hey') }}>
      <ReactFlowProvider>
        <LayoutFlow graph={graph}/>
      </ReactFlowProvider>
   </MainContainerComponent>
);

