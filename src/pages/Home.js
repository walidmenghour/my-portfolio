import React, {useRef} from 'react';
import { motion } from "framer-motion";
import "./../styles/Home.css";
import gifImage from "../images/terminal.gif";
export default function Home() {
    const constraintsRef = useRef(null);
    return (
        <motion.div id={"Home"} className="home-container" ref={constraintsRef}>
            <motion.div className="quote-container">

                <motion.div  className="center-container" drag whileHover={{ scale: 1.2 }}>
                    <img src={gifImage} alt="Your GIF" className="centered-image" />
                </motion.div >

                <h1 className="quote quote_text">
                    I  <motion.div className="quote_style style_quote_1" drag dragConstraints={constraintsRef}
                                   whileHover={{ scale: 2 }}
                                   style={{ rotate:120 ,x: -10,y:-5 }}
                                   animate={{ rotate: 15, scale: 1 }}
                                   transition={{
                                       type: "spring",
                                       stiffness: 260,
                                       damping: 8
                                   }}
                >
                    <span className="highlight">Hack</span></motion.div>

                    <motion.div className="quote_style style_quote_2" drag dragConstraints={constraintsRef}
                                whileHover={{ scale: 2 }}
                                style={{ x: -10,y:-5 }}
                                animate={{ rotate: -15, scale:1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 8
                                }}
                    >

                        <span className="highlight"> Code</span>                        </motion.div>

                    <motion.div className="quote_style style_quote_1" drag dragConstraints={constraintsRef}
                                whileHover={{ scale: 2 }}
                                style={{ x: -10,y:-5 }}
                                animate={{ rotate: 15, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 8
                                }}

                    >

                        <span className="highlight"> Write</span>
                    </motion.div>

                    <motion.div className="quote_style style_quote_2" drag dragConstraints={constraintsRef} whileTap={{ scale: 2 }}
                                animate={{ rotate: -15, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 8
                                }} whileHover={{ scale: 2 }} style={{ x: -10,y:-5 }}>
                        <span className="highlight"> Design</span>
                    </motion.div>
                </h1>
                <p className="goal quote_text">
                    my goal is to craft a world that's
                    <motion.div className="quote_style style_quote_4"
                                whileHover={{ scale: 2 }}
                                whileTap={{ scale: 0.8 }}
                                style={{ x: -10,y:-5 }} >
                        <span className="highlight_2" whileTap={{ scale: 2 }} > Safe</span>
                    </motion.div>
                    <motion.div className="quote_style style_quote_3"
                                whileHover={{ scale: 2 }}
                                whileTap={{ scale: 0.8 }}
                                style={{ x: -10,y:10 }}><span className="highlight_2" > Easy</span>
                    </motion.div> and <motion.div className="quote_style style_quote_4"
                                whileHover={{ scale: 2 }}
                                whileTap={{ scale: 0.8 }}
                                style={{ x: 10,y:10 }}>
                        <span className="highlight_2"> Beautiful</span>
                    </motion.div>
                </p>
            </motion.div>
        </motion.div>)
}


