/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
  
    images: {
      formats: ["image/avif", "image/webp"],
      deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
      dangerouslyAllowSVG: false,
    },
  
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "SAMEORIGIN" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=(self)",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;