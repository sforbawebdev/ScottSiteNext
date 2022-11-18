import upwork from '../../public/images/upwork.svg';
const SVG = (props)=>{
    const {name} = props;

    return(
        <div><img src={upwork} alt={name}/></div>
    )
}

export default SVG;