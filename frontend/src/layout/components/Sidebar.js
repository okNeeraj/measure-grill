import React from 'react'
import { LOGO } from '../../utils/constant'

const Sidebar = () => {
	return (
		<aside className='h-full flex items-center flex-col gap-3'>
			<div className='w-14 h-14 mt-5'>
				<img src={LOGO} alt='Measure Grill' />
			</div>
			<div className='flex justify-center items-center flex-col gap-3 mt-4'>
				<div className='app-item bg-white text-violet-800 shadow-lg hover:text-violet-800 rounded-lg'>
					<a href='/' className='flex items-center justify-center w-12 h-12'>
						<span className="material-symbols-outlined">language</span>
					</a>
				</div>
				<div className='app-item bg-white text-black shadow-md hover:shadow-lg hover:text-violet-800 rounded-lg'>
					<a href='/' className='flex items-center justify-center w-12 h-12'>
						<span className="material-symbols-outlined">monitoring</span>
					</a>
				</div>
				<div className='app-item bg-white text-black shadow-md hover:shadow-lg hover:text-violet-800 rounded-lg'>
					<a href='/' className='flex items-center justify-center w-12 h-12'>
						<span className="material-symbols-outlined">speed</span>
					</a>
				</div>
			</div>

		</aside>
	)
}

export default Sidebar
