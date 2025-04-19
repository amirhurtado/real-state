import Image from "next/image"

const CallToAction = () => {
  return (
    <div className="h-48 md:h-140">

        <div className="relative w-full h-full">
            <Image src={"/call-to-action.svg"} fill alt="Call to Action"className="w-full h-full object-cover" />
        </div>
      
    </div>
  )
}

export default CallToAction
