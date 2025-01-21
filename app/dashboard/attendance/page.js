"use client"
import GradeSelect from '@/app/_components/GradeSelect'
import MonthSelection from '@/app/_components/MonthSelection'
import GlobalApi from '@/app/_services/GlobalApi'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import React, { useState } from 'react'
import AttendanceGrid from './_components/AttendanceGrid'
import{motion} from 'framer-motion'

function Attendance() {

    const [selectedMonth,setSelectedMonth]=useState();
    const [selectedGrade,setSelectedGrade]=useState('5th');
    const [attendanceList,setAttendceList]=useState();

    /**
     * Used to fetch attendance list for give month and Grade
     */
    const onSearchHandler=()=>{
        const month=moment(selectedMonth).format('MM/YYYY');
        GlobalApi.GetAttendanceList(selectedGrade,month).then(resp=>{
            console.log(resp.data)
            setAttendceList(resp.data);
        })
    }
    return (
        <div className='p-10'>
            <h2 className='text-2xl font-bold'>Attendance</h2>
            {/* Search option  */}

            <motion.div 

             
  initial ={{opacity: 0, translateX:"-100%"}}
  whileInView={{opacity: 1, translateX:0}}
  transition={{duration: 2, type:'spring'}}
            
          className="flex flex-wrap gap-5 my-5 p-5 border rounded-lg shadow-sm">
  <div className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto">
    <label className="whitespace-nowrap">Select Month:</label>
    <MonthSelection selectedMonth={(value) => setSelectedMonth(value)} />
  </div>
  <div className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto">
    <label className="whitespace-nowrap">Select Department:</label>
    <GradeSelect selectedGrade={(v) => setSelectedGrade(v)} />
  </div>
  <div className="w-full sm:w-auto">
    <Button className="w-full sm:w-auto" onClick={() => onSearchHandler()}>
      Search
    </Button>
  </div>
</motion.div>

            {/* Student Attendance Grid  */}
            <AttendanceGrid attadanceList={attendanceList}
            selectedMonth={selectedMonth}/>
        </div>
    )
}

export default Attendance