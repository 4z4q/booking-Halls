"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Star } from "lucide-react"

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [images, setImages] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const handleRatingClick = (value: number) => {
    setRating(value)
  }

  const handleRatingHover = (value: number) => {
    setHoverRating(value)
  }

  const handleRatingLeave = () => {
    setHoverRating(0)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setImages((prevImages) => [...prevImages, ...filesArray])

      // Create preview URLs
      const newPreviewUrls = filesArray.map((file) => URL.createObjectURL(file))
      setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)

    const newPreviewUrls = [...previewUrls]
    URL.revokeObjectURL(newPreviewUrls[index])
    newPreviewUrls.splice(index, 1)
    setPreviewUrls(newPreviewUrls)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review data to your API
    console.log({ rating, title, comment, images })

    // Reset form
    setRating(0)
    setTitle("")
    setComment("")
    setImages([])
    setPreviewUrls([])
  }

  return (
    <div className="bg-card rounded-xl border p-6">
      <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="rating" className="text-sm font-medium">
            Your Rating
          </Label>
          <div className="flex" onMouseLeave={handleRatingLeave}>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className="p-1 focus:outline-none"
                onClick={() => handleRatingClick(value)}
                onMouseEnter={() => handleRatingHover(value)}
              >
                <Star
                  className={`h-6 w-6 transition-colors ${
                    (hoverRating || rating) >= value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium">
            Review Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Summarize your experience"
            className="transition-all border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-200"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment" className="text-sm font-medium">
            Your Review
          </Label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this venue. What did you like or dislike?"
            className="min-h-[120px] transition-all border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-200"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="images" className="text-sm font-medium">
            Add Photos (Optional)
          </Label>
          <div className="flex flex-wrap gap-2">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <div className="h-20 w-20 rounded-md overflow-hidden border">
                  <img
                    src={url || "/placeholder.svg"}
                    alt={`Preview ${index}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
            <label className="h-20 w-20 rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition-colors">
              <Camera className="h-6 w-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground mt-1">Add Photo</span>
              <input
                id="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          <p className="text-xs text-muted-foreground">
            You can upload up to 5 photos. Each photo should be less than 5MB.
          </p>
        </div>

        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all"
        >
          Submit Review
        </Button>
      </form>
    </div>
  )
}

