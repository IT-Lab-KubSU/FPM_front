export const NewsControlBtn = ({right, onClick}: { right?: boolean, onClick: any }) => {
    return (<button
        className={`h-16 w-16 p-4 rounded-[50%] bg-[#5C83E7] z-10 hover:bg-[#4d72e5] hover:scale-110 duration-300 flex justify-center items-center ${right ? "" : "rotate-180"}`}
        onClick={onClick}
    >
        <svg width="43" height="20" viewBox="0 0 43 20" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M41.2927 9.23833C41.795 9.7407 41.795 10.5552 41.2927 11.0576L33.1061 19.2441C32.6038 19.7465 31.7893 19.7465 31.2869 19.2441C30.7845 18.7417 30.7845 17.9272 31.2869 17.4249L38.5638 10.1479L31.2869 2.87103C30.7845 2.36867 30.7845 1.55417 31.2869 1.0518C31.7893 0.549437 32.6038 0.549437 33.1061 1.0518L41.2927 9.23833ZM0.0761719 8.86156L40.383 8.86156V11.4343L0.0761719 11.4343L0.0761719 8.86156Z"/>
        </svg>
    </button>)
}