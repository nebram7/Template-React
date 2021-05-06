import axios from "axios";
import React , {Component} from "react"
import {Icon, Line, Part, PartDesc, PartTitle, WorkSection, WorkTitle } from "./Style";
class Work extends Component{
   state={
       works:[]
   }
   componentDidMount(){
       axios.get('js/Data.json').then(res=>{this.setState({works:res.data.works
    })
    })
   }
   
    render(){
        const {works}=this.state
        const worksList=works.map((work)=>{
            return(
                <Part first={work.id} key={work.id}>
                    <Icon className={work.icon_name}></Icon>
                    <PartTitle>{work.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                        {work.body}
                    </PartDesc>
                </Part>
            )
        })
        return(
            <WorkSection>
                <div className="container">
                    <WorkTitle><span>My</span> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
        )
    }
    
}
export default Work;