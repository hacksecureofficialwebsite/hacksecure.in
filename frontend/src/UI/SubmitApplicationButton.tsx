export default function SubmitApplicationButton() {
  return (
    <button className="group flex items-center gap-0 px-6 py-3 rounded-full text-[#f9f9f9] font-bricolage-light bg-gradient-to-br p-2 from-[#3D56B2] to-[#5C7AEA]/80 hover:ring-[#3D56B2]/30 hover:ring-4  transition-all duration-300 ease-in-out hover:gap-2 cursor-pointer">
      Submit Application
      <span className="transition-all font-semibold duration-300 group-hover:translate-x-1 group-hover:opacity-100 opacity-0 h-3 w-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="100%"
          width="100%"
          viewBox="0 0 512 512"
        >
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </span>
    </button>
  );
}
