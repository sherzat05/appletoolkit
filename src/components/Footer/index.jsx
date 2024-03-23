import './index.scss'
export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container footer--container'>
				<div className='flex py-10 items-start justify-between'>
					{footerMenuItems.map(({ title, items, items_col }, idx) =>
						items_col ? (
							<ul key={idx} className='flex flex-col items-start gap-4'>
								{items_col?.map((el, index) => (
									<li className='text-black' key={index}>
										<h4 className='footer__title text-black'>{el.title}</h4>
										{Array.isArray(el.items) &&
											el.items?.map((item, index) => (
												<li className='footer__link text-black' key={index}>
													{item.text}
												</li>
											))}
									</li>
								))}
							</ul>
						) : (
							<div className='text-black' key={idx}>
								<h4 className='text-black footer__title'>{title}</h4>
								<ol>
									{items.map((item, index) => (
										<li className='text-black footer__link' key={index}>
											{item.text}
										</li>
									))}
								</ol>
							</div>
						)
					)}
				</div>
				<div className=''>
					<button className='text-[#0066cc] text-sm'>
						Find a retailer <span className='text-[#79797a]'>near you.</span>
					</button>
				</div>
				<hr className='my-5 w-full h-[1px] bg-[#79797a]' />
				<div className='flex items-center justify-between w-full pb-3'>
					<div className='inline-flex items-center gap-3'>
						<h4 className='text-black text-sm text-[#79797a]'>
							{' '}
							Copyright © 2024 Apple Inc. All rights reserved.
						</h4>
						<ul className='flex items-center'>
							<li className='text-black text-sm'>Privacy Policy </li>
							<hr className='w-[1px] h-[14px] mx-2 bg-[#79797a]' />
							<li className='text-black text-sm'>Legal</li>
							<hr className='w-[1px] h-[14px] mx-2 bg-[#79797a]' />
							<li className='text-black text-sm'>Site Map</li>
						</ul>
					</div>
					<h5 className='text-sm text-[#79797a]'>Kyrgyzstan</h5>
				</div>
			</div>
		</footer>
	)
}

const footerMenuItems = [
	{
		title: 'Explore',
		items: [
			{
				text: 'Mac',
				link: ''
			},
			{
				text: 'iPad',
				link: ''
			},
			{
				text: 'iPhone',
				link: ''
			},
			{
				text: 'Watch',
				link: ''
			},
			{
				text: 'Airpods',
				link: ''
			},
			{
				text: 'TV & Home',
				link: ''
			},
			{
				text: 'AirTag',
				link: ''
			}
		]
	},
	{
		items_col: [
			{
				title: 'Account',
				items: [
					{
						text: 'Manage Your Apple ID',
						link: ''
					},
					{
						text: 'iCloud.com',
						link: ''
					}
				]
			},
			{
				title: 'Entertainment',
				items: [
					{
						text: 'Apple One',
						link: ''
					},
					{
						text: 'Apple TV+',
						link: ''
					},
					{
						text: 'Apple Music',
						link: ''
					},
					{
						text: 'Apple Arcade',
						link: ''
					},
					{
						text: 'Apple Podcasts',
						link: ''
					},
					{
						text: 'Apple Books',
						link: ''
					},
					{
						text: 'App Store',
						link: ''
					}
				]
			}
		]
	},
	{
		title: 'For Business',
		items: [
			{
				text: 'Apple and Business',
				link: ''
			}
		]
	},
	{
		items_col: [
			{
				title: 'Apple Values',
				items: [
					{
						text: 'Accessibility',
						link: ''
					},
					{
						text: 'Environment',
						link: ''
					},
					{
						text: 'Privacy',
						link: ''
					}
				]
			},
			{
				title: 'About Apple',
				items: [
					{
						text: 'Career Opportunities',
						link: ''
					},
					{
						text: 'Investors',
						link: ''
					},
					{
						text: 'Ethics & Compliance',
						link: ''
					},
					{
						text: 'Events',
						link: ''
					}
				]
			}
		]
	}
]
