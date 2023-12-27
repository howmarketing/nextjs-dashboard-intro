import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image'

export default function HeyBuddyLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center flex-wrap justify-center align-middle leading-none text-white`}>
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[44px]">
      <Image 
            src="/logo/icon.png"
            width={125}
            height={122}
            className='md:block sm:block xs:block'
            alt="HeyBuddy Logo"
          />
      </p>
      <p>
      <Image 
            src="/logo/white-slogan.png"
            width={125}
            height={122}
            className='md:block sm:block xs:block'
            alt="HeyBuddy Logo"
          />
      </p>
    </div>
  );
}
