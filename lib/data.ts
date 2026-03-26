export interface Post {
  id: string
  tags: string[]
  title: string
  excerpt: string
  author: { name: string; initials: string; role: string }
  readTime: string
  image?: string
  skeleton?: boolean
}

export interface FeaturedPost {
  label: string
  title: string
  description: string
  author: { name: string; initials: string; role: string }
  readTime: string
}

export const featuredPost: FeaturedPost = {
  label: 'Featured Technical Deep Dive',
  title: 'The Architecture\nof Ghostly Systems',
  description:
    'An inquiry into high-performance distributed networks and the ethereal nature of latency in modern infrastructure.',
  author: { name: 'Alex Rivera', initials: 'AR', role: 'Infrastructure Lead' },
  readTime: '12 min read',
}

export const posts: Post[] = [
  {
    id: '1',
    tags: ['Systems', '2024'],
    title: 'Monolithic Integrity in a Micro-Service World',
    excerpt:
      'Exploring why large engineering organizations are returning to the modular monolith for increased velocity and developer experience.',
    author: { name: 'Sarah Chen', initials: 'SC', role: 'Staff Engineer' },
    readTime: '85 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=60',
  },
  {
    id: '2',
    tags: ['DevEx', 'New'],
    title: 'The Psychology of Technical Debt',
    excerpt:
      'How legacy code affects engineer morale and why "fixing it later" is a psychological trap that costs more than just compute time.',
    author: { name: 'Marcus Thorne', initials: 'MT', role: 'Engineering Manager' },
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60',
  },
  {
    id: '3',
    tags: ['Infra'],
    title: '',
    excerpt: '',
    author: { name: '', initials: '', role: '' },
    readTime: '',
    skeleton: true,
  },
  {
    id: '4',
    tags: ['Edge', 'Archive'],
    title: 'Beyond the Edge: The Next Frontier',
    excerpt:
      'A deep dive into why local-first software and P2P synchronization will define the next decade of web applications.',
    author: { name: 'Elena Vance', initials: 'EV', role: 'Principal Engineer' },
    readTime: '85 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=60',
  },
]

export const navLinks = ['Articles', 'Tutorials', 'Architecture', 'Manifesto']
