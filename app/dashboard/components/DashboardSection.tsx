"use client"
import React, { useEffect, useState } from 'react'
import DashboardHeader from './DashboardHeader'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp, Bell, ChevronDown, Ellipsis } from 'lucide-react'
import Calendar from './Calender'
import EarningsGraph from './EarningsGraph'
import axios from 'axios'
import { CircularProgressbar } from 'react-circular-progressbar'

interface DashboardStats {
  student_count: number;
  teacher_count: number;
  staff_count: number;
  girls_count: number;
  boys_count: number;
}

interface Notice {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
}


const DashboardSection = () => {
  const [fullName, setFullName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loadingNotices, setLoadingNotices] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const adminId = sessionStorage.getItem("adminId");
      const authToken = sessionStorage.getItem("authToken");

      if (!adminId || !authToken) {
        console.error("Admin ID or Auth Token is missing.");
        setLoading(false);
        return;
      }

      try {
      
        const adminResponse = await axios.get(
          `https://sch-mgt-03yw.onrender.com/accounts/user/${adminId}/`,
          { headers: { Authorization: `Token ${authToken}` } }
        );
        setFullName(adminResponse.data.full_name);

       
        const statsResponse = await axios.get(
          `https://sch-mgt-03yw.onrender.com/dashboard/`,
          { headers: { Authorization: `Token ${authToken}` } }
        );
        setStats(statsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
      await fetchNotices();
    };

    fetchData();
  }, []);

 
  const totalStudents = stats ? stats.boys_count + stats.girls_count : 0;
  const boysPercentage = totalStudents > 0 ? Math.round((stats?.boys_count || 0) / totalStudents * 100) : 0;
  const girlsPercentage = totalStudents > 0 ? Math.round((stats?.girls_count || 0) / totalStudents * 100) : 0;

 

  const fetchNotices = async () => {
    const authToken = sessionStorage.getItem("authToken");
    if (!authToken) {
      console.error("Authentication token missing");
      setLoadingNotices(false);
      return;
    }
  
    try {
      const response = await axios.get(
        "https://sch-mgt-03yw.onrender.com/notice/",
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );
      setNotices(response.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoadingNotices(false);
    }
  };
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
      <DashboardHeader />
        <div className='flex flex-col gap-5 w-full  '>
            <div className='flex xl:flex-row  flex-col gap-5 w-full '>
                <div className='flex flex-col gap-2 xl:w-[60%] w-full '>
                <div className="flex justify-between w-full p-3  items-center  bg-[#FFFFFF] rounded-xl ">
                <div className='flex flex-col gap-3 w-full p-2 '>
                <h1 className="md:text-2xl text-lg font-semibold">
                  Welcome, {loading ? "Loading..." : fullName || "Admin"}
                </h1>
                <p className='text-sm text-gray-400'>
                Manage your school operations with ease. 
                Stay updated on academics, attendance, finances, and more—all in one place.
                    Let’s keep shaping a brighter future together!
                </p>
                </div>

                <div className='lg:flex gap-4 hidden w-[200px] relative h-[152px] '>
                    <Image src='/Design-stats-pana-1.png' alt='Dashboard Image' fill />
                </div>
                </div>

                <div className='w-full p-3 flex gap-3  flex-col '>
                <div className='flex flex-col gap-2 w-full bg-[#FFFFFF] rounded-lg p-3'>
              <div className='flex justify-between w-full'>
              <h3 className='text-left  text-lg lg:text-xl'>Financial Overview</h3>

              <div className='flex gap-2 items-end ' >
                <div className='bg-[#F5F4F9] p-2 rounded-lg flex gap-2'>
                <p className='text-[12px]'>2025-2026</p>
                <ChevronDown/>
                </div>

                <div className='bg-[#F5F4F9] p-2 rounded-lg flex gap-2 text-[12px]'>
                <p className='text-[12px]'>Annual</p>
                <ChevronDown/>
                </div>
              </div>
              </div>


              <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full  gap-3'>
              <div className='bg-[#C3EBFA] rounded-lg gap-4 flex flex-col p-3 '>
                <div className='flex justify-between w-full h-1/2'>
                  <div className='w-1/4 h-full relative'>
                    <Image src='/image-2.png' alt='Dashboard Image' fill />
                  </div>

                  <div className='rounded-full w-[70px] h-[35px] flex p-2 gap-3 text-sm font-normal bg-[#F5F4F9] text-teal-600'>
                  <ArrowUp className='w-1/2 h-full text-teal-600' />
                  <p>12%</p>
                  </div>
                </div>

                <div className='flex flex-col '>
                <h3 className='text-[12px]'>N 29,545,000</h3>
                <p className='text-[12px]'>Total Income</p>
                </div>
              </div>

              <div className='bg-[#C3EBFA] rounded-lg gap-4 flex flex-col p-3'>
                <div className='flex justify-between w-full h-1/2'>
                  <div className='w-1/4 h-full relative'>
                    <Image src='/image-2.png' alt='Dashboard Image' fill />
                  </div>

                  <div className='rounded-full w-[70px] h-[35px] flex p-2 gap-3 text-sm font-normal bg-[#F5F4F9] text-red-600'>
                  <ArrowUp className='w-1/2 h-full text-red-600' />
                  <p>12%</p>
                  </div>
                </div>

                <div className='flex flex-col '>
                <h3 className='text-[12px]'>N 29,545,000</h3>
                <p className='text-[12px]'>Total Expenses</p>
                </div>
              </div>

              <div className='bg-[#C3EBFA] rounded-lg gap-4 flex flex-col p-3 '>
                <div className='flex justify-between w-full h-1/2'>
                  <div className='w-1/4 h-full relative'>
                    <Image src='/image-2.png' alt='Dashboard Image' fill />
                  </div>

                  <div className='rounded-full w-[70px] h-[35px] flex p-2 gap-3 text-sm font-normal bg-[#F5F4F9] text-teal-600'>
                  <ArrowUp className='w-1/2 h-full text-teal-600' />
                  <p>12%</p>
                  </div>
                </div>

                <div className='flex flex-col '>
                <h3 className='text-[12px]'>N 29,545,000</h3>
                <p className='text-[12px]'>Total Income</p>
                </div>
              </div>
              </div>

                </div>
              <div className='flex-col flex md:flex-row  w-full gap-2'>
              <div className="bg-[#FFFFFF] rounded-md flex flex-col justify-between xl:w-1/2 w-full">
                <div className="flex justify-between p-3 items-center w-full">
            <h3 className="flex text-left text-lg ">Students</h3>
            <Link href="" className="text-right flex">
              <Ellipsis />
            </Link>
                </div>

          <div className="flex flex-col items-center p-2 w-full ">
    
          <div className="flex flex-row justify-center gap-8 mb-6 w-full">
    {/* Boys Progress */}
    <div className="w-full max-w-[120px]">
    <div style={{ position: 'relative', width: 'your-desired-width', height: 'your-desired-height' }}>
  <CircularProgressbar
    value={boysPercentage}
   
    styles={{
      path: { stroke: '#1E90FF' },
      text: {
        fontSize: '24px',
        fontWeight: 'bold',
        fill: '#000',
        
      },
      trail: { stroke: '#E0E0E0' }
    }}
  />
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '24px',
      fontWeight: 'bold',
      fill: '#000',
    }}
  >
    {`${boysPercentage}%`}
  </div>
