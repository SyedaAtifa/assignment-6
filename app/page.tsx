import React from 'react'
import Header from '@/components/Header'
import Category from '@/components/Category'
import Achievments from '@/components/Achievments'
import Courses from '@/components/Courses'
import Team from '@/components/Team'
import Students from '@/components/Students'
import Footer from '@/components/Footer'

function page() {
  return (
    <div className="font-Roboto">
      <Header />
      <Category />
      <Achievments />
      <Courses />
      <Team />
      <Students />
      <Footer />
    </div>
  )
}

export default page