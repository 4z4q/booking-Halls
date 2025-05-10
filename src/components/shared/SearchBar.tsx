"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  Building,
  Mic,
  Shirt,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedService, setSelectedService] = useState("كل الخدمات");
  
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                كل ما تحتاجه ليومك المميز
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                استكشف خدماتنا المتكاملة التي تساعدك في تنظيم حفلك بكل سهولة واحترافية.
              </p>
            </div>
  
            <div className="w-full max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="ابحث عن قاعات، فنانين، فساتين، خدمات..."
                  className="pl-10 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
  
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">تصفية حسب:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto flex justify-between items-center gap-2"
                      >
                        {selectedService}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-[200px]">
                      <DropdownMenuItem onClick={() => setSelectedService("كل الخدمات")}>
                        كل الخدمات
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedService("قاعات")}>
                        <Building className="mr-2 h-4 w-4" />
                        <span>قاعات</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedService("فنانين")}>
                        <Mic className="mr-2 h-4 w-4" />
                        <span>فنانين</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedService("فساتين")}>
                        <Shirt className="mr-2 h-4 w-4" />
                        <span>فساتين</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
  
                <Button className="w-full sm:w-auto">
                  بحث
                  <ArrowLeft className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default SearchBar;
