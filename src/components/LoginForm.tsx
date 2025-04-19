import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">مرحبًا بعودتك!</h1>
        <p className="text-balance text-sm text-muted-foreground">
          سجّل دخولك لمتابعة الحجز{" "}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">بريد الكتروني</Label>
          <Input id="email" type="email" placeholder="بريدك الالكتروني" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">كلمة المرور</Label>
            {/* <a
              href="#"
              className="mr-auto  text-sm underline-offset-4 hover:underline"
            >
              نسيت كلمة المرور؟
            </a> */}
          </div>
          <Input id="password" type="password" required  placeholder="********"/>
        </div>
        <Button type="submit" className="w-full">
          دخول
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            او لديك حساب؟
          </span>
        </div>
        <Button variant="outline" className="w-full">

          تسجيل الدخول مع جوجل
        </Button>
      </div>
      <div className="text-center text-sm">
        ليس لديك حساب؟
        <Link href="#" className="underline underline-offset-4">
          انشاء حساب
        </Link>
      </div>
    </form>
  );
}
