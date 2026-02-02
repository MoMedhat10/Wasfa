import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
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
                        {/* Background Sparkles */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-10 right-10 text-primary/20"
                        >
                            <Sparkles size={40} />
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, -45, 0],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-10 left-10 text-secondary/20"
                        >
                            <Sparkles size={30} />
                        </motion.div>

                        {/* Success Icon Animation */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="mb-8 relative"
                        >
                            <div className="absolute inset-0 bg-success/20 blur-3xl rounded-full scale-150" />
                            <motion.div
                                animate={{
                                    boxShadow: ["0 0 0 0px rgba(25, 196, 125, 0.4)", "0 0 0 20px rgba(25, 196, 125, 0)"]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="rounded-full"
                            >
                                <CheckCircle2 className="w-24 h-24 text-success relative z-10" />
                            </motion.div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl font-bold mb-4 bg-gradient-to-r from-success to-primary bg-clip-text text-transparent"
                        >
                            Payment Successful!
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-default-500 mb-8 text-lg"
                        >
                            Thank you for your purchase. Your plan has been successfully activated.
                            Get ready to explore more delicious recipes!
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 w-full"
                        >
                            <Button
                                color="primary"
                                size="lg"
                                variant="shadow"
                                className="w-full font-semibold"
                                endContent={<ArrowRight size={18} />}
                                onPress={() => navigate("/")}
                            >
                                Go to Home
                            </Button>
                            <Button
                                color="primary"
                                size="lg"
                                variant="flat"
                                className="w-full font-semibold"
                                onPress={() => navigate("/profile")}
                            >
                                View My Plan
                            </Button>
                        </motion.div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
};

export default SuccessPage;
