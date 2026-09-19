import arrow from "../../assets/icon/arrow.svg"

const Button =(props)=>{
    const {children,className, onClick} = props;
    return <button className={`bg-primary flex justify-center items-center gap-1 text-white text-[24px] w-50.75 h-15.25 rounded-[72px] cursor-pointer ${className}`} onClick={onClick}>
        {children} <img src={arrow} alt="" className="" />
    </button>
}

export default Button