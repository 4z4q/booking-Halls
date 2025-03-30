"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Wifi, Activity, Download, Upload, Clock, Signal, RefreshCw, LogOut, ChevronLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import NetworkImage from "./network-image"

export default function NetworkDashboard() {
  const router = useRouter()
  const [downloadSpeed, setDownloadSpeed] = useState(85)
  const [uploadSpeed, setUploadSpeed] = useState(62)
  const [connectedTime, setConnectedTime] = useState(0)
  const [signalStrength, setSignalStrength] = useState(78)
  const [networkName, setNetworkName] = useState("شبكة_المنزل")
  const [deviceName, setDeviceName] = useState("جهاز الكمبيوتر المحمول")
  const [ipAddress, setIpAddress] = useState("192.168.1.105")

  // Simulate changing network speeds
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadSpeed((prev) => Math.min(100, Math.max(60, prev + (Math.random() * 10 - 5))))
      setUploadSpeed((prev) => Math.min(100, Math.max(40, prev + (Math.random() * 8 - 4))))
      setSignalStrength((prev) => Math.min(100, Math.max(65, prev + (Math.random() * 6 - 3))))
    }, 3000)

    // Increment connected time (in minutes)
    const timeInterval = setInterval(() => {
      setConnectedTime((prev) => prev + 1)
    }, 60000)

    // Set initial time
    setConnectedTime(1)

    return () => {
      clearInterval(interval)
      clearInterval(timeInterval)
    }
  }, [])

  // Format time as hours and minutes
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60

    if (hours === 0) {
      return `${mins} دقيقة`
    }

    return `${hours} ساعة ${mins > 0 ? `و ${mins} دقيقة` : ""}`
  }

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md font-arabic"
      dir="rtl"
    >
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-primary hover:text-primary/80"
          onClick={handleLogout}
        >
          <ChevronLeft className="size-4" />
          العودة
        </Button>
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-medium text-green-600 dark:text-green-400">متصل</span>
        </div>
      </div>

      <Card className="border-slate-200 shadow-lg dark:border-slate-800">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">بطاقة الاتصال</CardTitle>
              <CardDescription>معلومات اتصال الجهاز بالشبكة</CardDescription>
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {deviceName}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="size-32 relative">
              <NetworkImage />
              <div className="absolute inset-0 flex items-center justify-center">
                <Wifi className="size-10 text-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
              <div className="flex items-center gap-2">
                <Wifi className="size-5 text-primary" />
                <span className="font-medium">اسم الشبكة</span>
              </div>
              <span>{networkName}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
              <div className="flex items-center gap-2">
                <Activity className="size-5 text-primary" />
                <span className="font-medium">عنوان IP</span>
              </div>
              <span dir="ltr">{ipAddress}</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Download className="size-4 text-primary" />
                  <span className="text-sm font-medium">سرعة التنزيل</span>
                </div>
                <span className="text-sm font-medium">{downloadSpeed.toFixed(1)} ميجابت/ثانية</span>
              </div>
              <Progress value={downloadSpeed} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Upload className="size-4 text-primary" />
                  <span className="text-sm font-medium">سرعة الرفع</span>
                </div>
                <span className="text-sm font-medium">{uploadSpeed.toFixed(1)} ميجابت/ثانية</span>
              </div>
              <Progress value={uploadSpeed} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Signal className="size-4 text-primary" />
                  <span className="text-sm font-medium">قوة الإشارة</span>
                </div>
                <span className="text-sm font-medium">{signalStrength}%</span>
              </div>
              <Progress value={signalStrength} className="h-2" />
            </div>

            <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
              <Clock className="size-4 text-primary" />
              <div>
                <p className="text-sm font-medium">وقت الاتصال</p>
                <p className="text-sm text-muted-foreground">{formatTime(connectedTime)}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button variant="outline" className="w-full">
              <RefreshCw className="size-4 me-2" />
              تحديث
            </Button>
            <Button
              variant="outline"
              className="w-full bg-red-100 hover:bg-red-200 text-red-600 border-red-200"
              onClick={handleLogout}
            >
              <LogOut className="size-4 me-2" />
              قطع الاتصال
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t px-6 py-4">
          <p className="text-xs text-muted-foreground">آخر تحديث: {new Date().toLocaleTimeString("ar-SA")}</p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

