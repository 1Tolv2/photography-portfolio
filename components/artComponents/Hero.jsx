import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Section from "../atoms/Section";

const Hero = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#777086",
    },
  };

  return (
    <Section center>
      <div className="w-full flex items-center justify-center">
        <div>
          <motion.h1
            className="text-4xl font-normal !text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2,
              duration: 0.6,
              type: "tween",
            }}
          >
            SOFIA JOHNSSON
          </motion.h1>
          <div className="relative flex justify-center gap-4 mt-4">
            <a href="">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_226_292)">
                  <motion.path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7393 0.245458C8.48354 0.392358 5.66163 1.18835 3.38299 3.45737C1.09639 5.73831 0.310283 8.57141 0.163017 11.7933C0.0714728 13.8043 -0.463828 28.9966 1.08843 32.9808C2.13521 35.6687 4.19688 37.7354 6.90935 38.7855C8.17504 39.2778 9.61988 39.6111 11.7393 39.7083C29.4609 40.5103 36.0302 40.0737 38.8003 32.9808C39.2919 31.7182 39.6302 30.2747 39.7237 28.1605C40.5337 10.3934 39.5924 6.54229 36.5038 3.45737C34.0541 1.01365 31.1724 -0.649842 11.7393 0.245458ZM11.9025 36.1351C9.96213 36.0477 8.9094 35.7244 8.2069 35.4525C6.43971 34.7656 5.11234 33.4437 4.42974 31.6869C3.24763 28.6595 3.6397 14.281 3.74517 11.9544C3.84865 9.67548 4.31034 7.59268 5.91833 5.98472C7.9084 3.99956 10.4796 3.02665 27.9863 3.81675C30.2709 3.91997 32.3585 4.38072 33.9705 5.98472C35.9605 7.96986 36.9476 10.5608 36.1436 28.0003C36.056 29.9359 35.7317 30.9861 35.459 31.6869C33.658 36.3023 29.5146 36.943 11.9025 36.1351ZM28.1793 9.37925C28.1793 10.6934 29.248 11.7621 30.5674 11.7621C31.8869 11.7621 32.9575 10.6934 32.9575 9.37925C32.9575 8.06509 31.8869 6.99741 30.5674 6.99741C29.248 6.99741 28.1793 8.06509 28.1793 9.37925ZM9.72533 19.9759C9.72533 25.6058 14.3005 30.1703 19.9444 30.1703C25.5882 30.1703 30.1634 25.6058 30.1634 19.9759C30.1634 14.346 25.5882 9.78452 19.9444 9.78452C14.3005 9.78452 9.72533 14.346 9.72533 19.9759ZM13.3115 19.9759C13.3115 16.3233 16.2807 13.3597 19.9444 13.3597C23.6081 13.3597 26.5773 16.3233 26.5773 19.9759C26.5773 23.6306 23.6081 26.5951 19.9444 26.5951C16.2807 26.5951 13.3115 23.6306 13.3115 19.9759Z"
                    fill="none"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      default: { duration: 3, ease: "easeInOut" },
                      fill: { duration: 0.6, delay: 2.5, ease: [1, 0, 0.8, 1] },
                    }}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_226_292">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_226_297)">
                <motion.path
                  d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                  fill="none"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 3, ease: "easeInOut" },
                    fill: { duration: 0.6, delay: 2.8, ease: [1, 0, 0.8, 1] },
                  }}
                />
                <path
                  d="M10.6414 19.0559V15.8617C10.6414 15.7445 10.6531 15.6723 10.8543 15.6723H13.5633C14.0367 15.6723 14.2969 16.0746 14.4863 16.8316L14.6402 17.4352H15.1016C15.1844 15.7199 15.2551 14.9742 15.2551 14.9742C15.2551 14.9742 14.0957 15.1043 13.4098 15.1043H9.94336L8.08594 15.0457V15.5426L8.71289 15.6598C9.15078 15.7426 9.25703 15.8371 9.29258 16.2395C9.29258 16.2395 9.32813 17.4223 9.32813 19.3746C9.32813 21.327 9.29258 22.4996 9.29258 22.4996C9.29258 22.8543 9.15039 22.9844 8.71289 23.0676L8.08594 23.1848V23.6812L9.94336 23.6223H13.043C13.741 23.6223 15.3617 23.6812 15.3617 23.6812C15.3973 23.2555 15.6352 21.327 15.6695 21.1145H15.2316L14.7703 22.1691C14.4035 22.9969 13.8719 23.0562 13.2797 23.0562H11.5168C10.9254 23.0562 10.6414 22.8195 10.6414 22.3109V19.6121C10.6414 19.6121 11.9305 19.6121 12.3805 19.6477C12.7117 19.6715 12.9129 19.7648 13.0195 20.2273L13.1617 20.8426H13.6695L13.6328 19.2926L13.7039 17.7301H13.1961L13.0305 18.416C12.9238 18.8656 12.8531 18.9484 12.3914 18.9957C11.8711 19.0551 10.6406 19.043 10.6406 19.043V19.0547L10.6414 19.0559ZM17.6562 16.1934C17.4906 16.927 17.325 17.4945 16.7453 17.873C16.3906 18.1094 16.0355 18.1922 15.8938 18.2043V18.6539H16.9484V22.2867C16.9484 23.3023 17.623 23.8012 18.5219 23.8012C19.2199 23.8012 19.9414 23.5055 20.1898 22.8902L19.9414 22.5707C19.8242 22.7719 19.4449 23.0676 18.9715 23.0676C18.4512 23.0676 18.1672 22.7125 18.1672 21.8137V18.6066L19.9184 18.7367L20.0129 17.932L18.1641 18.0031V16.2062L17.6562 16.1945V16.1934ZM21.3945 21.7793L20.9449 21.791C20.9684 22.0512 20.9805 22.3824 20.9805 22.6895C20.9805 23.009 20.9688 23.3047 20.9449 23.4465C20.9449 23.4465 21.8434 23.7773 22.7551 23.7773C23.9855 23.7773 24.9672 23.1859 24.9672 22.0266C24.9672 20.0395 21.9859 20.3352 21.9859 18.998C21.9859 18.4422 22.4828 18.2293 23.027 18.2293C23.4527 18.2293 23.8082 18.3832 23.8785 18.6082L24.1742 19.4953L24.6121 19.4719C24.6477 18.9984 24.6711 18.4562 24.7422 18.0168C24.3637 17.8512 23.5703 17.7562 23.0742 17.7562C21.9145 17.7562 20.9801 18.2641 20.9801 19.4008C20.9801 21.3762 23.8902 20.9742 23.8902 22.4293C23.8902 22.9496 23.5707 23.3164 22.8492 23.3164C22.1852 23.3164 21.8555 22.9734 21.7258 22.6301L21.3941 21.7785L21.3945 21.7793ZM28.5246 23.1465C27.8398 25.0605 27.0012 25.5551 26.2457 25.5551C25.9266 25.5551 25.7734 25.4133 25.7258 25.1895L25.5488 24.268L25.0527 24.2914C24.9582 24.8348 24.8637 25.4371 24.734 25.932C25.0293 26.1562 25.525 26.2746 25.9148 26.2746C26.7297 26.2746 27.9695 26.168 29.1031 23.4758L31.0043 18.9887C31.1578 18.6227 31.2168 18.5871 31.6656 18.4098L31.9141 18.3164V17.9031L30.7922 17.9621L29.5879 17.9031V18.3164L29.8949 18.4105C30.202 18.5051 30.3438 18.623 30.3438 18.8359C30.3438 18.9422 30.3082 19.0484 30.2488 19.2137C30.0719 19.6629 28.9734 22.3312 28.6785 22.898L28.9734 22.7914C28.4539 21.5043 27.6629 19.3539 27.5449 18.9895C27.5227 18.9287 27.5107 18.8647 27.5094 18.8C27.5094 18.6113 27.6391 18.4574 27.9227 18.3984L28.3133 18.316V17.9031L26.6953 17.9621L25.4082 17.9031V18.3164L25.6207 18.3871C25.916 18.4816 25.9867 18.5645 26.1641 18.9777C27.1437 21.2215 27.6047 22.4492 28.2301 24.0559L28.5258 23.1465H28.5246Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_226_297">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <motion.div
          className="relative w-[35%] h-[800px]"
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: [0, 1, 1], x: [-150, -150, 0] }}
          transition={{ duration: 2.6, ease: "easeInOut" }}
        >
          <Image
            priority
            fill
            src="/art/gazelle.png"
            className="object-contain"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, ease: "easeInOut" }}
      >
        <Image
          src="/down-arrow.svg"
          width="40"
          height="40"
          className="animate-bounce"
        />
      </motion.div>
    </Section>
  );
};

export default Hero;
