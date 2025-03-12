import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { TbAlertSquareFilled } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { PiDogFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaPaw } from "react-icons/fa";
const features = [
  {
    name: 'Emergency Assistance:',
    description:
      'Get instant guidance from veterinarians to stabilize injured or sick animals before reaching a clinic.',
    icon: TbAlertSquareFilled,
  },
  {
    name: 'Virtual Consultations:',
    description:
      'Connect with certified vets via video calls, chat, or phone to receive expert advice at your convenience.',
    icon: FaUserDoctor,
  },
  {
    name: 'Adoption Support:',
    description:
      'We connect abandoned and rescued animals with loving families, ensuring proper care and guidance for new pet parents.',
    icon: PiDogFill,
  },
  {
    name: 'Health Monitoring:',
    description:
      'Easily track your pet’s medical history, vaccination schedules, and medication reminders through our platform.',
    icon: MdHealthAndSafety,
  },
]

export default function Hero() {
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 max-w-screen">
        <div className="mx-auto max-w-[70%] lg:text-center ">
          <h2 className="text-base/7 font-semibold text-orange-600">WELCOME TO PASHU SEWA APP</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Revolutionizing Animal Welfare with Compassion and Technology
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          At <span className='text-orange-600'>Pashu Sewa</span>, we offer a wide range of services designed to ensure every animal receives the care they deserve:
          </p>
        </div>
        <div className="mx-auto max-w-[70%] mt-16 max-w-2xl sm:mt-20 lg:mt-24 ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-br flex flex-col items-center justify-center from-orange-500 via-orange-400 to-orange-600 text-white py-16 px-8 min-h-auto text-center">
      <div className='lg:w-[70%]'>
        
            <div className='flex justify-center space-x-6'>
            <FaPaw className='text-[100px]'/>
            <h1 className="text-4xl font-bold mb-6">
                Empowering Animal Care with Technology
            </h1>
            </div>
            <p className="text-lg leading-8">
                <strong>Online veterinary services</strong> are now more accessible and efficient, thanks to <strong>Pashu Sewa</strong>. Their mission is to deliver affordable, high-quality veterinary care to pet owners and livestock farmers in India. The innovative <strong>Pashu Sewa</strong> app offers instant and convenient video consultations with certified veterinarians and trained animal caregivers. By eliminating the need for lengthy travel and inconvenient appointments, the platform ensures <strong>seamless</strong> and effective animal care right from the comfort of your home or farm.
            </p>
            <p className="text-lg leading-8 mt-6">
                With <strong>Pashu Sewa’s</strong> AI-enabled diagnosis tool, you can access expert guidance for early disease detection and preliminary assessment. The platform’s multilingual support in 11 Indian languages bridges communication gaps, fostering stronger connections between pet owners and veterinarians. Flexible pricing plans and subscription models ensure that <strong>Pashu Sewa</strong> remains <strong>affordable</strong> for all, empowering pet owners and livestock caregivers to actively safeguard their animals' health and well-being.
            </p>
      </div>
        </div>
    </>
  )
}
