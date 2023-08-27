"use client"
import React from 'react'
import Logo from './Logo'
import Container from './Container'
import UserMenu from './UserMenu'
import { ModeToggle } from './ModeToggle'


const Navbar = ({}) => {
  return (
    <div className='relative w-full  shadow-lg'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div
                    className='
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    '
                >
                    <Logo/> 
                    
                    <UserMenu/>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar