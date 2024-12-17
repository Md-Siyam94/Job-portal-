import { easeIn, easeOut, motion } from "motion/react"
import HeroImage1 from '../../public/bannerImage1.jpg'
import HeroImage2 from '../../public/happyImage2.jpg'
import HotJobs from "../components/HotJobs";

const Home = () => {
    return (
        <div>
            <section>
                <div className="hero bg-base-200 min-h-96 ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="flex-1">
                            <motion.img
                            animate={{y:[50, 100, 50]}}
                            transition={{duration: 10, repeat: Infinity, }}
                                src={HeroImage1}
                                className=" w-80 max-w-sm rounded-t-[40px] border-l-4 border-b-4 border-blue-600 rounded-br-[40px] shadow-2xl" />
                            <motion.img
                            animate={{x:[100, 150, 100]}}
                            transition={{duration: 10, repeat: Infinity, }}
                                src={HeroImage2}
                                className=" w-80 max-w-sm rounded-t-[40px] border-l-4 border-b-4 border-blue-600 rounded-br-[40px] shadow-2xl" />
                        </div>
                        <motion.div
                        animate={{y: -50}}
                        transition={{duration: 0.3 , delay:0.3, ease:  "linear", color:["#c2c1c1", '#0d0d0d'] }}
                        className="flex-1 mt-16">
                            <h1 className="text-5xl font-bold">Latest Job For You</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </motion.div>
                    </div>
                </div>

            </section>
            <section>
                <HotJobs></HotJobs>
            </section>
        </div>
    );
};

export default Home;