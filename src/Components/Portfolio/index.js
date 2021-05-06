import axios from "axios";
import React , {useState , useEffect} from "react"
import { Img, Imgwrapper, Overlay, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, SpanOverlay, SpanTitle } from "./Style.js";
const Portfolio=()=>{
    const [images , setImages]=useState([])

    useEffect(()=>{
        axios.get('js/Data.json').then(res=>{setImages(res.data.portfolio)})
    } ,[])

    const ImagesList=images.map((imageItem)=>{
        return(
            <Imgwrapper key={imageItem.id}>
                <Img src={imageItem.image} alt=""/>
                <Overlay>
                    <SpanOverlay>
                        Show Image
                    </SpanOverlay>
                </Overlay>
            </Imgwrapper>
        )
    })
    return(
        <PortfolioSection>
            <PortfolioTitle><SpanTitle>My</SpanTitle> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {ImagesList}
            </div>
            
        </PortfolioSection>
    )
}
export default Portfolio;