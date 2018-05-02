import '../../../css/clearfix.css'

import React, { Component } from 'react';
import * as d3 from 'd3';
import global from '../../../lib/Global';
import Hamburger from '../../menu/Hamburger';

// props:


// width,
// height,
// padding,
// data,
// virtualLinks,
// virtualNodes,

// changeColor(color),
// changeSize(size),
// changeShape(shape),
// changeStroke(color, width),
// changeMode(),
class ControlPanel extends Component{

    constructor(props){
        super(props);
    }

    extend
    render() {

        return (
            <div>
            {/* <Hamburger size={40}/> */}
            <ul style={{float: 'left', width: `${this.props.width}px`, height: `100%`,padding: `${this.props.padding}px`, backgroundColor:'white', position:'fixed', overflowY:'scroll', opacity:'0.985', border: '1px #f4f4f4 solid', boxShadow: '0px 0px 25px grey'}}>
                <li style={{height:'300px',}}>
                  <h1> Selected Nodes </h1>
                  <ul style={{height: '239px', width:`${0.9 * this.props.width}px`, border:'1px solid', overflowY: 'scroll', padding:'10px',margin:'5px 0'}}>
                    {this.props.virtualNodes.nodesList.map((e, i) => {
                      if (e.selected) {
                        return <li style={{height:'30px', lineHeight:'30px'}}>{this.props.data.nodes[i].name}</li>;
                      }
                    })}
                  </ul>
                </li>

                <li style={{height:'300px'}}>
                  <h1> Selected Links </h1>
                  <ul style={{height: '243px', width:`${0.9 * this.props.width}px`, border:'1px solid', overflowY: 'scroll', padding:'10px',margin:'5px 0'}}>
                    {this.props.virtualLinks.nodesList.map((e, i) => {
                      if (e.selected) {
                        return <li style={{height:'30px', lineHeight:'30px', display: 'inline-block', whiteSpace: 'nowrap', overflowX: 'scroll'}}>{`${this.props.data.links[i].source.name} => ${this.props.data.links[i].target.name}`}</li>;
                      }
                    })}
                  </ul>
                  <br/>
                </li>

                <li className='clearfix'>
                  <h1> Color </h1>
                  <ul>
                    {global.networkgraph.colors.map((e, i) =>
                      <li onClick={() => {this.props.changeColor(i)}} style={{margin: '30px', width:'40px', height: '40px', backgroundColor: `${e}`, float:'left', cursor:'pointer'}}>

                      </li>
                    )}
                  </ul>

                </li>
                <li className='clearfix'>
                  <h1> Size </h1>
                  <br/>
                  Size: <input ref={node => this.size = node}id="number" type="number" onChange={() => {this.props.changeSize(this.size.value)}}></input>
                  <br/><br/>
                </li>

                <li>
                  <h1> Shape </h1>
                  <ul>
                    <svg width={`${this.props.width}px`}>
                    {d3.symbols.map((e, i) =>
                        <path
                          transform = { `translate(${(2 * i - 1) * 50} ,60)`}
                          d={
                            d3.symbol().type(d3.symbols[i]).size(900)()
                          }
                          style = {{cursor: 'pointer'}}
                          onClick = {() => {this.props.changeShape(i)}}
                        />
                    )}
                    </svg>
                  </ul>
                </li>
                <li className='clearfix'>
                  <h1> Stroke </h1>
                  <br/>
                  Stroke Width: <input ref={node => this.stroke = node}id="number" type="number" onChange={() => {this.props.changeStroke(null, this.stroke.value)}}></input>
                  <br/><br/>
                  Stroke Color:
                  <ul>
                    {global.networkgraph.colors.map((e, i) =>
                      <li onClick={() => {this.props.changeStroke(i, null)}} style={{margin: '30px', width:'40px', height: '40px', backgroundColor: `${e}`, float:'left', cursor:'pointer'}}>

                      </li>
                    )}
                  </ul>
                </li>
                <li>
                    <ul>
                        <li><button onClick={() => {this.props.changeMode(1)}}>Force Directed Graph</button></li>
                        <li><button onClick={() => {this.props.changeMode(2)}}>Arc Deoagram</button></li>
                    </ul>
                </li>

            </ul>
            <br/>
            </div>
        )
    }
}


export default ControlPanel;