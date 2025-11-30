import React, { useState } from 'react'

function Home() {
    const [tab, setTab] = useState(0)
  return (
    <div>
        <div className='fixed top-0 w-full z-50 bg-primary text-white uppercase flex justify-between p-2'>
            <a href="" className='text-center hover:bg-body hover:text-primary w-full py-2'>Home</a>
            <a href="" className='text-center hover:bg-body hover:text-primary w-full py-2'>About</a>
            <a href="" className='text-center hover:bg-body hover:text-primary w-full py-2'>Menu</a>
            <a href="" className='text-center hover:bg-body hover:text-primary w-full py-2'>Where</a>
        </div>
        <div className='relative h-[500px] bg-[url(https://www.w3schools.com/w3images/coffeehouse.jpg)] bg-cover bg-center flex justify-center items-center grayscale-50'>
            <h1 className='text-8xl text-white'>
                <p className='my-10'>the</p> 
                <p>Cafe</p>
            </h1>
            <div className='absolute bottom-3 left-0 w-full flex justify-between items-center'>
                <p className='bg-primary text-white ml-8 px-2'>Open from 6am to 5pm</p>
                <p className='text-white mr-8 px-2'>15 Adr street, 5015</p>
            </div>
        </div>
        <div className='w-[90%] lg:w-5xl  mx-auto mt-16 text-lg'>
            <h5 className='bg-primary w-fit text-white mx-auto text-xl tracking-widest mb-18 px-2'>ABOUT THE CAFE</h5>
            <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br /> <br />In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
            <div className='w-fit h-fit bg-[#c2cfd73e] border-l-6 border-gray-300 my-8 p-6'>
                <p className='italic'>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.
                    <br /><br />Chef, Coffeeist and Owner: Liam Brown</p>
            </div>
            <img className='grayscale-70 w-full' src="https://www.w3schools.com/w3images/coffeeshop.jpg" alt="" />
            <p className='my-8'><span className='font-bold'>Opening hours:</span> everyday from 6am to 5pm.</p>
            <p mb-8><span className='font-bold'>Address:</span> 15 Adr street, 5015, NY</p>
        </div>
        <div className='w-[90%] lg:w-5xl mx-auto text-lg'>
            <h5 className='text-white bg-primary mx-auto text-xl tracking-widest mb-18 px-2 w-fit'>
                Menu {tab}
            </h5>
            <div className='w-full shadow p-4 flex items-center justify-between gap-4'>
                <button 
                    onClick={() => setTab(0)}
                    className={`${tab == 0 ? 'bg-gray-300' : ''} w-full py-1  cursor-pointer`}
                >
                    Eat
                </button>
                <button 
                    onClick={() => setTab(1)}
                    className={`${tab == 1 ? 'bg-gray-300' : ''} w-full py-1  cursor-pointer`}
                >
                    Drink
                </button>
            </div>
            <div className="w-full shadow p-4">
                { tab == 0 && (
                    <div>Tab 1</div>
                )}
                { tab == 1 && (
                    <div>Tab 2</div>
                )}
            </div>
        </div>
        <div className='w-[90%] lg:w-5xl mx-auto text-lg mt-16 mb-8'>
            <h5 className='text-white bg-primary mx-auto text-xl tracking-widest mb-18 px-2 w-fit'>
                Where to find us
            </h5>
            <form>
                <input 
                    className='p-4 w-full ring ring-gray-300 focus:outline-0 focus:ring-2 focus:ring-black transition-all duration-300 my-8'
                    type="text" 
                    placeholder='Name'
                />
                <input 
                    className='p-4 w-full ring ring-gray-300 focus:outline-0 focus:ring-2 focus:ring-black transition-all duration-300 '
                    type="number" 
                    placeholder='How many people'
                />
                <input 
                    className='p-4 w-full ring ring-gray-300 focus:outline-0 focus:ring-2 focus:ring-black transition-all duration-300 my-8'
                    type="datetime-local" 
                    placeholder='Name'
                />
            </form>
        </div>
    </div>
  )
}

export default Home