</div>
      <div className="text-center mt-2">
        <div className='flex w-full justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
    </div>

   
    <div className="w-full max-w-[120px]">
     <div style={{ position: 'relative', width: 'your-desired-width', height: 'your-desired-height' }}> 
     <CircularProgressbar
        value={girlsPercentage}
       
        styles={{
          path: { stroke: '#FFECB3' },
          text: { 
            fontSize: '12px',
            fontWeight: 'bold',
            fill: '#000'
          },
          trail: { stroke: '#E0E0E0' }
        }}
      />
       <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '24px',
      fontWeight: 'bold',
      fill: '#000',
    }}
  >
    {`${girlsPercentage}%`}
  </div>
     </div>
      <div className="text-center mt-2">
        <div className='flex w-full justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-row justify-center gap-4 mb-6">
    <div className="flex items-center gap-2">
      <span className="text-blue-500">•</span>
      <span className="text-lg md:text-[12px] xl:text-lg font-medium">
        {stats?.boys_count.toLocaleString() || '0'} (boys)
      </span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-yellow-300">•</span>
      <span className="text-lg md:text-sm xl:text-lg font-medium">
        {stats?.girls_count.toLocaleString() || '0'} (Girls)
      </span>
    </div>
  </div>

      <div className="flex  flex-row justify-center gap-4">
        <div className="flex items-center gap-2 border-2 bg-[#F5F4F9] border-[#F5F4F9] p-1 rounded-lg">
          <span className='text-lg md:text-sm xl:text-lg'>10 Mar 2025</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <div className="flex items-center gap-2 border-2 bg-[#F5F4F9] border-[#F5F4F9] p-1 rounded-lg">
          <span className='text-lg md:text-sm xl:text-lg'>All</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
          </div>
                    </div>
                    <div className='bg-[#FFFFFF] lg:w-1/2 w-full rounded-lg p-2 flex-col flex gap-2'>
                          <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Fee Status</h2>
          <button className="text-gray-500">
            <Ellipsis/>
            </button> 
        </div>

        <div className="bg-white rounded-lg p-4 flex items-center justify-between">
          <span className="text-2xl font-semibold">1,335</span>
          <div className="flex items-center gap-2 bg-green-200 rounded-xl p-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium">Paid</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 flex items-center justify-between">
          <span className="text-2xl font-semibold">4,366</span>
          <div className="flex items-center gap-2 bg-yellow-200 rounded-xl p-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span className="text-sm font-medium">Pending</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 flex items-center justify-between">
          <span className="text-2xl font-semibold">208</span>
          <div className="flex items-center gap-2  bg-red-200 rounded-xl p-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-sm font-medium">Overdue</span>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-2 flex items-center justify-between text-sm">
          <span>Annual</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div> 
                          </div>
              </div>
              
                </div>
                </div>
                
                <div className='flex  flex-col gap-2 xl:w-[50%] w-full'>
              <div className='w-full flex xl:flex-row flex-col gap-2'>
              <div className='xl:flex flex md:grid grid-cols-2 flex-col xl:w-1/2 w-full gap-2'>
  <div className='bg-[#F8E38D] flex flex-col h-[107px] w-full justify-between rounded-xl'>
    <div className='flex items-start justify-between p-3 w-full'>
      <h2>Students</h2>
      <Link href='/dashboard/students'>
        <Ellipsis />
      </Link>
    </div>
    <div className='flex items-end p-3 font-bold text-xl'>
      <p>{stats?.student_count.toLocaleString() || '0'}</p>
    </div>
  </div>

  <div className='bg-[#D8F1FF] flex flex-col h-[107px] w-full justify-between rounded-xl'>
    <div className='flex items-start justify-between p-3 w-full'>
      <h2>Teacher</h2>
      <Link href='/dashboard/teachers'>
        <Ellipsis />
      </Link>
    </div>
    <div className='flex items-end p-3 font-bold text-xl'>
      <p>{stats?.teacher_count.toLocaleString() || '0'}</p>
    </div>
  </div>

  <div className='bg-[#F8E38D] flex flex-col h-[107px] w-full justify-between rounded-xl'>
    <div className='flex items-start justify-between p-3 w-full'>
      <h2 className='text-[12px]'>Non-Teaching Staff</h2>
      <Link href='/dashboard/non-teaching-staff'>
        <Ellipsis />
      </Link>
    </div>
    <div className='flex items-end p-3 font-bold text-xl'>
      <p>{stats?.staff_count.toLocaleString() || '0'}</p>
    </div>
  </div>
