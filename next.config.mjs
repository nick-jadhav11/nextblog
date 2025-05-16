import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/nextblog' : '',
    assetPrefix: isProd ? '/nextblog/' : '',
    images: {
        unoptimized: true,  // Disable image optimization
    },
};

export default withFlowbiteReact(nextConfig);