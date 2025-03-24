import React from 'react'

function Icon() {

    const iconData =[
        {img:"icon1.png"},
        {img:"icon2.png"},
        {img:"icon3.png"},
        {img:"icon4.png"},
        {img:"icon5.png"},
        {img:"icon6.png"},
        {img:"icon7.png"},
        {img:"icon8.png"},
        {img:"icon9.png"},
        {img:"icon10.png"},
        {img:"icon11.png"},
        {img:"icon12.png"}
    ]

  return (
    <>
    <div>

        <hr className='text-[#DCDCDC]' />

        <div className='grid grid-cols-3 md:grid-cols-4 justify-center lg:grid-cols-12'>
            {
                iconData.map((e,i)=>(
                    <div key={i} className='mx-auto my-auto cursor-pointer'>
                        <img className='py-5' src={e.img} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Icon