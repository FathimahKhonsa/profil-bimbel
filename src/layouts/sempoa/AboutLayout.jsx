import React from 'react';
import { dataKeunggulanSempoa, dataLevelSempoa } from '../../data/data';
import CardTwo from '../../fragments/card/CardTwo';
import ReactImageGallery from 'react-image-gallery';

const AboutLayout = () => {
  return (
    <div className='container w-full mx-auto md:p-10 p-5'>
      <h1 className='lg:text-4xl sm:text-3xl text-2xl text-center text-grey-dark font-semibold font-poppins'>Mengapa Belajar <span className='text-primary-blue'>Sempoa</span></h1>
      <p className='md:text-xl sm:text-base text-sm font-thin font-lora text-grey-medium text-justify mt-5'>
        Pembelajaran mental aritmatika dengan media belajar sempoa merupakan metode berhitung yang memberikan ransangan pada otak. Dengan menggunakan sempoa diharapkan dapat meningkatkan daya kerja otak sehingga otak anak dapat berkembang secara optimal.
      </p>

      <div className='mt-5 flex justify-center bg-radial from-pink-100 from-5% to-white to-50%'>
        <img src='src/assets/images/AboutSempoa.png' className='lg:w-2/3 '/>
      </div>

      <div className='md:mt-20 mt-10'>
        <h1 className='md:hidden lg:block lg:text-4xl md:text-3xl text-2xl text-center text-grey font-semibold font-poppins'>Keunggulan <span className='text-primary-blue'>Sempoa Asma</span></h1>
        <div className='md:hidden lg:flex sm:grid sm:grid-cols-2 md:grid-cols-3 sm:place-items-stretch sm:place-content-center md:justify-between mt-5'>
          {dataKeunggulanSempoa.map((item, i) => (
            <CardTwo>
              <CardTwo.Header imgUrl={item.imgUrl}/>
              <CardTwo.Title>{item.title}</CardTwo.Title>
              <CardTwo.Body content={item.content} classname='hidden'/>
            </CardTwo>
          ))}
        </div>

        <div className='hidden lg:hidden md:grid grid-cols-3 place-items-stretch'>
          {dataKeunggulanSempoa.map((item, i) => (
            <CardTwo>
              <CardTwo.Header imgUrl={item.imgUrl}/>
              <CardTwo.Title>{item.title}</CardTwo.Title>
              <CardTwo.Body content={item.content} classname='hidden'/>
            </CardTwo>
          ))}

          <h1 className='col-span-2 text-7xl font-bold text-end'>Keunggulan <span className='text-primary-blue'>Sempoa Asma</span></h1>
        </div>
      </div>

      <div className='md:mt-10 md:flex items-center lg:gap-10 md:gap-5 mt-5'>
        <h1 className='md:hidden text-3xl text-center font-semibold font-poppins text-grey-dark'>Level Belajar <span className='text-primary-blue'>Sempoa</span></h1>
        <div className='md:w-1/3  overflow-hidden mt-5 md:mt-0 rounded-xl'>
          <ReactImageGallery
            items={dataLevelSempoa}
            showFullscreenButton={false}
            showPlayButton={false} 
          />
        </div>
        <div className='md:w-2/3 hidden md:block'>
          <h1 className='lg:text-6xl md:text-3xl font-semibold font-poppins text-grey-dark'>Level Belajar <span className='text-primary-blue'>Sempoa</span></h1>
          <p className='lg:text-lg text-sm font-lora font-light text-grey-medium text-justify lg:mt-7 mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus sem sit amet tellus elementum, non vestibulum nibh suscipit. Quisque id lobortis sem, non vulputate nisl. Ut ut ligula ac elit eleifend commodo quis at mauris. Morbi accumsan est in mi fringilla rhoncus. Nam pulvinar tellus at odio maximus molestie eu mollis ante. Nulla et finibus dolor. Etiam et quam tristique, condimentum dolor in, commodo tellus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutLayout;
