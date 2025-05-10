import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../../components/button';
import { BsMenuAppFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

const Navigation = (props) => {
    const { classname } = props;

    return (
        <>
            <Link to='idAbout' smooth={true} duration={500} offset={-70} spy={true} activeClass='font-bold' className={classname}>About</Link>
            <Link to='idSchool' smooth={true} duration={500} offset={-70} spy={true} activeClass='font-bold' className={classname}>School</Link>
            <Link to='idProgram' smooth={true} duration={500} offset={-70} spy={true} activeClass='font-bold' className={classname}>Program</Link>
            <Link to='idCabang' smooth={true} duration={500} offset={-70} spy={true} activeClass='font-bold' className={classname}>Cabang</Link>
            <Link to='idContact' smooth={true} duration={500} offset={-70} spy={true} activeClass='font-bold' className={classname}>Contact</Link>
        </>
    )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
       <nav className='flex w-full justify-between items-center'>
        <div className='hidden w-full h-12 justify-between items-center md:flex'>
            <Navigation classname='font-lora text-grey-medium font-extralight hover:text-grey-dark hover:underline hover:underline-offset-8'/>
        </div>
        <div className='md:hidden'>
            <button onClick={toggleNavbar}>
                {isOpen ? <CgClose/> : <BsMenuAppFill/>}
            </button>
        </div>
       </nav>
       {isOpen && (
        <div className='flex flex-col items-center basis-full'>
            <Navigation/>
        </div>
       )}
    </>
  )
}



export default NavBar
