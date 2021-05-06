import styled from 'styled-components'

export const Socialmedia=styled.div `
    height: auto;
    overflow: hidden
`

export const Social=styled.div `
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props=>props.socialtype===1? "#3b5998":""};
    background: ${props=>props.socialtype===2? "#498cbf":""};
    background: ${props=>props.socialtype===3? "#cc2127":""};
`

export const Icon=styled.i `
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top:25px;
`

export const Paragraph=styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float: left
`

export const Span=styled.span `
    display: block;
    margin-bottom: 8px
`

export const Info2=styled.span `
    font-weight: normal
`