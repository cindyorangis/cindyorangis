import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.cindyorangis.com' }],
        destination: 'https://cindyorangis.com/:path*',
        permanent: true,
      },
    ]
  },
  trailingSlash: false,
}

export default nextConfig
