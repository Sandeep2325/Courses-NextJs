"use client"
import React from 'react'
import { Metadata } from 'next';

function CourseDetail({params}: any) {
  return (
    <div>CourseDetail: {params.id}</div>
  )
}

export default CourseDetail