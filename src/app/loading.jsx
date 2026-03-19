import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        
        {/* Logo */}
        <div className="animate-pulse">
          <Image
            src="/assets/logo.png" 
            alt="Logo"
            width={80}
            height={80}
            priority
          />
        </div>

        {/* Spinner */}
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-500 text-sm">Loading, please wait...</p>
      </div>
    </div>
  );
}