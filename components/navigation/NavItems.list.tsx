type navBarItem = {
    id: number;
    label: string,
    link: string,
    icon: string,
}

export const navItems: navBarItem[] = [
    {
        id:0,
        label: "page d'accueil",
        link: "/home",
        icon: "home-main.png"
    },
    {
        id: 1,
        label: 'Connexion',
        link: '/login',
        icon: 'alien.png'
    },
    {
        id: 2,
        label: 'Panier',
        link: '/cart',
        icon: 'shopping.png'
    },
    {
        id: 3,
        label: 'Dash',
        link: '/dashboard/home',
        icon: 'door-key.png'
    },
    {
        id: 4,
        label: 'Colliers',
        link: '/colliers',
        icon: "necklace.png"
    },
    {
        id: 5,
        label: 'Bracelet',
        link: '/bracelets',
        icon: 'bracelet.png'
    },
    {
        id: 6,
        label: 'Matériaux',
        link: '/materials',
        icon: 'stone.png'
    },
    {
        id: 7,
        label: 'À propos',
        link: '/about',
        icon: 'feather.png'
    },
    
]

export default navItems