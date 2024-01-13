interface MenuItem {
    sectionNumber: string
    title: string
    slug: string
}

export const menuItems: MenuItem[] = [
    {
        sectionNumber: '01',
        title: 'About',
        slug: '#about'
    },
    {
        sectionNumber: '02',
        title: 'Experience',
        slug: '#experience'
    },
    {
        sectionNumber: '03',
        title: 'Projects',
        slug: '#projects'
    },
    {
        sectionNumber: '04',
        title: 'Contact',
        slug: '#contact'
    }
]
