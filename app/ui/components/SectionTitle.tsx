interface SectionTitleProps {
    numeration: string
    title: string
    isReversed: boolean
}

export default function SectionTitle({
    numeration,
    title,
    isReversed
}:SectionTitleProps) {
  return (
    <div className={`w-full flex items-center mt-3 mb-10 ${isReversed ? 'flex-row-reverse' : undefined}`}>
        <div className="flex">
            <span className={`${isReversed ? 'ml-5' : 'mr-3'} self-start text-thirdColor text-lg`}>
                {numeration}
            </span>
            <h2 className={`text-2xl text-white font-bold ${isReversed ? 'ml-3' : 'mr-5'}`}>
                {title}
            </h2>
        </div>
        <div className="flex flex-1 items-center">  
            <div className="w-full h-[2px] bg-secondColor"/>
        </div>
    </div>
  )
}
