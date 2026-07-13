const LoadingSpinner = () => {

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-50">

            <div className="flex flex-col items-center">

                <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

                <h2 className="mt-6 text-xl font-semibold text-slate-700">

                    Loading...

                </h2>

                <p className="text-slate-500 mt-2">

                    Please wait a moment

                </p>

            </div>

        </div>

    );

};

export default LoadingSpinner;