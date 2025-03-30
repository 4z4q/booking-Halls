"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import NetworkImage from "./network-image"

export default function StudentCodeForm() {
  const [studentCode, setStudentCode] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate student code
    if (!studentCode.trim()) {
      setError("Please enter a student code")
      return
    }

    // Simulate form submission
    setIsSubmitting(true)

    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setStudentCode("")
      }, 2000)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card className="border-slate-200 shadow-lg dark:border-slate-800 w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex flex-col items-center justify-center mb-2">
            <div className="mb-4 w-full max-w-[220px]">
              <NetworkImage />
            </div>
            <div className="rounded-full bg-primary/10 p-3">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Student Portal</CardTitle>
          <CardDescription className="text-center">Enter your student code to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentCode">Student Code</Label>
                <Input
                  id="studentCode"
                  placeholder="Enter your student code"
                  value={studentCode}
                  onChange={(e) => setStudentCode(e.target.value)}
                  className={cn(
                    "transition-all duration-200",
                    error ? "border-red-500 focus-visible:ring-red-500" : "",
                  )}
                  disabled={isSubmitting || isSuccess}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting || isSuccess}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Verifying...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Success!
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t px-6 py-4">
          <p className="text-xs text-muted-foreground">Having trouble? Contact support at support@school.edu</p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

