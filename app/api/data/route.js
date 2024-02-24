export async function GET(){
    const data = [
        {
            image: '/sample.png',
            title: 'WixPro 72-Inch Responsive Website Builder',
            description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            rating: 9.8,
            stars: 5,
            highlights: 'Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            remarks: 'Exceptional',
            isBestChoice: true,
            url: 'https://www.wixpro.com/products/wixpro-72-inch-responsive-website-builder',
            alt: 'Builder1'
        },
        {
            image: '/sample.png',
            title: 'SiteCraft 68-Inch Ultimate Web Design Studio',
            description: 'Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
            rating: 9.5,
            stars: 4.5,
            highlights: 'Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
            remarks: 'Excellent',
            isBestValue: true,
            url: 'https://www.sitecraft.com/products/sitecraft-68-inch-ultimate-web-design-studio',
            alt: 'Builder',
        },
        {
            image: '/sample.png',
            title: 'WixPro 72-Inch Responsive Website Builder',
            description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            rating: 9.3,
            stars: 5,
            highlights: 'Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            remarks: 'Exceptional',
            url: 'https://www.wixpro.com/products/wixpro-72-inch-responsive-website-builder',
            alt: 'Builder1'
        },
        {
            image: '/sample.png',
            title: 'CDK Responsive Builder',
            description: 'An extensive library of widgets and apps, and detailed step-by-step guides',
            rating: 9.1,
            stars: 4,
            highlightRatings: {
                'Building Responsive': 9.9,
                'Cool' : 8.9,
                'Docs': 8.9,
            },
            remarks: 'Very good',
            url: 'https://www.sitecraft.com/products/sitecraft-68-inch-ultimate-web-design-studio',
            alt: 'CDK',
            offer: '26%',
            exclusiveFeatures: ['Documentation', 'Easy use', 'Out of box'],
        }
    ]
    return Response.json(data);
}