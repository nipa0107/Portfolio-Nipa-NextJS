'use client'


export default function Footer() {
    return (
        <footer>
            <div className='container p-8 mx-auto text-center'>
                <div className="inline-flex items-center justify-center bg-gray-100 gap-3 py-1.5 pl-4 pr-4 rounded-full">
                    <span className='text-sm font-medium'>Built using</span>
                    <div className="flex items-center justify-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7' viewBox="0 0 48 48">
                            <path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
                        </svg>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400"><title>Tailwind CSS</title>
                        <path className="fill-current" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>
                    </div>
                </div>
                <div className="my-5 text-sm text-center text-gray-500">
                    <span>Made by Nipa Sinthaisong  •  © 2025 •  Hosted on <a href="https://vercel.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Vercel</a></span>
                </div>
                
            </div>

        </footer>
    )
}