import React from "react";
import { motion } from "framer-motion";

import Heading2 from "../atoms/typography/Heading2";

const HeroText = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      width: "fit-content",
    },
  };

  return (
    <div className="w-fit">
      <motion.div
        className="flex w-full items-baseline"
        initial={{ translateY: -40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 6.5, duration: 0.8, type: "tween" }}
      >
        <Heading2>HELLO</Heading2>
        <span className="w-full h-0.5 bg-white ml-5" />
      </motion.div>
      <div className="relative flex gap-2 sm:gap-5 justify-center items-center z-[70] h-fit my-6 lg:my-10">
        <div className="relative flex items-baseline w-fit">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1.4rem] md:w-[2.3rem] lg:w-[3.1rem] xl:w-[3.8rem] mr-0.5 md:mr-1"
          >
            <motion.path
              className="item"
              d="M40.448 92.28C33.1947 92.28 26.0267 90.9573 18.944 88.312C11.8613 85.6667 5.54667 81.9973 0 77.304L12.288 61.304C17.7493 65.7413 22.784 68.9413 27.392 70.904C32 72.7813 36.9067 73.72 42.112 73.72C45.5253 73.72 48.4267 73.3787 50.816 72.696C53.2053 72.0133 55.04 71.032 56.32 69.752C57.6 68.3867 58.24 66.808 58.24 65.016C58.24 62.5413 57.3013 60.6213 55.424 59.256C53.5467 57.8907 50.3467 56.824 45.824 56.056L26.112 52.6C18.8587 51.32 13.2693 48.5467 9.344 44.28C5.41867 40.0133 3.456 34.5947 3.456 28.024C3.456 22.2213 4.90667 17.2293 7.808 13.048C10.7947 8.86666 15.0187 5.66666 20.48 3.448C26.0267 1.22933 32.5973 0.119995 40.192 0.119995C46.848 0.119995 53.5467 1.272 60.288 3.576C67.0293 5.79467 72.8747 8.90933 77.824 12.92L66.176 29.176C56.96 22.0933 47.7867 18.552 38.656 18.552C35.6693 18.552 33.0667 18.8933 30.848 19.576C28.7147 20.1733 27.0507 21.0693 25.856 22.264C24.7467 23.3733 24.192 24.7387 24.192 26.36C24.192 28.5787 25.0027 30.2853 26.624 31.48C28.3307 32.6747 31.0613 33.6133 34.816 34.296L53.376 37.368C61.9947 38.7333 68.5227 41.592 72.96 45.944C77.4827 50.296 79.744 55.928 79.744 62.84C79.744 68.8987 78.1653 74.1467 75.008 78.584C71.8507 82.936 67.328 86.3067 61.44 88.696C55.552 91.0853 48.5547 92.28 40.448 92.28Z"
              fill="white"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 1, delay: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </svg>
          <motion.div
            variants={text}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              delay: 3,
              ease: "easeInOut",
              opacity: { delay: 5, duration: 1 },
            }}
          >
            <svg
              width="100%"
              height="100%"
              className="w-[5.6rem] md:w-[9.2rem] lg:w-[12.4rem] xl:w-[15.2rem]"
              viewBox="0 0 318 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="item"
                d="M48.096 93.408C41.3547 93.408 35.0827 92.256 29.28 89.952C23.4773 87.5627 18.4 84.2773 14.048 80.096C9.696 75.8293 6.28267 70.9227 3.808 65.376C1.41867 59.744 0.224 53.6853 0.224 47.2C0.224 40.7147 1.41867 34.6987 3.808 29.152C6.28267 23.52 9.696 18.6133 14.048 14.432C18.4 10.1653 23.4773 6.88 29.28 4.576C35.0827 2.18666 41.3547 0.991997 48.096 0.991997C54.8373 0.991997 61.1093 2.18666 66.912 4.576C72.7147 6.88 77.792 10.1653 82.144 14.432C86.496 18.6133 89.8667 23.52 92.256 29.152C94.7307 34.6987 95.968 40.7147 95.968 47.2C95.968 53.6853 94.7307 59.744 92.256 65.376C89.8667 70.9227 86.496 75.8293 82.144 80.096C77.792 84.2773 72.7147 87.5627 66.912 89.952C61.1093 92.256 54.8373 93.408 48.096 93.408ZM48.096 73.184C51.68 73.184 55.008 72.544 58.08 71.264C61.152 69.8987 63.7973 68.064 66.016 65.76C68.32 63.456 70.112 60.7253 71.392 57.568C72.672 54.3253 73.312 50.8693 73.312 47.2C73.312 43.4453 72.672 39.9893 71.392 36.832C70.112 33.6747 68.32 30.944 66.016 28.64C63.7973 26.336 61.152 24.544 58.08 23.264C55.008 21.8987 51.68 21.216 48.096 21.216C44.512 21.216 41.184 21.8987 38.112 23.264C35.04 24.544 32.352 26.336 30.048 28.64C27.8293 30.944 26.08 33.6747 24.8 36.832C23.52 39.9893 22.88 43.4453 22.88 47.2C22.88 50.8693 23.52 54.3253 24.8 57.568C26.08 60.7253 27.8293 63.456 30.048 65.76C32.352 68.064 35.04 69.8987 38.112 71.264C41.184 72.544 44.512 73.184 48.096 73.184ZM107.674 92V2.39999H178.842V21.472H129.69V38.24H162.458V56.672H129.69V92H107.674ZM191.174 92V2.39999H213.19V92H191.174ZM219.729 92L256.465 2.39999H281.681L317.905 92H294.097L285.905 70.368H250.961L242.641 92H219.729ZM257.617 52.832H279.377L268.625 24.16L257.617 52.832Z"
                fill="white"
              />
            </svg>
          </motion.div>
        </div>
        <div className="relative flex sm:items-center w-content">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1.4rem] md:w-[2.2rem] lg:w-[3.1rem] xl:w-[3.8rem] mr-[1px] sm:mr-0.5 lg:mr-1"
          >
            <motion.path
              className="item"
              d="M37.808 91.28C28.336 91.28 20.3573 88.9333 13.872 84.24C7.472 79.4613 2.90667 72.592 0.176 63.632L20.528 56.08C22.2347 61.2853 24.496 65.1253 27.312 67.6C30.128 70.0747 33.6693 71.312 37.936 71.312C42.7147 71.312 46.5973 69.7333 49.584 66.576C52.5707 63.4187 54.064 59.28 54.064 54.16V0.399994H76.08V54.8C76.08 62.0533 74.4587 68.4107 71.216 73.872C68.0587 79.3333 63.6213 83.6 57.904 86.672C52.1867 89.744 45.488 91.28 37.808 91.28Z"
              fill="white"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 1, delay: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </svg>
          <motion.div
            variants={text}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              delay: 3,
              ease: "easeInOut",
              opacity: { delay: 5, duration: 1 },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 653 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="!hidden sm:!block w-[11.3rem] md:w-[17.8rem] lg:w-[25rem] xl:w-[30.4rem]"
            >
              <path
                className="item"
                d="M48.096 93.408C41.3547 93.408 35.0827 92.256 29.28 89.952C23.4773 87.5627 18.4 84.2773 14.048 80.096C9.696 75.8293 6.28267 70.9227 3.808 65.376C1.41867 59.744 0.224 53.6853 0.224 47.2C0.224 40.7147 1.41867 34.6987 3.808 29.152C6.28267 23.52 9.696 18.6133 14.048 14.432C18.4 10.1653 23.4773 6.88 29.28 4.576C35.0827 2.18666 41.3547 0.991997 48.096 0.991997C54.8373 0.991997 61.1093 2.18666 66.912 4.576C72.7147 6.88 77.792 10.1653 82.144 14.432C86.496 18.6133 89.8667 23.52 92.256 29.152C94.7307 34.6987 95.968 40.7147 95.968 47.2C95.968 53.6853 94.7307 59.744 92.256 65.376C89.8667 70.9227 86.496 75.8293 82.144 80.096C77.792 84.2773 72.7147 87.5627 66.912 89.952C61.1093 92.256 54.8373 93.408 48.096 93.408ZM48.096 73.184C51.68 73.184 55.008 72.544 58.08 71.264C61.152 69.8987 63.7973 68.064 66.016 65.76C68.32 63.456 70.112 60.7253 71.392 57.568C72.672 54.3253 73.312 50.8693 73.312 47.2C73.312 43.4453 72.672 39.9893 71.392 36.832C70.112 33.6747 68.32 30.944 66.016 28.64C63.7973 26.336 61.152 24.544 58.08 23.264C55.008 21.8987 51.68 21.216 48.096 21.216C44.512 21.216 41.184 21.8987 38.112 23.264C35.04 24.544 32.352 26.336 30.048 28.64C27.8293 30.944 26.08 33.6747 24.8 36.832C23.52 39.9893 22.88 43.4453 22.88 47.2C22.88 50.8693 23.52 54.3253 24.8 57.568C26.08 60.7253 27.8293 63.456 30.048 65.76C32.352 68.064 35.04 69.8987 38.112 71.264C41.184 72.544 44.512 73.184 48.096 73.184ZM107.674 92V2.39999H129.69V36.832H166.554V2.39999H188.57V92H166.554V56.928H129.69V92H107.674ZM203.424 92V2.39999H224.16L264.864 54.368V2.39999H285.6V92H266.144L224.16 37.984V92H203.424ZM333.448 93.28C326.195 93.28 319.027 91.9573 311.944 89.312C304.861 86.6667 298.547 82.9973 293 78.304L305.288 62.304C310.749 66.7413 315.784 69.9413 320.392 71.904C325 73.7813 329.907 74.72 335.112 74.72C338.525 74.72 341.427 74.3787 343.816 73.696C346.205 73.0133 348.04 72.032 349.32 70.752C350.6 69.3867 351.24 67.808 351.24 66.016C351.24 63.5413 350.301 61.6213 348.424 60.256C346.547 58.8907 343.347 57.824 338.824 57.056L319.112 53.6C311.859 52.32 306.269 49.5467 302.344 45.28C298.419 41.0133 296.456 35.5947 296.456 29.024C296.456 23.2213 297.907 18.2293 300.808 14.048C303.795 9.86666 308.019 6.66666 313.48 4.448C319.027 2.22933 325.597 1.12 333.192 1.12C339.848 1.12 346.547 2.272 353.288 4.576C360.029 6.79467 365.875 9.90933 370.824 13.92L359.176 30.176C349.96 23.0933 340.787 19.552 331.656 19.552C328.669 19.552 326.067 19.8933 323.848 20.576C321.715 21.1733 320.051 22.0693 318.856 23.264C317.747 24.3733 317.192 25.7387 317.192 27.36C317.192 29.5787 318.003 31.2853 319.624 32.48C321.331 33.6747 324.061 34.6133 327.816 35.296L346.376 38.368C354.995 39.7333 361.523 42.592 365.96 46.944C370.483 51.296 372.744 56.928 372.744 63.84C372.744 69.8987 371.165 75.1467 368.008 79.584C364.851 83.936 360.328 87.3067 354.44 89.696C348.552 92.0853 341.555 93.28 333.448 93.28ZM417.073 93.28C409.82 93.28 402.652 91.9573 395.569 89.312C388.486 86.6667 382.172 82.9973 376.625 78.304L388.913 62.304C394.374 66.7413 399.409 69.9413 404.017 71.904C408.625 73.7813 413.532 74.72 418.737 74.72C422.15 74.72 425.052 74.3787 427.441 73.696C429.83 73.0133 431.665 72.032 432.945 70.752C434.225 69.3867 434.865 67.808 434.865 66.016C434.865 63.5413 433.926 61.6213 432.049 60.256C430.172 58.8907 426.972 57.824 422.449 57.056L402.737 53.6C395.484 52.32 389.894 49.5467 385.969 45.28C382.044 41.0133 380.081 35.5947 380.081 29.024C380.081 23.2213 381.532 18.2293 384.433 14.048C387.42 9.86666 391.644 6.66666 397.105 4.448C402.652 2.22933 409.222 1.12 416.817 1.12C423.473 1.12 430.172 2.272 436.913 4.576C443.654 6.79467 449.5 9.90933 454.449 13.92L442.801 30.176C433.585 23.0933 424.412 19.552 415.281 19.552C412.294 19.552 409.692 19.8933 407.473 20.576C405.34 21.1733 403.676 22.0693 402.481 23.264C401.372 24.3733 400.817 25.7387 400.817 27.36C400.817 29.5787 401.628 31.2853 403.249 32.48C404.956 33.6747 407.686 34.6133 411.441 35.296L430.001 38.368C438.62 39.7333 445.148 42.592 449.585 46.944C454.108 51.296 456.369 56.928 456.369 63.84C456.369 69.8987 454.79 75.1467 451.633 79.584C448.476 83.936 443.953 87.3067 438.065 89.696C432.177 92.0853 425.18 93.28 417.073 93.28ZM511.096 93.408C504.355 93.408 498.083 92.256 492.28 89.952C486.477 87.5627 481.4 84.2773 477.048 80.096C472.696 75.8293 469.283 70.9227 466.808 65.376C464.419 59.744 463.224 53.6853 463.224 47.2C463.224 40.7147 464.419 34.6987 466.808 29.152C469.283 23.52 472.696 18.6133 477.048 14.432C481.4 10.1653 486.477 6.88 492.28 4.576C498.083 2.18666 504.355 0.991997 511.096 0.991997C517.837 0.991997 524.109 2.18666 529.912 4.576C535.715 6.88 540.792 10.1653 545.144 14.432C549.496 18.6133 552.867 23.52 555.256 29.152C557.731 34.6987 558.968 40.7147 558.968 47.2C558.968 53.6853 557.731 59.744 555.256 65.376C552.867 70.9227 549.496 75.8293 545.144 80.096C540.792 84.2773 535.715 87.5627 529.912 89.952C524.109 92.256 517.837 93.408 511.096 93.408ZM511.096 73.184C514.68 73.184 518.008 72.544 521.08 71.264C524.152 69.8987 526.797 68.064 529.016 65.76C531.32 63.456 533.112 60.7253 534.392 57.568C535.672 54.3253 536.312 50.8693 536.312 47.2C536.312 43.4453 535.672 39.9893 534.392 36.832C533.112 33.6747 531.32 30.944 529.016 28.64C526.797 26.336 524.152 24.544 521.08 23.264C518.008 21.8987 514.68 21.216 511.096 21.216C507.512 21.216 504.184 21.8987 501.112 23.264C498.04 24.544 495.352 26.336 493.048 28.64C490.829 30.944 489.08 33.6747 487.8 36.832C486.52 39.9893 485.88 43.4453 485.88 47.2C485.88 50.8693 486.52 54.3253 487.8 57.568C489.08 60.7253 490.829 63.456 493.048 65.76C495.352 68.064 498.04 69.8987 501.112 71.264C504.184 72.544 507.512 73.184 511.096 73.184ZM570.674 92V2.39999H591.41L632.114 54.368V2.39999H652.85V92H633.394L591.41 37.984V92H570.674Z"
                fill="white"
              />
            </svg>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={text}
            transition={{
              duration: 2,
              delay: 3,
              ease: "easeInOut",
              opacity: { delay: 5, duration: 1 },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative top-[8px] sm:!hidden w-[0.5rem]"
            >
              <path
                d="M12 24.408C8.75733 24.408 5.94133 23.256 3.552 20.952C1.248 18.5627 0.0960002 15.7467 0.0960002 12.504C0.0960002 9.26133 1.248 6.488 3.552 4.184C5.94133 1.79467 8.75733 0.599998 12 0.599998C15.2427 0.599998 18.016 1.79467 20.32 4.184C22.7093 6.488 23.904 9.26133 23.904 12.504C23.904 15.7467 22.7093 18.5627 20.32 20.952C18.016 23.256 15.2427 24.408 12 24.408Z"
                fill="white"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="text-right"
        initial={{ translateY: 40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 6.5, duration: 0.8, type: "tween" }}
      >
        <Heading2>FULL STACK DEVELOPER</Heading2>
      </motion.div>
    </div>
  );
};

export default HeroText;
