// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Kiểm tra nếu URL không chứa thông tin ngôn ngữ
  if (!pathname.startsWith("/en") && !pathname.startsWith("/vi")) {
    // Chuyển hướng đến ngôn ngữ mặc định
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, req.url)
    );
  }

  // Nếu URL đã chứa ngôn ngữ, tiếp tục xử lý bình thường
  return NextResponse.next();
}

// Áp dụng middleware cho tất cả các đường dẫn
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
