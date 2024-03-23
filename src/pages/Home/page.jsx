/* eslint-disable react-refresh/only-export-components */
import './page.scss'
import { IoIosArrowForward } from 'react-icons/io'

function HomePage() {
	return (
		<main>
			<section className='w-full min-h-[72vh] bg-black relative'>
				<div className='container text-center pt-20 relative z-10'>
					<div>
						<h1 className='text-5xl tracking-tighter font-bold'>
							iPhone 14 Pro <br />
							<p className='text-3xl tracking-tighter font-medium mt-1'>
								Pro. Beyond.
							</p>
						</h1>
						<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full mt-2 gap-1 text-[#217bd0]'>
							Learn More{' '}
							<IoIosArrowForward className='text-lg fill-[#217bd0]' />
						</button>
					</div>
				</div>
				<div className='figure-node'>
					<figure className='figure' />
				</div>
			</section>
			<section className='w-full min-h-[90vh] relative'>
				<div className='container text-center pt-20 relative z-10'>
					<div>
						<h1 className='text-5xl tracking-tighter font-bold text-black'>
							iPhone 14 Pro <br />
							<p className='text-3xl tracking-tighter font-medium mt-1 text-black'>
								Wonderfull.
							</p>
						</h1>
						<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full mt-2 gap-1 text-[#217bd0]'>
							Learn More{' '}
							<IoIosArrowForward className='text-lg fill-[#217bd0]' />
						</button>
					</div>
				</div>
				<div className='figure-node'>
					<figure className='figure2' />
				</div>
			</section>
			<section className='w-full min-h-[90vh] relative'>
				<div className='container text-center pt-20 relative z-10'>
					<div>
						<h1 className='text-5xl tracking-tighter font-bold text-black'>
							Macbook Air {`15''`} <br />
							<p className='text-3xl tracking-tighter font-medium mt-1 text-black'>
								Impressively big. Impossibly thin.
							</p>
						</h1>
						<span className='text-[#6e6e73] text-[21px] leading-[1.19] font-normal tracking-[.011em] mt-[15px]'>
							Check back later for availability
						</span>
						<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full mt-2 gap-1 text-[#217bd0]'>
							Learn More{' '}
							<IoIosArrowForward className='text-lg fill-[#217bd0]' />
						</button>
					</div>
				</div>
				<div className='figure-node'>
					<figure className='figure3' />
				</div>
			</section>
			<section className=''>
				<div className='modules__container'>
					{collectionModule.map(({ Module, photo }, idx) => (
						<div className='modules__card' key={idx}>
							{<Module />}
							<div className='module__photo'>
								<figure
									style={{ background: `url(${photo})` }}
									className='module__figure'
								></figure>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}

export const collectionModule = [
	{
		Module: () => (
			<div className='unit-copy-wrapper'>
				<img
					src='https://www.apple.com/v/home/bc/images/logos/apple-watch-series-8/promo_logo_apple_watch_series_8__ee6riplsucuq_large.png'
					alt='logo-img'
					className='logo-img'
				/>
				<h5 className='subhead mt-2 text-xl' role='presentation'>
					A healthy leap ahead.
				</h5>

				<div className='cta-links'>
					<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full mt-2 gap-1 text-[#217bd0]'>
						Learn More <IoIosArrowForward className='text-lg fill-[#217bd0]' />
					</button>
				</div>
			</div>
		),
		photo:
			'https://www.apple.com/v/home/bc/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_large.jpg'
	},
	{
		Module: () => (
			<div className='unit-copy-wrapper'>
				<h4 className='headline text-4xl font-medium mb-2'>iPad&nbsp;Pro</h4>
				<h3
					className='subhead text-xl mb-2'
					role='text'
					aria-label='Supercharged by Apple M2 chip'
				>
					Supercharged by{' '}
					<span className='logo logo-image-ipad-pro-promo-m2-chip'></span>
				</h3>

				<div className='cta-links'>
					<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full gap-1 text-[#217bd0]'>
						Learn More <IoIosArrowForward className='text-lg fill-[#217bd0]' />
					</button>
				</div>
			</div>
		),
		photo:
			'https://www.apple.com/v/home/bc/images/promos/ipad-pro/promo_ipadpro_refresh__evi9utuixwuq_large.jpg'
	},
	{
		Module: () => (
			<div className='unit-copy-wrapper'>
				<h4 className='headline text-5xl font-medium mb-2'>AirPods&nbsp;Pro</h4>
				<h5 className='subhead text-xl mb-2' role='presentation'>
					Rebuilt from the sound up.
				</h5>

				<div className='cta-links'>
					<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full gap-1 text-[#217bd0]'>
						Learn More <IoIosArrowForward className='text-lg fill-[#217bd0]' />
					</button>
				</div>
			</div>
		),
		photo:
			'https://www.apple.com/v/home/bc/images/promos/airpods-pro/promo_airpods_pro_avail__gaxggskofx6y_large.jpg'
	},
	{
		Module: () => (
			<div className='unit-copy-wrapper'>
				<img
					src='https://www.apple.com/v/home/bc/images/logos/apple-watch-se/promo_logo_apple_watch_se__b85vr9ri02gi_large.png'
					alt='logo-img'
					className='logo-img'
				/>
				<h5 className='subhead text-black text-xl mb-1' role='presentation'>
					A great deal to love.
				</h5>

				<div className='cta-links'>
					<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full gap-1 text-[#217bd0]'>
						Learn More <IoIosArrowForward className='text-lg fill-[#217bd0]' />
					</button>
				</div>
			</div>
		),
		photo:
			'https://www.apple.com/v/home/bc/images/promos/apple-watch-se/promo_apple_watch_se_spring__cld5iup1zfrm_large.jpg'
	},
	{
		Module: () => (
			<div className='unit-copy-wrapper'>
				<h4 className='headline text-5xl font-medium mb-2 text-black'>
					Mac Studio
				</h4>
				<h5 className='subhead text-xl mb-1 text-black' role='presentation'>
					Supercharged by M2&nbsp;Max and M2&nbsp;Ultra.
				</h5>

				<p className='callout text-[#6e6e73] text-[21px] leading-[1.19] font-normal tracking-[.011em] mt-[4px]'>
					Check back later for availability
				</p>

				<div className='cta-links'>
					<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full gap-1 text-[#217bd0]'>
						Learn More <IoIosArrowForward className='text-lg fill-[#217bd0]' />
					</button>
				</div>
			</div>
		),
		photo:
			'https://www.apple.com/v/home/bc/images/promos/mac-studio/promo_mac_studio_announce__do7xnc8z5mgm_large.jpg'
	},
	{
		Module: () => (
			<div className='unit-copy-wrapper'>
				<img
					src='https://www.apple.com/v/home/aw/images/logos/apple-tv-4k/promo_tv4k_logo__5m5umvk10duu_large.png'
					alt='logo-img'
					className='logo-img'
				/>

				<h5 className='subhead text-xl text-black my-2' role='presentation'>
					A higher definition of&nbsp;TV.
				</h5>

				<div className='cta-links'>
					<button className='text-xl tracking-tighter hover:underline duration-200 flex items-center justify-center w-full gap-1 text-[#217bd0]'>
						Learn More <IoIosArrowForward className='text-lg fill-[#217bd0]' />
					</button>
				</div>
			</div>
		),
		photo:
			'https://www.apple.com/v/home/bc/images/promos/apple-tv-4k/promo_tv4k_avail__e17d9isb0vwy_large.jpg'
	}
]

export default HomePage
