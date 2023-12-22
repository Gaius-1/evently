export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About Us',
    route: '/aboutus',
  },
  {
    label: 'Contacts',
    route: '/contacts',
  },
  {
    label: 'Orders',
    route: '/organized',
  },
  {
    label: 'My Tickets',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}