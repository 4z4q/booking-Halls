"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Review {
  id: number;
  user: {
    name: string;
    image: string;
    date: string;
  };
  rating: number;
  title: string;
  comment: string;
  helpful: number;
  images: string[];
}

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({
  reviews: initialReviews,
}: ReviewListProps) {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortBy, setSortBy] = useState("newest");
  const [helpfulClicked, setHelpfulClicked] = useState<Record<number, boolean>>(
    {}
  );

  const handleSortChange = (value: string) => {
    setSortBy(value);

    // Clone the reviews array to avoid mutating the original
    const sortedReviews = [...reviews];

    switch (value) {
      case "newest":
        // Sort by date (newest first)
        // In a real app, you'd parse the date string
        sortedReviews.sort(
          (a, b) =>
            new Date(b.user.date).getTime() - new Date(a.user.date).getTime()
        );
        break;
      case "oldest":
        // Sort by date (oldest first)
        sortedReviews.sort(
          (a, b) =>
            new Date(a.user.date).getTime() - new Date(b.user.date).getTime()
        );
        break;
      case "highest":
        // Sort by rating (highest first)
        sortedReviews.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        // Sort by rating (lowest first)
        sortedReviews.sort((a, b) => a.rating - b.rating);
        break;
      case "helpful":
        // Sort by helpful count
        sortedReviews.sort((a, b) => b.helpful - a.helpful);
        break;
      default:
        break;
    }

    setReviews(sortedReviews);
  };

  const handleHelpfulClick = (reviewId: number) => {
    if (helpfulClicked[reviewId]) return;

    setReviews(
      reviews.map((review) =>
        review.id === reviewId
          ? { ...review, helpful: review.helpful + 1 }
          : review
      )
    );

    setHelpfulClicked({ ...helpfulClicked, [reviewId]: true });
  };

  return (
    <div className="space-y-6">
        <h3 className="font-medium">
          {reviews.length} {reviews.length === 1 ? "تقييم" : "تقييمات"}
        </h3>
      <div className="flex items-center justify-between ">
        <div className="flex items-center w-full">
          <span className="text-sm text-muted-foreground ml-2 whitespace-nowrap">ترتيب حسب:</span>
          <Select value={sortBy} onValueChange={handleSortChange} >
            <SelectTrigger className="w-full" >
              <SelectValue  placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent >
              <SelectItem value="newest">الأحدث أولاً</SelectItem>
              <SelectItem value="oldest">الأقدم أولاً</SelectItem>
              <SelectItem value="highest">الأعلى تقييماً</SelectItem>
              <SelectItem value="lowest">الأدنى تقييماً</SelectItem>
              <SelectItem value="helpful">الأكثر فائدة</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden ml-3">
                  <Image
                    src={"/person.jpg"}
                    alt={review.user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{review.user.name}</h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{review.user.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">{review.title}</h5>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>

            {review.images.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {review.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-20 w-20 rounded-md overflow-hidden border"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`صورة التقييم ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                className={`text-sm ${
                  helpfulClicked[review.id] ? "text-purple-600" : ""
                }`}
                onClick={() => handleHelpfulClick(review.id)}
                disabled={helpfulClicked[review.id]}
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                مفيد ({review.helpful})
              </Button>
              <Button variant="ghost" size="sm" className="text-sm">
                إبلاغ
              </Button>
            </div>

            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}
