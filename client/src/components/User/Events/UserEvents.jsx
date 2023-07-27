import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../api/axiosInstance';

const UserEvents = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  console.log("status ---", status)
  useEffect(() => {
    try {
      (async() => {
        let response = await axiosInstance.get('/events', {
          headers: {
            Authorization: `eventm33 ${JSON.parse(
              localStorage.getItem("userToken")
            )}`,
          },
          params: {
            userId,
          },
        });
        console.log(response);
        if(response.data !== false) {
          setStatus(true)
        }
      })();
    } catch (err) {
      console.log(err)
    }
  },[])
  return (
    <div className='bg-white h-screen flex flex-col items-center w-full'>
      <div className='w-full font-light text-3xl text-white bg-amber-700 py-2 pl-10 cursor-pointer' onClick={() => setOpen(!open)}>Create a custom event +</div>
       {status ? <></> : <div className="bg-black text-white font-roboto bg-opacity-70 mt-12 md:mt-24 lg:mt-32 xl:mt-40 w-3/4 text-3xl md:text-4xl lg:text-5xl text-center p-4 md:p-6 lg:p-8">
       No events available
        </div>}
       
    </div>
  )
}

export default UserEvents