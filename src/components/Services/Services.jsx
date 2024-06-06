import { FiEdit2 } from 'react-icons/fi'
import { CgWebsite } from 'react-icons/cg'
import { BsVectorPen } from 'react-icons/bs'
import { RiSpeakLine } from 'react-icons/ri'
import { TbDeviceMobileMessage, TbDiamond } from 'react-icons/tb'

import './Services.css'
import { Service } from '../index'

export default function Services() {
  return (
    <section className='services'>
      <div className='container'>
        <div className='section-name'>Our Services</div>
        <h3 className='section-title'>
          High-impact services for your business
        </h3>
        <div className='services__wrapper'>
          <Service
            variant='dark'
            icon={<FiEdit2 size={20} color='#0C0C0C' />}
            title='Content Marketing'
            desc='Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'
          />
          <Service
            variant='light'
            icon={<BsVectorPen size={20} color='#FBFBFB' />}
            title='Graphic Design'
            desc='Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'
          />
          <Service
            variant='light'
            icon={<TbDeviceMobileMessage size={20} color='#FBFBFB' />}
            title='Digital Marketing'
            desc="Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing"
          />
          <Service
            variant='light'
            icon={<CgWebsite size={20} color='#FBFBFB' />}
            title='Web Design'
            desc='We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.'
          />
          <Service
            variant='light'
            icon={<RiSpeakLine size={20} color='#FBFBFB' />}
            title='IT Consulting'
            desc='IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'
          />
          <Service
            variant='light'
            icon={<TbDiamond size={20} color='#FBFBFB' />}
            title='Brand Identity'
            desc='It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'
          />
        </div>
      </div>
    </section>
  )
}
