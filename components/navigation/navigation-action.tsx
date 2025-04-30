"use client"
import React from 'react'
import ActionTooltip from '../action-tooltip'
import { Plus } from 'lucide-react'

const NavigationAction = () => {
  return (
    <div>
        <ActionTooltip side='right' align='center' label='Add a server'>
            <button className="group flex items-center">
                <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-transparent group-hover:dark:bg-indigo-500'>
                    <Plus
                    size={25}
                    className='group-hover:text-white transition text-white-500'
                    />
                </div>
            </button>
        </ActionTooltip>
    </div>
  )
}

export default NavigationAction
