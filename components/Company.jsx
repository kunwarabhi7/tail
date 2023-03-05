import React from 'react'

const Company = () => {
  return (
    <div  className='w-full h-screen'>
      <div className='flex'>
        <div><img src='https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg'/></div>
        <div>
          <h2 className='text-orange-700 uppercase'>Data ANALYTICS DASHBOARD</h2>
          <h1>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem asperiores iure rerum, ab illum eius? Ratione repudiandae labore aperiam officia amet nam nemo deserunt recusandae architecto quam optio quia sequi ducimus dicta, incidunt laboriosam illum? Ducimus ea quidem atque?</p>
          <button>Get Started</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Want Tips & tricks to optimize your flow ?</h1>
          <p>Sign up to our newslatter and stay up to date .</p>
        </div>
        <div>
          <input type="text" placeholder='Enter your email..'/>
          <button>Notify Me</button>
        </div>
        <p>We care about the protection of your data . Read about out</p>
        <p>Privacy Policy.</p>
      </div>
    </div>
  )
}

export default Company
