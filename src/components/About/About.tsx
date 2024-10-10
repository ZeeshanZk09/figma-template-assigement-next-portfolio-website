import React from 'react'
import './About.css'
function About() {
  return (
    <section className="flex h-screen flex-col md:flex-row justify-between items-center py-16 px-6 md:px-16 bg-white rounded-md">
      {/* Image Section */}
      
      <div className="about-img  w-72 h-72 lg:w-96 lg:h-96 rounded-full border-2 border-t-slate-400 border-b-[#04AF70] border-r-[#04AF70] border-l-[#04AF70] shadow-black shadow-inner "></div>
      

      {/* Text and Skill Bars Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>

        {/* Skills List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">UX</span>
            <div className="w-3/5 relative">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#04AF70] rounded-full w-4/5"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold">Website Design</span>
            <div className="w-3/5 relative">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#04AF70] rounded-full w-3/5"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold">App Design</span>
            <div className="w-3/5 relative">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#04AF70] rounded-full w-2/5"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold">Graphic Design</span>
            <div className="w-3/5 relative">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#04AF70] rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
