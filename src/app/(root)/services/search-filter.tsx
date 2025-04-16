"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchFilterProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedFilter: string
  setSelectedFilter: (filter: string) => void
}

export function SearchFilter({ searchQuery, setSearchQuery, selectedFilter, setSelectedFilter }: SearchFilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="أبحث عن خدمة"
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Select value={selectedFilter} onValueChange={setSelectedFilter}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">كل الخدمات</SelectItem>
          <SelectItem value="venue">القاعات</SelectItem>
          <SelectItem value="artist"> الفنانين</SelectItem>
          <SelectItem value="photographer">المصورين</SelectItem>
        </SelectContent>
      </Select>
      <Button
        onClick={() => {
          setSearchQuery("")
          setSelectedFilter("all")
        }}
      >
        حذف الفلتر
      </Button>
    </div>
  )
}
