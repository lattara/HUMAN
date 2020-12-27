type navBarItem = {
    id: number;
    label: string,
    link: string,
    icon: string,
}

export const navItems: navBarItem[] = [
    {
        id: 1,
        label: 'Connexion',
        link: '',
        icon: 'alien.png'
    },
    {
        id: 2,
        label: 'Panier',
        link: '',
        icon: 'shopping.png'
    },
    {
        id: 3,
        label: 'Colliers',
        link: 'colliers',
        icon: "necklace.png"
    },
    {
        id: 4,
        label: 'Bracelet',
        link: '',
        icon: 'bracelet.png'
    },
    {
        id: 5,
        label: 'Matériaux',
        link: '',
        icon: 'stone.png'
    },
    {
        id: 6,
        label: 'À propos',
        link: '',
        icon: 'feather.png'
    },
    
]

export default navItems