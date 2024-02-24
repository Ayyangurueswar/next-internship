export async function GET(){
    const data = [
        {
            title: 'Single',
            description: 'A great solution for beginners',
            originalPrice: '$135',
            price: '$32',
            offer: '85%',
            features: ['1 website', 'Standard Perfomance', '50 GB SSD storage', 'Weekly backups', '1 email account'],
        },
        {
            title: 'Premium',
            description: 'Everything you need to create your website',
            originalPrice: '$346',
            price: '$123',
            offer: '45%',
            features: ['100 website', 'Standard Perfomance', '100 GB SSD storage', 'Weekly backups', 'Free email'],
        },
        {
            title: 'Business',
            description: 'Level-up with more power and enhanced features',
            originalPrice: '$568',
            price: '$235',
            offer: '55%',
            isPopular: true,
            features: ['100 website', 'Increased Perfomance', '200 GB NVMe storage', 'Daily backups',],
        },
        {
            title: 'Cloud startup',
            description: 'Enjoy optimised performance & guaranteed resources',
            originalPrice: '$765',
            price: '$456',
            offer: '65%',
            features: ['300 website', 'Maximum Perfomance', '200 GB NVMe storage', 'Daily backups',],
        }
    ]
    return Response.json(data);
}