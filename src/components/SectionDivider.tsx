'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
    return (
        <div className="relative w-full py-8 md:py-10 flex items-center justify-center overflow-hidden">
            {/* Chrome Metallic Swoosh Divider */}
            <div className="relative w-full max-w-6xl px-4">
                {/* Red Glow Underneath */}
                <motion.div 
                    initial={{ opacity: 0, scaleX: 0.5 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-6 bg-red-600/30 blur-xl rounded-full"
                />
                
                {/* Chrome Bar - Main */}
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative h-[3px] w-full rounded-full overflow-hidden"
                >
                    {/* Chrome Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />
                    
                    {/* Metallic Shine Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-neutral-300/40 to-neutral-600/60" />
                </motion.div>
                
                {/* Red Accent Line Below */}
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    className="relative h-[2px] w-[70%] mx-auto mt-1 rounded-full overflow-hidden"
                >
                    {/* Red Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                    
                    {/* Red Glow */}
                    <div className="absolute inset-0 shadow-[0_0_10px_rgba(220,38,38,0.8),0_0_20px_rgba(220,38,38,0.4)]" />
                </motion.div>
                
                {/* Secondary Chrome Accent */}
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                    className="relative h-[1px] w-[40%] mx-auto mt-1 rounded-full bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent"
                />
            </div>
        </div>
    );
}
