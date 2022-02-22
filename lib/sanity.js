import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: 'rl7xg7jy',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
        'skDcTzUIz0UyCizRr4EVDq5bvZ5YHDEiTDZCGu2KNRkQlugcR8th35Yz06PJ317pVEnxFzAjtI3El2xAXkdvllq6Yqwh9wEoILUa9TypPdAObE9zVzjiOpXcvMdZBLsTSix8xiWTEZNynWY3BZs6ccfVdpY6Y3pLubORcPXF5iuPYWbdFwkn',
    useCdn: false,
});