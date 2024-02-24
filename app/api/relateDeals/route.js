export async function GET(){
    const data = [
        {
            image: '/sample.png',
            title: 'Webbuilder 1',
            description: 'Computer modern classic with wix support',
            price: '$39.96',
            originalPrice: '$49.96',
            offer: '20%',
            isLimited: true,
        },
        {
            image: '/sample.png',
            title: 'Webbuilder 1',
            description: 'Computer modern classic with wix support',
            price: '$39.96',
            originalPrice: '$49.96',
            offer: '20%',
            isLimited: true,
        },
        {
            image: '/sample.png',
            title: 'Webbuilder 1',
            description: 'Computer modern classic with wix support',
            price: '$39.96',
            originalPrice: '$49.96',
            offer: '20%',
            isLimited: true,
        }
    ]
    return Response.json(data);
}