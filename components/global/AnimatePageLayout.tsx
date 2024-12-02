'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

type Props = {
    children: React.ReactNode
}



export default function AnimatePageLayout({ children }: Props) {
    const pathname = usePathname()
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={typeof window !== 'undefined' ? pathname : ''}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className=' flex-1 flex flex-col '
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
