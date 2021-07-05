import React from 'react'

const HOC = (MyComponent, data)=>{
    class HOC extends React.Component{
        constructor(props){
            super(props)

            this.state ={
                count:data.countNumber
            }
        }
        upDateState =()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return <MyComponent name= {data.name}count= {this.state.count} upDateState={this.upDateState}/>
        }
    }
    return HOC
}
export default HOC