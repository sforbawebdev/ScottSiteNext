import Image from 'next/image';

const SVG = (props)=>{
    const {name} = props;

    return(
        <div>
            <Image src={'/images/upwork.svg'} width={20} height={20} alt={name}/>
        </div>
    )
}

export default SVG;