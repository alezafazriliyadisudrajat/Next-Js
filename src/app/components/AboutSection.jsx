import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about.jpg" 
          alt="About Image"
          width={400} 
          height={400} 
          layout="intrinsic"
          objectFit="cover"
          className="rounded-lg"
        />
        <div>
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-lg">
              Experienced backend developer with a passion for creating powerful, 
              efficient systems and reliable and secure APIs.
            </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
