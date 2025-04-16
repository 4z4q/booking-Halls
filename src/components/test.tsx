"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart, X, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  color: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CheckoutInteractionProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Air Max 90",
    price: 129.99,
    category: "Running",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "Black/White",
  },
  {
    id: "2",
    name: "Ultra Boost",
    price: 179.99,
    category: "Performance",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "Grey/Blue",
  },
  {
    id: "3",
    name: "Classic Trainer",
    price: 89.99,
    category: "Casual",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "White/Red",
  },
];

export default function CheckoutInteraction({
  products = defaultProducts,
}: CheckoutInteractionProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + delta;                 
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex gap-6">
        {/* Products List with shoe images */}
        <div className="flex-1 space-y-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group",
                "p-4 rounded-xl",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "hover:border-zinc-300 dark:hover:border-zinc-700",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "relative w-12 h-12 rounded-lg overflow-hidden",
                      "bg-zinc-100 dark:bg-zinc-800",
                      "transition-colors duration-200",
                      "group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                    )}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      //   fill
                      className="object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {product.name}
                      </h3>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <span>${product.price}</span>
                      <span>•</span>
                      <span>{product.color}</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addToCart(product)}
                  className="gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart with increased height */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={cn(
            "w-80 flex flex-col",
            "p-4 rounded-xl",
            "bg-white dark:bg-zinc-900",
            "border border-zinc-200 dark:border-zinc-800",
            "sticky top-4",
            "max-h-[32rem]" // Increased from 24rem to 32rem
          )}
        >
          {/* Cart Header */}
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCart className="w-4 h-4 text-zinc-500" />
            <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Cart ({totalItems})
            </h2>
          </div>

          {/* Cart Items */}
          <motion.div
            className={cn(
              "flex-1 overflow-y-auto",
              "min-h-0",
              "-mx-4 px-4",
              "space-y-3"
            )}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    layout: { duration: 0.2 },
                  }}
                  className={cn(
                    "flex items-center gap-3",
                    "p-2 rounded-lg",
                    "bg-zinc-50 dark:bg-zinc-800/50",
                    "mb-3" // Added explicit margin bottom
                  )}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                        {item.name}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      >
                        <X className="w-3 h-3 text-zinc-400" />
                      </motion.button>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-1">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        >
                          <Minus className="w-3 h-3" />
                        </motion.button>
                        <motion.span
                          layout
                          className="text-xs text-zinc-600 dark:text-zinc-400 min-w-[16px] inline-block text-center"
                        >
                          {item.quantity}
                        </motion.span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        >
                          <Plus className="w-3 h-3" />
                        </motion.button>
                      </div>
                      <motion.span
                        layout
                        className="text-xs text-zinc-500 dark:text-zinc-400"
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Cart Summary */}
          <motion.div
            layout
            className={cn(
              "pt-3 mt-3",
              "border-t border-zinc-200 dark:border-zinc-800",
              "bg-white dark:bg-zinc-900"
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Total
              </span>
              <motion.span
                layout
                className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 inline-block min-w-[80px] text-right"
              >
                <NumberFlow
                  value={totalPrice}
                  willChange
                  format={{
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    signDisplay: "auto",
                  }}
                  className="font-mono tabular-nums"
                  transformTiming={{
                    duration: 400,
                    easing: "ease-out",
                  }}
                />
              </motion.span>
            </div>
            <Button size="sm" className="w-full gap-2">
              <CreditCard className="w-4 h-4" />
              Checkout
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Bell,
  User,
  ShoppingCart,
  LogIn,
  FileText,
  QrCode,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import { Session } from "next-auth";
import { cn } from "@/lib/utils";

type NavbarProps = {
  session?: Session | null;
};

const Navbar = ({ session }: NavbarProps) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4">
        {/* Main navbar row */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className=" items-center gap-2 hidden md:flex">
            <div className="relative h-8 w-8 ">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
                <span className="text-sm font-bold text-white">ع</span>
              </div>
            </div>
            <h3 className="text-lg font-bold md:text-xl ">
              لحظات
            </h3>
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="سلة المشتريات"
              className=" sm:flex"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="الإشعارات">
              <Bell className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile logo (centered) */}
          <h3 className="text-lg font-bold md:hidden absolute left-1/2 -translate-x-1/2">
            لحظات
          </h3>

          {/* Desktop navigation links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Account tools */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push(session ? "/profile" : "/sign-in")}
              aria-label={session ? "الملف الشخصي" : "تسجيل الدخول"}
            >
              {session ? (
                <User className="h-5 w-5" />
              ) : (
                <LogIn className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile menu toggle */}
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="icon"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile bottom navigation */}
        <nav className="md:hidden border-t pt-2 pb-3">
          <ul className="flex items-center justify-around">
            {NAV_LINKS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      {/* Mobile fullscreen menu */}
      <MobileAccountMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} session={session} />
      </div>

    </header>
  );
};

const MobileAccountMenu = ({
  isOpen,
  onClose,
  session,
}: {
  isOpen: boolean;
  onClose: () => void;
  session: Session;
}) => {
  const router = useRouter();

  return (
    <div
      className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background/95 backdrop-blur transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
        {session ? (
          <>
            <p className="text-lg font-medium">مرحبًا، {session.user.name || "المستخدم"}</p>
            <Button onClick={() => router.push("/profile")}>الملف الشخصي</Button>
            <Button onClick={() => router.push("/orders")}>حجوزاتي</Button>
            <Button variant="outline" onClick={onClose}>إغلاق</Button>
          </>
        ) : (
          <>
            <p className="text-lg font-medium">مرحبًا بك في لحظات</p>
            <Button onClick={() => router.push("/sign-in")}>تسجيل الدخول</Button>
            <Button variant="outline" onClick={onClose}>إغلاق</Button>
          </>
        )}
      </div>
    </div>
  );
};

