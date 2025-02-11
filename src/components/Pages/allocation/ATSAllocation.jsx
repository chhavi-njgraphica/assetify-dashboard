import React from 'react'
import "../../../index.css";
import "swiper/css";
import Navbar from '../../Common/Navbar';
import Footer from '../../Common/Footer';
import './allocation.css'

const ATSAllocation = () => {
    return (
        <>
            <Navbar />
            <div className='allocation-wrapper'>
                <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat bg-[url('/src/assets/hero-bg.png')] bg-cover bg-center">
                    <div className='card-container'>
                        <div className='check-ats-section'>
                            <span className='text-white title-heading'>Check ATS Allocation</span>
                            <div className='hash-input-check flex gap-4 flex-wrap mt-4'>
                                <div class="relative flex-1">
                                    <input type="text" class="border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl text-[#FFF] placeholder-white placeholder:text-[15px]" placeholder="" 
                                    value={'0x3683065202B9e669F86116a61b6aE02Df04b0ADC'}
                                    />
                                </div>
                                <button class="flex-initial px-[65px] py-[10px] rounded-lg font-semibold text-[14px] text-white bg-[#301881] border leading-[17.07px] border-[#8260b9] inner-shadow">
                                    <span class="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">Check</span>
                                </button>
                            </div>

                            <div className='total-bal-container flex flex-col text-white'>
                                <span className='total-head1'>Total ATS Balance</span>
                                <span className='total-head2'>95.05232223290557 ATS</span>
                                <div class="">
                                    <input type="text" class="border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl text-[#FFF] placeholder-white placeholder:text-[15px]" placeholder="" 
                                    value={'You can claim your ATS tokens after the official launch.'} disabled/>
                                </div>
                            </div>

                            <div className='transaction-history text-white mt-4'>
                                <span className='total-head1'>Transaction History</span>
                                <div className='transaction-history-card flex flex-wrap gap-6'>
                                    <div className="flex flex-col gap-2 max-w-[536px] flex-wrap">
                                        <div className="flex flex-col gap-2.5">
                                            <h6 className="font-semibold text-lg/[21.94px]">Transaction ID:</h6>
                                            <p className="break-all whitespace-normal">Oxed94cc73de95a8ea7ab0e5bc11068186551ad99af058c4e09135b772a5d0f67a</p>
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <h6 className='fw500'>Network:</h6>
                                            <p className='fw500'>BASE</p>
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <h6 className='fw500'>Token Amount:</h6>
                                            <p className='fw500'>0.003 ETS</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 max-w-[536px]">
                                        <div className="flex flex-col gap-2.5">
                                            <h6 className='fw500'>Date:</h6>
                                            <p className='fw500'>02/01/2025, 08:38:33</p>
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <h6 className='fw500'>Payment Token:</h6>
                                            <p className='fw500'>ETS</p>
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <h6 className='fw500'>ATS Received:</h6>
                                            <p className='text-[#753DD1] fw500'>95.05232223290557 ATS</p>
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

export default ATSAllocation
