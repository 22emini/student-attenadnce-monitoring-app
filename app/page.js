"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect } from "react";
import { redirect } from "next/navigation";

function page() {
  useEffect(()=>{
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  },[])
 
  return (
    <div>
    </div>
  )
}

export default page