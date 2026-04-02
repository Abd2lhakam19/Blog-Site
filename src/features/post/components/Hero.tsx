
import { Earth, EarthIcon, Globe, Rss, Terminal, TerminalSquare } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MorePosts from './MorePosts';

const Hero = () => {
    const codeString = `interface CoreService {
  readonly id: string;
  async execute(context: VoidContext): Promise<void>;
}

export class MonolithNode implements CoreService {
  private static instance: MonolithNode;
  private constructor() {}
}`;
    return (
        <div className='relative'>
            <header className='relative h-217.5 w-full flex items-end overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <img src='/post.png' className="w-full h-full object-cover grayscale opacity-60" />
                    <div className="absolute inset-0  bg-linear-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-8 pb-24 text-center md:text-left">
                    <div className="flex items-center gap-4 mb-6 text-[#B4C5FF] font-headline italic text-xl">
                        <span className="w-12 h-px bg-[#B4C5FF]"></span>
                        <span>Systems Architecture</span>
                    </div>
                    <h1 className="font-headline text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter">
                        The Silent Architecture of Distributed Monoliths.
                    </h1>
                    <div className="flex items-center gap-4 text-sm mt-6 uppercase tracking-widest text-white/50">
                        <span className="">
                            March 14, 2024
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/50"></span>
                        <span>12 Min Read</span>
                    </div>
                </div>
            </header>
            <article className="relative z-10 mt-16">
                <div className="max-w-170 mx-auto px-8 py-20 bg-background/50 backdrop-blur-sm rounded-t-3xl">
                    <div className="text-on-background/90 leading-[1.85] mdx-content text-lg font-sans space-y-10 antialiased">
                        <p className="text-xl  font-light leading-relaxed
                         first-letter:text-6xl first-letter:font-headline
                         first-letter:mr-3 first-letter:float-left first-letter:text-white">
                            Engineering at scale is often mistaken for the accumulation of complex
                            microservices. However, the true art lies in the intentionality of the boundary.
                            We find ourselves in an era where the overhead of communication often outweighs
                            the benefits of isolation. This is an exploration of the hybrid reality—a
                            monolith with the soul of a distributed system.
                        </p>
                        <div className='flex items-center gap-4 text-center pt-4'>
                            <div className='h-12 w-1 bg-primary-container'>
                            </div>
                            <h2 className="font-headline text-3xl text-white italic tracking-tight ">

                                The Fallacy of Total Isolation
                            </h2>
                        </div>

                        <p>

                            When we talk about service boundaries, we often neglect the latency of human
                            comprehension. A system distributed across fifty repositories is not just
                            physically separated; it is cognitively fragmented. The "Neon Monolith" approach
                            suggests that logical boundaries should exist within a unified deployment plane
                            until the physical constraints of the hardware demand otherwise.

                        </p>
                        <div className='relative my-12'>
                            <div className='px-6 py-3 rounded-t-xl bg-[#0d0d0f] '>

                                <h2 className='text-[10px] uppercase tracking-widest text-white/40 font-mono'>
                                    architecture.ts
                                </h2>
                            </div>
                            <div className='rounded-b-xl overflow-x-auto  border border-white/5'>

                                <SyntaxHighlighter language="typescript" style={vscDarkPlus} customStyle={{
                                    margin: 0,
                                    padding: '24px',
                                    background: '#0d0d0f',
                                    fontSize: '14px',
                                    lineHeight: '1.7'
                                }}>
                                    {codeString}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                        <p>
                            The beauty of this pattern is its resilience.
                            By maintaining a shared memory space where possible,
                            we eliminate the 40ms tax of serialization/deserialization
                            that plagues overly-granular architectures.
                        </p>
                        <blockquote className='flex items-center text-left gap-4 border-l-4 rounded-r-2xl bg-white/7 text-white border-primary-container px-6 py-4' >


                            <p>
                                "Simplicity is the final achievement. After one has played a vast quantity
                                of notes and more notes, it is simplicity that emerges as the crowning reward
                                of art." — Frédéric Chopin
                            </p>
                        </blockquote>
                        <div className='flex items-center gap-4 text-center pt-4'>
                            <div className='h-12 w-1 bg-primary-container'>
                            </div>
                            <h2 className="font-headline text-3xl text-white italic tracking-tight ">
                                Visualizing Dependency Chains
                            </h2>
                        </div>
                        <p>
                            We must treat our dependencies like cinematic frames—each one must
                            justify its existence in the final cut. If a library doesn't contribute
                            to the core narrative of the system, it is noise. It must be excised.
                        </p>
                        <div className='my-16 rounded-xl overflow-hidden border border-white/5'>
                            <img src="/micro.png" className='w-full grayscale hover:grayscale-0 object-cover transition-all duration-700 aspect-video' alt="" />
                            <div className='p-4 uppercase text-center tracking-[0.2em] text-white/30 text-[10px] bg-surface-container-lowest'>

                                Figure 1.1: The Interconnected Fabric of Logical Services

                            </div>
                        </div>
                        <p>
                            In conclusion, the goal isn't to build a system that can never fail,
                            but a system that is beautiful in its failure—where error boundaries
                            are as clearly defined as the architecture itself.
                        </p>

                    </div>
                    <section className='mt-32 pt-16 border-t border-white/10'>
                        <div className='flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left'>
                            <div className='w-24 h-24 rounded-lg overflow-hidden'>
                                <img src="/auther.png" className='w-full h-full object-cover grayscale shrink-0' alt="" />

                            </div>
                            <div className='flex-1'>
                                <div className='flex flex-col md:flex-row  md:items-center justify-between gap-4 mb-4'>
                                    <div>
                                        <h4 className='font-headline italic text-2xl text-white'>
                                            Julian Vane
                                        </h4>
                                        <p className='text-xs text-primary-container uppercase tracking-widest font-semibold mt-1'>
                                            Principal Systems Architect
                                        </p>
                                    </div>
                                    <div className='flex  justify-center gap-4'>
                                        <a href="" className='text-white/40 hover:text-white transition-colors'>
                                            <Globe width={20} />
                                        </a>
                                        <a href="" className='text-white/40 hover:text-white transition-colors'>
                                            <TerminalSquare width={20} />
                                        </a>
                                        <a href="" className='text-white/40 hover:text-white transition-colors'>
                                            <Rss width={20} />
                                        </a>

                                    </div>
                                </div>
                                <p className='leading-relaxed '>
                                    Exploring the intersection of cinematic aesthetics and high-performance computing.
                                    Julian spends his days refining distributed systems and his nights analyzing A24 cinematography.
                                    Based in the digital void.
                                </p>
                            </div>


                        </div>
                    </section>

                </div>

            </article >
            <article className='py-32 px-8'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex justify-between items-end mb-16'>
                        <div>
                            <span className='text-primary-container text-[10px]  uppercase font-bold mb-4 block tracking-[0.3em]'>
                                Continue Exploration
                            </span>
                            <h2 className='font-headline text-5xl text-white italic'>
                                More from the Monolith
                            </h2>
                        </div>
                        <a href="" className='uppercase border-b border-white/50 tracking-widest text-xs  pb-1 hidden md:block text-white/50 hover:text-white transition-colors'>
                            view archive
                        </a>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <MorePosts />
                        <MorePosts />
                        <MorePosts />

                    </div>

                </div>

            </article>


        </div >
    )
}

export default Hero
