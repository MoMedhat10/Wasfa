import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { XCircle, RefreshCcw, Home, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CancelPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg"
            >
                <Card className="border-none bg-background/60 dark:bg-default-100/50 backdrop-blur-lg shadow-2xl">
                    <CardBody className="flex flex-col items-center text-center p-8 md:p-12 overflow-hidden relative">
                        {/* Background Decorative Circles */}
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-danger/20 rounded-full blur-3xl pointer-events-none"
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.15, 0.1]
                            }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-20 -left-20 w-64 h-64 bg-warning/20 rounded-full blur-3xl pointer-events-none"
                        />

                        {/* Cancel Icon Animation */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="mb-8 relative"
                        >
                            <div className="absolute inset-0 bg-danger/20 blur-3xl rounded-full scale-150" />
                            <motion.div
                                animate={{
                                    y: [0, -10, 0]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <XCircle className="w-24 h-24 text-danger md:w-32 md:h-32" />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute -top-2 -right-2"
                                >
                                    <div className="bg-warning rounded-full p-2 shadow-lg">
                                        <AlertCircle className="w-6 h-6 text-warning-foreground" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl font-bold mb-4 bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent"
                        >
                            Payment Cancelled
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-default-500 mb-8 text-lg"
                        >
                            The payment process was interrupted or cancelled. Don't worry, no charges were made.
                            If you experienced an issue, please try again or contact support.
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 w-full"
                        >
                            <Button
                                color="danger"
                                size="lg"
                                variant="shadow"
                                className="w-full font-semibold"
                                startContent={<RefreshCcw size={18} />}
                                onPress={() => navigate("/plans")}
                            >
                                Try Again
                            </Button>
                            <Button
                                color="default"
                                size="lg"
                                variant="flat"
                                className="w-full font-semibold"
                                startContent={<Home size={18} />}
                                onPress={() => navigate("/")}
                            >
                                Back to Home
                            </Button>
                        </motion.div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
};

export default CancelPage;
