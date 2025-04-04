import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface FormStep4Props {
  currentStep: number;
  onNext: () => void;
  completedSteps: boolean[];
  setCompletedSteps: (steps: boolean[]) => void;
}

const FormStep4: React.FC<FormStep4Props> = ({
  onNext,
  completedSteps,
  setCompletedSteps,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const newCompletedSteps = [...completedSteps];
            newCompletedSteps[3] = true;
            setCompletedSteps(newCompletedSteps);
            onNext(); 
          }, 500); 
          return prev;
        }
        return prev + 5;
      });
    }, 200); 

    return () => clearInterval(interval);
  }, [completedSteps, onNext, setCompletedSteps]);

  return (
    <div className="flex w-full justify-center py-[1.5rem]">
      <div className="lg:w-[70%] xl:h-[854px] w-full h-auto flex lg:flex-row rounded-[20px] bg-white">
        <div className="lg:flex hidden lg:w-1/2 bg-[#DAF2FF] w-0 h-full rounded-bl-[20px] shadow-bl-2xl items-center justify-center overflow-hidden">
          <div className="w-[500px] h-[450px] relative py-auto">
            <Image src="/image-8.png" alt="Verification" fill />
          </div>
        </div>
        <div className="lg:w-1/2 h-full w-full flex flex-col text-center px-2 py-[1rem] justify-center">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-gray-950 font-medium md:text-2xl text-xl">
              Onboarding
            </h1>
            <h4 className="text-gray-950 font-medium md:text-lg text-md mb-4">
              Hang tight we&apos;re loading everything for you to get started<br />
              It&apos;ll only take few seconds!
            </h4>
            
          
            <div className="relative w-[200px] h-[200px] mx-auto mt-6">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-300"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500"
                  strokeWidth="3"
                  strokeDasharray={`${progress}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-700">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStep4;