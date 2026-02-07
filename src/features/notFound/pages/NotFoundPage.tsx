import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "404 - Page Not Found | Wasfa";
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background overflow-hidden relative selection:bg-primary/30">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center z-10"
            >
                <div className="relative inline-block">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-[12rem] font-black leading-none bg-gradient-to-b from-primary to-primary-400 bg-clip-text text-transparent select-none"
                    >
                        404
                    </motion.h1>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.5, stiffness: 200 }}
                        className="absolute -top-4 -right-4 bg-warning text-warning-foreground px-4 py-1 rounded-full text-lg font-bold rotate-12 shadow-lg"
                    >
                        Oops!
                    </motion.div>
                </div>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-4xl font-bold mt-4 mb-4"
                >
                    Lost in the Kitchen?
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-default-500 mb-10 max-w-lg mx-auto text-xl"
                >
                    We couldn't find the recipe (or page) you're looking for. Don't let your appetite fade—let's get you back on track!
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        color="primary"
                        variant="shadow"
                        size="lg"
                        className="font-bold h-14 px-8 text-lg"
                        startContent={<Home size={24} />}
                        onPress={() => navigate('/')}
                    >
                        Back to Home
                    </Button>

                    <Button
                        variant="flat"
                        size="lg"
                        className="font-bold h-14 px-8 text-lg"
                        startContent={<Search size={24} />}
                        onPress={() => navigate('/search')}
                    >
                        Explore Recipes
                    </Button>

                    <Button
                        variant="light"
                        size="lg"
                        className="font-bold h-14 px-8 text-lg"
                        startContent={<ArrowLeft size={24} />}
                        onPress={() => navigate(-1)}
                    >
                        Go Back
                    </Button>
                </motion.div>
            </motion.div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[10%] opacity-20"
                >
                    <Search size={120} className="text-primary" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -10, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] right-[15%] opacity-20"
                >
                    <Home size={150} className="text-secondary" />
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            </div>
        </div>
    );
};

export default NotFoundPage;
