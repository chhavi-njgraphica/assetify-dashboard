import React, { useState } from "react";
import Dashboard1 from "../../../assets/Dashboard 3D 1.png";
import rightIcon from "../../../assets/rightIcon.svg";
import TransactionModal from "./TransactionModal";

const features = [
  {
    title: "Invest",
    description: "in fractional ownership of valuable assets",
  },
  {
    title: "Borrow",
    description: "funds using tokenized assets as collateral",
  },
  {
    title: "Earn Passive Income",
    description: "through AI-optimized staking and yield farming",
  },
];

const BuildingSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto xl:px-8 lg:px-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            <img
              src={Dashboard1}
              alt="What We're Building"
              className="w-full rounded-lg"
            />

            <div className="flex flex-col gap-5">
              <button className="self-start rounded-[8px] font-semibold text-[14px] leading-[17.07px] bg-[#301881] py-[10px] px-[22px] border border-[#8260B9] inner-shadow">
                <span className="common-btn-color">About Assetify</span>
              </button>

              <h2 className="text-[28px] lg:text-[46px] font-extrabold text-white lg:leading-[56.7px] leading-[34.13px]">
                What We're Building:
              </h2>

              <p className="lg:text-[16px] text-[14px] text-white lg:leading-[19.5px] leading-[17.07px] tracking-[0.9px]">
                Assetify is a next-gen decentralized finance (DeFi) platform
                combining blockchain and AI. We tokenize real-world assets like real
                estate, gold, and invoices to empower users to:
              </p>

              <div className="space-y-4 ml-4">
                {features.map(({ title, description }, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={rightIcon} alt="" />
                    <h5 className="lg:text-[18px] text-[15px] text-white leading-[18.29px]">
                      <span className="font-medium">{title}</span> {description}
                    </h5>
                  </div>
                ))}
              </div>

              <p className="lg:text-[16px] text-[14px] text-white lg:leading-[19.5px] leading-[17.07px] tracking-[0.9px]">
                We're launching a Smart Wallet powered by AI for top-tier security
                and efficiency. Our mission is to make DeFi accessible, transparent,
                and profitable for everyone.
              </p>

              <div className="lg:flex realtive z-10 md:flex gap-4 items-center grid">
                <button className="lg:self-start relative rounded-xl border-[1.5px]  border-[#8260B9]  font-semibold text-[18px] bg-[#301881] py-[15px] px-[32px] text-white leading-[21.94px] shadow-[0_0_0_4px_#200e3d]">
                  <div>Join Now</div>
                  <div class="fancyoutline absolute -top-[6px] -left-[6px] -right-[6px] -bottom-[6px] rounded-[17px] -z-[1] after:absolute after:top-1/2 after:left-1/2 after:w-[20rem] after:h-[20rem] after:-z-[1]"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransactionModal isModalOpen={isModalOpen} closeModal={closeModal}/>
    </>
  )
};

export default BuildingSection;
