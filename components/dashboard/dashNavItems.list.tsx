type DashNavItem = {
    id: number;
    label: string,
    link: string,
    tooltip:string,
    icon: string,
}

export const dashNavItem: DashNavItem[] = [

    {
        id: 1,
        label: 'Home',
        link: '/dashboard/home',
        tooltip: 'Tableau de bord principal',
        icon: '/yellow-home.png'
    },

    {
        id: 2,
        label: 'Utilisateurs',
        link: '/dashboard/users',
        tooltip: 'Gérer les utilisateurs',
        icon: '/yellow-users.png'
    },
    {
        id: 3,
        label: 'Commandes',
        tooltip: 'Gérer les commandes',
        link: '/dashboard/orders',
        icon: '/yellow-orders.png'
    },
    {
        id: 4,
        label: 'Produits',
        tooltip: 'Gérer les produits',
        link: '/dashboard/products',
        icon: '/yellow-product.png'
    },
    {
        id: 5,
        label: 'Divers',
        tooltip: 'Gérer les textes et divers',
        link: '/dashboard/divers',
        icon: "/yellow-text.png"
    } 
]

export default dashNavItem