const UnsupportedDevice = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center p-6">
            <div className="text-4xl mb-6">🤌🏻❌</div>
            <h1 className="text-3xl font-bold text-red-600">Device Not Supported</h1>
            <p className="text-gray-700 mt-4 max-w-md">
                Sorry, this website is only accessible on a desktop (Windows or macOS).  
                Please visit from a larger screen for the best experience.
            </p>
        </div>
    );
};

export default UnsupportedDevice;
