import { useTheme } from '../Context/ContextProvider'
const About = () => {
  const [dark,setDark] = useTheme()
  return (
    <div className='pl-[10vw] pr-[13vw]'>
      <div className='font-bold lg:text-6xl md:text-5xl text-4xl  pb-5 border-b-1 '>About me</div>
      <div className='flex w-full  items-center flex-wrap justify-between'>
        <div className='text-2xl pt-9 font-bold'>A bit about myself</div>
        <div className='w-[40em] pt-9'>Hey there! I'm Krishna Laha, a passionate full-stack developer dedicated to crafting seamless and efficient web applications. With expertise in both frontend and backend, I thrive on solving problems and bringing ideas to life through clean, scalable code. Let’s build something amazing together!</div>
      </div>
      <div className='py-9   gap-6 flex-wrap justify-between flex'>
        <div className='text-2xl font-bold'>Skills</div>
        <div className="flex  py-4 flex-col lg:w-[42vw] font-bold w-[70vw] gap-3.5">
          <div>MERN Stack
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full my-3`}></div>
          </div>
          <div>TailwindCSS
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full my-3`}></div>
          </div>
          <div>JavaScript
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>Python
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>Flask
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>NumPy
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>Pandas
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>Matplotlib
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>Seaborn
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>MongoDB
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>MySQL
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>Git
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>C
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>Java
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
          <div>Postman
            <div className={`h-[0.1em] ${dark?"bg-white":"bg-black"} w-full  my-3`}></div>
          </div>
        </div>
      </div>

      <div className='font-bold py-9 flex gap-4 flex-wrap justify-between'>
        <div className='text-2xl pb-7'>Services</div>
        <div className='flex flex-col gap-4 w-[40em]'>
          <div >
            <div className={`text-orange-500 text-xl border-b-2 ${dark?"border-white":"border-black"} py-4`}>
              🔹Full-Stack Development
              </div>
              <div className='pt-4'>💻 Building scalable web applications with modern technologies like React, Node.js, Express, and MongoDB.</div>
            
          </div>
          <div>
            <div className={`text-blue-500 text-xl border-b-2 ${dark?"border-white":"border-black"} py-4`}>
              🔹Frontend Development
             </div>
             <div className='pt-4'>🎨 Creating sleek and responsive UIs with React, Tailwind CSS, and Framer Motion for an engaging user experience.
             </div>
            
          </div>
          <div>

            <div className={`text-emerald-600 text-xl border-b-2 ${dark?"border-white":"border-black"} py-4`}>
              🔹Backend Development </div>
              <div className='pt-4'>🛠️ Developing secure and optimized APIs using Node.js, Express, and SQL/NoSQL databases.</div>
            
          </div>
          <div>

            <div className={`text-lime-500 text-xl border-b-2 ${dark?"border-white":"border-black"} py-4`}>
            🔹Database Management
              </div>
            <div className='pt-4'>📊 Designing efficient database structures with MySQL, MongoDB, and SQLAlchemy.</div>
          </div>
          <div>
            <div className={`text-red-400  text-xl border-b-2 ${dark?"border-white":"border-black"} py-4`}>
            🔹RESTful APIs & Authentication 
            </div>
            <div className='pt-4'>
            🔑 Implementing JWT authentication, OAuth, and secure API integrations.

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
export default About
