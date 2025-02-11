import React from 'react'
import Modal from './Modal'

const TransactionModal = (props) => {
    const { isModalOpen, closeModal } = props
    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className='transaction-heading-wrapper'>
                <span className='buy-sat-heading'>Buy $AST Now</span>
            </div>
            <div className='inputfield-wrapper mt-4'>
                <div className='input-1'>
                    <label className='label-title'>Choose amount*</label>
                    <input type="text" class="mt-2 border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl text-[#FFF] placeholder-white placeholder:text-[15px]"
                        placeholder="Select cryptocurrency..."
                    />
                </div>
                <div className='input-2 mt-3'>
                    <label className='label-title'>Enter amount in USD *</label>
                    <input type="text" class="mt-2 border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl text-[#FFF] placeholder-white placeholder:text-[15px]"
                        placeholder="Amount (USD)"
                    />
                </div>
                <div className='input-3 mt-3'>
                    <label className='label-title'>Crypto Amount</label>
                    <input type="text" class="mt-2 border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl text-[#FFF] placeholder-white placeholder:text-[15px]"
                        placeholder="Crypto amount"
                    />
                </div>
                <div className='input-4 mt-3'>
                    <label className='label-title'>$AST tokens you will receive</label>
                    <input type="text" class="mt-2 border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl text-[#FFF] placeholder-white placeholder:text-[15px]"
                        placeholder="AST tokens"
                    />
                </div>

                <div className='input-5 mt-3'>
                    <label className='label-title'>$AST tokens you will receive</label>
                    <div className='flex justify-between items-center'>
                        <div className='token-input-field'>
                            <input type="text" class="mt-2 border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl text-[#FFF] placeholder-white placeholder:text-[15px]"
                                placeholder="AST tokens"
                            />
                        </div>
                        <div className=''>
                            <button className="self-start rounded-[8px] font-semibold text-[14px] leading-[17.07px] bg-[#301881] py-[10px] px-[16px] border border-[#8260B9] inner-shadow">
                                Apply Code
                            </button>
                        </div>
                    </div>
                </div>

                <div className='buy-btn mt-6'>
                    <button className="w-full self-start rounded-[8px] font-semibold text-[14px] leading-[17.07px] bg-[#301881] py-[10px] px-[16px] border border-[#8260B9] inner-shadow">
                        Buy
                    </button>
                </div>

                <div className='submit-container flex align-middle mt-2'>
                    <input
                        type="checkbox"
                        className="block appearance-none w-4 h-4 sm:w-4 md:w-4 md:h-4 border border-white rounded checked: checked: checked:before:content-['✔'] checked:before:text-white checked:before:text-xs checked:before:flex checked:before:justify-center checked:before:items-center"
                    />
                    <p className="text-sm letter-spacing-1px fs1rem tnc-text-color ml-2">
                        I read and agree to <span className='text-[#6E45E9]'>privacy policy</span>
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default TransactionModal
