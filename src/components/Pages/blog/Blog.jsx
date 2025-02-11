import React from 'react'
import "../../../index.css";
import "swiper/css";
import Navbar from '../../Common/Navbar';
import Footer from '../../Common/Footer';
import './blogs-section.css';
import BlogsBanner from '../../../assets/blogs-export-img.png';
import Card1 from '../../../assets/card1.png';
import Card2 from '../../../assets/card2.png';
import Card3 from '../../../assets/card3.png';
import Card4 from '../../../assets/card4.png';
import Section1 from "../../../assets/section1.png";
import Section2 from "../../../assets/section2.png";



const Blog = () => {
    const pointsObj = [
        {
            id: 1,
            desc: 'Transaction Validation: When a Bitcoin transaction is initiated, it is broadcast to the network and grouped into a block. Each block contains a set of transactions awaiting verification.'
        },
        {
            id: 2,
            desc: "Proof of Work (PoW): Miners compete to solve a cryptographic puzzle, known as Proof of Work. This puzzle involves finding a specific number (nonce) that, when combined with the block’s data, produces a hash that meets certain criteria."
        },
        {
            id: 3,
            desc: "Block Addition: The first miner to solve the puzzle broadcasts their solution to the network. Once other miners verify the solution, the block is added to the blockchain, and the miner receives a reward."
        },
        {
            id: 4,
            desc: "Reward Distribution: Miners are rewarded with a predetermined amount of Bitcoin, which decreases approximately every four years in an event called “Halving.” Currently, the reward is 6.25 BTC per block (as of 2025)."
        }
    ]

    return (
        <>
            <Navbar />
            <div className="blogs-wrapper bg-[#12032c]">
                <div className="blogs-title-container mx-5 sm:mx-14 font-montserrat">
                    <div className='contained-blog'>
                        <div className='news-btn'>
                            <button class="flex-initial px-[34px] py-[10px] rounded-lg font-semibold text-[14px] text-white bg-[#301881] border leading-[17.07px] border-[#8260b9] inner-shadow">
                                <span class="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">News</span>
                            </button>
                            <div className='blog-heading mt-3 text-5xl font-extrabold text-white lg:leading-[81px]  leading-tight'>
                                <span className='text-[#6E45E9]'>What is<span className='text-white'> Bitcoin Mining </span></span>
                            </div>
                            <div className='flex'>
                                <p className='blog-sub-heading lg:text-[16px] text-[14px] mt-3 text-white lg:leading-[19.5px] leading-[17.07px] tracking-[0.9px]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blog-banner blog-banner-container mt-14'>
                    <div className='banner-img'>
                        <img src={BlogsBanner} width={1320} className='mx-auto' />
                        <div className='mt-4'>
                            <span className='date-font'>July 5, 2024</span>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className="grid grid-cols-12 gap-4 pt-5 setting-container">
                            <div className="col-span-12 lg:col-span-8 text-white">
                                <div className='title-blog-head2'>
                                    <span>What is Bitcoin Mining? A Beginner’s Guide</span>
                                </div>
                                <p className='para-one mt-3'>
                                    In recent years, Bitcoin has gained significant attention as a revolutionary digital currency. But have you ever wondered how new Bitcoins come into existence? The answer lies in a process known as Bitcoin mining. Let’s delve into what Bitcoin mining is, how it works, and why it’s essential to the cryptocurrency ecosystem.
                                </p>

                                <div className='mt-4'>
                                    <span className='short-head'>Understanding Bitcoin Mining</span>
                                    <p className='para-one mt-3'>
                                        Bitcoin mining is the process of validating and adding new transactions to the Bitcoin blockchain, a decentralized public ledger. Miners use powerful computers to solve complex mathematical problems, and in return, they are rewarded with newly created Bitcoins and transaction fees. This process ensures the integrity and security of the Bitcoin network.
                                    </p>
                                </div>

                                <div className='banner-loreum-heading flex flex-col'>
                                    <span className='loreum-heading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nesciunt dolores consectetur temporibus</span>
                                    <br></br>
                                    <div className='flex items-center gap-1'>
                                        <span>
                                            <svg width="41" height="2" viewBox="0 0 41 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="0.5" y1="1" x2="40.5" y2="1" stroke="white" stroke-width="2" />
                                            </svg>
                                        </span>
                                        <span className='fw800'>Name</span>
                                    </div>
                                </div>

                                <div className='points-wrapper mt-7'>
                                    <p className='short-head pb-3'>How Does Bitcoin Mining Work?</p>
                                    {pointsObj.map((data, index) => {
                                        return (
                                            <div className={`points-one flex items-baseline gap-2 px-4 ${index !==0 && 'mt-2'}`}>
                                                <span>
                                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.4866 1.98664C16.5506 1.92272 16.6013 1.84684 16.6359 1.76332C16.6705 1.6798 16.6883 1.59029 16.6883 1.49989C16.6883 1.40949 16.6705 1.31998 16.6359 1.23646C16.6013 1.15295 16.5506 1.07706 16.4866 1.01314C16.4227 0.949221 16.3468 0.898516 16.2633 0.863922C16.1798 0.829329 16.0903 0.811523 15.9999 0.811523C15.9095 0.811523 15.82 0.829329 15.7365 0.863922C15.6529 0.898516 15.5771 0.949221 15.5131 1.01314L6.37489 10.1528L2.04914 5.82564C1.98522 5.76172 1.90934 5.71102 1.82582 5.67642C1.7423 5.64183 1.65279 5.62402 1.56239 5.62402C1.37983 5.62402 1.20474 5.69655 1.07564 5.82564C0.946548 5.95474 0.874023 6.12982 0.874023 6.31239C0.874023 6.49496 0.946548 6.67005 1.07564 6.79914L5.88814 11.6116C5.952 11.6757 6.02787 11.7265 6.11139 11.7611C6.19492 11.7958 6.28446 11.8136 6.37489 11.8136C6.46532 11.8136 6.55486 11.7958 6.63839 11.7611C6.72191 11.7265 6.79778 11.6757 6.86164 11.6116L16.4866 1.98664ZM10.7006 11.6116L9.46864 10.3783L10.4408 9.40614L11.1874 10.1528L20.3256 1.01314C20.4547 0.884048 20.6298 0.811523 20.8124 0.811523C20.995 0.811523 21.17 0.884048 21.2991 1.01314C21.4282 1.14224 21.5008 1.31733 21.5008 1.49989C21.5008 1.68246 21.4282 1.85755 21.2991 1.98664L11.6741 11.6116C11.6103 11.6757 11.5344 11.7265 11.4509 11.7611C11.3674 11.7958 11.2778 11.8136 11.1874 11.8136C11.097 11.8136 11.0074 11.7958 10.9239 11.7611C10.8404 11.7265 10.7645 11.6757 10.7006 11.6116Z" fill="#6E45E9" />
                                                    </svg>
                                                </span>
                                                <span className='para-one'>
                                                    {data.desc}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className='img-section flex gap-2 justify-center mt-7'>
                                    <img className='section-img-1' src={Section1} width={560}/>
                                    <img className='section-img-2' src={Section2} width={300}/>
                                </div>
                            </div>

                            <div className="col-span-12 lg:col-span-4 pl-3 recent-post-section">
                                <div className='second-part-content '>
                                    <span className='recent-font'>Recent Posts</span>
                                    <div className='card-section text-white flex gap-3 items-center mt-16'>
                                        <div className='card-img'>
                                            <img src={Card1} width={210}/>
                                        </div>
                                        <div className='card-text flex flex-col py-2'>
                                            <span className='fw-500'>LEARN & EARN</span>
                                            <span className='cd-text-2'>Learn about coin and earn an All-Access Pass</span>
                                        </div>
                                    </div>
                                    <div className='border-section mt-4'></div>

                                    <div className='card-section text-white flex gap-3 items-center mt-5'>
                                        <div className='card-img'>
                                            <img src={Card2} width={210}/>
                                        </div>
                                        <div className='card-text flex flex-col py-2'>
                                            <span className='fw-500'>LEARN & EARN</span>
                                            <span className='cd-text-2'>Learn about coin and earn an All-Access Pass</span>
                                        </div>
                                    </div>
                                    <div className='border-section mt-4'></div>

                                    <div className='card-section text-white flex gap-3 items-center mt-5'>
                                        <div className='card-img'>
                                            <img src={Card3} width={210}/>
                                        </div>
                                        <div className='card-text flex flex-col py-2'>
                                            <span className='fw-500'>LEARN & EARN</span>
                                            <span className='cd-text-2'>Learn about coin and earn an All-Access Pass</span>
                                        </div>
                                    </div>
                                    <div className='border-section mt-4'></div>

                                    <div className='card-section text-white flex gap-3 items-center mt-5'>
                                        <div className='card-img'>
                                            <img src={Card4} width={210}/>
                                        </div>
                                        <div className='card-text flex flex-col py-2'>
                                            <span className='fw-500'>LEARN & EARN</span>
                                            <span className='cd-text-2'>Learn about coin and earn an All-Access Pass</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog
