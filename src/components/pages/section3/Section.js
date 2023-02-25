import React from 'react'
import JobCard from './job-card';
import './section.css'

function Section3() {
  return (
    <div className='section3'>
      <h1 className='heading'>Featured Job Circulars</h1>
      <div className='job-container'>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      </div>
      <button className='main-btn'> Find More Jobs</button>
    </div>
  )
}

export default Section3;    