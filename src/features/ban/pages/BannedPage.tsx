import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { ShieldAlert, Mail, LogOut, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuthStore from '../../auth/store/auth';

const BannedPage = () => {
    const navigate = useNavigate();
    const { removeAccessToken } = useAuthStore();

    useEffect(() => {
        document.title = "Account Suspended | Wasfa";
    }, []);

    const handleLogout = () => {
        removeAccessToken();
        useAuthStore.persist.clearStorage();
        navigate('/login'); 
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background overflow-hidden relative selection:bg-danger/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center z-10 max-w-2xl px-6 py-12 rounded-[2.5rem] bg-content1/50 backdrop-blur-xl border border-divider shadow-2xl"
            >
                <motion.div
                    initial={{ scale: 0.5, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-danger/10 text-danger"
                >
                    <ShieldAlert size={48} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-black mb-4 text-foreground tracking-tight"
                >
                    Account Suspended
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-default-500 text-lg md:text-xl mb-8 leading-relaxed"
                >
                    Your account has been restricted for violating our community guidelines or terms of service. If you believe this is a mistake, please reach out to our support team.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        color="danger"
                        variant="shadow"
                        size="lg"
                        className="font-bold h-14 px-8 text-lg w-full sm:w-auto"
                        startContent={<Mail size={24} />}
                        onPress={() => window.location.href = `mailto:${import.meta.env.VITE_SUPPORT_EMAIL}`}
                    >
                        Contact Support
                    </Button>

                    <Button
                        variant="flat"
                        size="lg"
                        className="font-bold h-14 px-8 text-lg w-full sm:w-auto"
                        startContent={<LogOut size={24} />}
                        onPress={handleLogout}
                    >
                        Logout
                    </Button>

                    <Button
                        variant="light"
                        size="lg"
                        className="font-bold h-14 px-8 text-lg w-full sm:w-auto text-default-500"
                        startContent={<Home size={24} />}
                        onPress={() => navigate('/')}
                    >
                        Go to Home
                    </Button>
                </motion.div>
            </motion.div>

            {/* Background visual flair */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-danger/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-danger/5 rounded-full blur-[120px]"
                />
            </div>
        </div>
    );
};

export default BannedPage;
