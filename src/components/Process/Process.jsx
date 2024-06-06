import './Process.css'
import { ProcessCard } from '../index'

import { VscSettings } from 'react-icons/vsc'
import { LuSearchCheck } from 'react-icons/lu'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

export default function Process() {
  return (
    <section className='process'>
      <div className='container'>
        <div className='section-name'>Process</div>
        <div className='section-title'>Process that moves things forward</div>
        <div className='process__wrapper'>
          <ProcessCard
            icon={<FaRegLightbulb size={20} color='#FBFBFB' />}
            title='Ideate'
            desc='The ideation process is a crucial phase in the design process where creative thinking and brainstorming'
          />
          <ProcessCard
            icon={<IoMailOutline size={20} color='#FBFBFB' />}
            title='Reserach'
            desc='Research is a critical component of the design process, helping designers understand the problem'
          />
          <ProcessCard
            icon={<VscSettings size={20} color='#FBFBFB' />}
            title='Create'
            desc='Designing a process involves several key steps to ensure clarity, efficiency, successful
implementation'
          />
          <ProcessCard
            icon={<LuSearchCheck size={20} color='#FBFBFB' />}
            title='Testing'
            desc='Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements'
          />
        </div>
      </div>
    </section>
  )
}