</div>

                <div className='flex xl:w-[90%] w-full'>
                <Calendar />
                </div>
              </div>
              

              <div className='bg-[#FFFFFF] rounded-md flex flex-col w-full'>
  <div className='w-full p-3 flex justify-between'> 
    <h3 className=''>Notice Board</h3>
    <Link className='text-blue-500 underline' href="/board">view all</Link>
  </div>

  <div className="flex flex-col gap-2 p-2 w-full overflow-y-scroll max-h-[305px]">
    {loadingNotices ? (
    
      Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="w-full h-[90px] border-2 border-[#F5F4F9] rounded-md flex gap-2 items-center p-2 animate-pulse">
          <div className="w-[30px] h-[41px] bg-gray-200 rounded-md"></div>
          <div className="w-[80%] h-full flex flex-col justify-center gap-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      ))
    ) : notices.length > 0 ? (
      notices.map((notice) => (
        <div key={notice.id} className="w-full h-[90px] border-2 border-[#F5F4F9] rounded-md flex gap-2 items-center p-2">
          <div className="w-[30px] h-[41px] bg-[#D6DAFF] flex justify-center items-center rounded-md p-2">
            <Bell className="" />
          </div>
          <div className="w-[80%] h-full flex flex-col justify-center overflow-hidden">
            <h3 className="font-bold text-[15px]">{notice.title}</h3>
            <p className="text-[12px] line-clamp-2">
              {notice.description}
            </p>
            <span>{new Date(notice.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      ))
    ) : (
      <div className="w-full h-[90px] flex items-center justify-center text-gray-500">
        No notices available
      </div>
    )}
  </div>
</div>
             
                </div>
            </div>

            <div className='flex flex-col xl:flex-row gap-3 w-full'>
                    <div className='w-full xl:w-2/3 '>
                      <EarningsGraph/>
                    </div>

                    <div className='w-full xl:w-1/3  flex lg:flex-row flex-col gap-2'>
                    

                      <div className='bg-[#FFFFFF]  w-full  rounded-lg p-3 flex flex-col gap-4'> 
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Messages</h2>
                  <button className="text-gray-500">
                    <Ellipsis/>
                  </button>
                </div>

    <div className='flex-col flex gap-2 w-full max-h-[250px] overflow-y-scroll'>
    <div className="flex items-start gap-2 ">
    <div className="flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
       
        <span className="text-sm font-semibold">Q</span>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Qodebyte</span>
        <span className="text-xs text-gray-500">12:34 pm</span>
      </div>
      <p className="text-sm">Don&apos;t forget the lab rep.</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-sm font-semibold">Q</span>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Qodebyte</span>
        <span className="text-xs text-gray-500">12:34 pm</span>
      </div>
      <p className="text-sm">Do we have maths test...</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-sm font-semibold">Q</span>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Qodebyte</span>
        <span className="text-xs text-gray-500">12:34 pm</span>
      </div>
      <p className="text-sm">Wud?</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-sm font-semibold">Q</span>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Qodebyte</span>
        <span className="text-xs text-gray-500">12:34 pm</span>
      </div>
      <p className="text-sm">Did Sachin gave any ki</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-sm font-semibold">Q</span>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Qodebyte</span>
        <span className="text-xs text-gray-500">12:34 pm</span>
      </div>
      <p className="text-sm">Can we go for a movie...</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-sm font-semibold">Q</span>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Qodebyte</span>
        <span className="text-xs text-gray-500">12:34 pm</span>
      </div>
      <p className="text-sm">Can we go for a movie...</p>
    </div>
  </div>
    </div>
</div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardSection
