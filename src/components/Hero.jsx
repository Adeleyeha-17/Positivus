import {Link} from "react-router-dom"

export const Hero = () => {

   const imgSrc = [
      {
         src: "/amazon.png",
         alt: "amazon image"
      },{
         src: "/dribble.png",
         alt: "dribble image"

      },{
         src: "/hotspot.png",
         alt: "hubspot image"

      },{
         src: "/notion.png",
         alt: "notion image"

      },{
         src: "/netflix.png",
         alt: "netflix image"

      },{
         src: "/zoom.png",
         alt: "zoom image"

      }
   ]

    return (
      <div>
        <div className="w-full flex max-md:flex-col justify-between">

            <div className="w-1/2 flex flex-col max-md:gap-1 gap-4">

                <h1 className="max-md:text-4xl text-6xl font-medium max-md:w-[340px] w-[531px] h-auto">Navigating the digital landscape for success</h1>

                <p className="max-md:text-sm text-xl font-normal max-md:w-[320px] w-[498px] h-[112px]">Our digital marketing agency helps businesses grow and succeed online through
                    a range of services including SEO, PPC, social media marketing, and content
                    creation.</p>

                <Link to="" className="max-md:w-[180px] w-[264px] max-md:h-[40px] h-[68px] bg-[#191A23] text-white max-md:rounded-lg rounded-2xl font-normal flex items-center justify-center">Book a Consultation</Link>
            </div>


            <div className="max-md:w-10/12 w-1/2">
               <img src="/Illustration.png" alt="Hero Image" className="w-full h-full"/>
            </div>

        </div>


         <div className="flex max-md:flex-wrap justify-between">
            {imgSrc.map((image, index) => (
               <img src={image.src} alt={image.alt} key={index} />
            ))}
         </div>

      </div>  
    )
}