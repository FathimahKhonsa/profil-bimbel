import React from 'react';
import { IoMdCheckboxOutline } from 'react-icons/io';

const PembelajaranLayout = () => {
  const data = [
    { id: 1, content: "Pengalaman belajar yang menyenangkan", online: <IoMdCheckboxOutline className='w-4 h-4 md:h-5 md:w-5 lg:w-6 lg:h-6'/>, offline: <IoMdCheckboxOutline className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>},
    { id: 2, content: "Kelas Interaktif", online: <IoMdCheckboxOutline className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>, offline: <IoMdCheckboxOutline className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>},
    { id: 3, content: "Pengembangan Belajar Mandiri", online: <IoMdCheckboxOutline className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>, offline: <IoMdCheckboxOutline className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>},
    { id: 4, content: "Diawasi dan Dipandu Oleh Pengajar yang berpengalaman", online: <IoMdCheckboxOutline className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>, offline: <IoMdCheckboxOutline className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>},
  ]

  return (
    <div className='container w-full mx-auto md:mb-8 mb-5'>
      <div className='bg-primary-blue md:p-10 p-5'>
        <h1 className='text-white lg:text-4xl md:text-3xl text-2xl font-poppins font-semibold text-center'>Kembangkan Potensi Anak Kini Bisa dari Rumah Saja</h1>
        <p className='text-white font-light font-lora md:text-lg sm:text-base text-sm text-justify mt-5'>
            Siswa Rumah Belajar Cita Mutiara dapat memilih kelas secara offline dan online. Siswa akan diajari dengan metode pembelajaran yang interaktif di kelas maupun secara online. Pengajar kami akan memberi kelas secara online melalui zoom meeting, sehingga siswa dapat belajar di rumah saja.
        </p>
      </div>

      <div className='md:p-7 p-3'>
        <table className='table-auto min-w-full'>
            <thead>
                <tr>
                    <th></th>
                    <th className='md:text-lg sm:text-base text-sm'>Online</th>
                    <th className='md:text-lg sm:text-base text-sm'>Offline</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, i) => (
                    <tr key={item.id} className='bg-white hover:bg-yellow-100'>
                        <td className='md:text-lg sm:text-base text-sm font-lora py-2 px-5'>{item.content}</td>
                        <td>
                            <div className='flex justify-center items-center'>
                                {item.online}
                            </div>
                        </td>
                        <td>
                            <div className='flex justify-center items-center'>
                                {item.offline}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default PembelajaranLayout
