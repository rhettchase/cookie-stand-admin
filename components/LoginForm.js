
export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-green-50">
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
            <fieldset className="px-8 pt-6 pb-8 mb-4 bg-green-100 rounded shadow-md" autoComplete='off'>
                <legend className="mb-4 font-bold text-center">Log In</legend>
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-2 text-sm font-bold text-gray-700">Username</label>
                    <input name="username" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Password</label>
                    <input type="password" name="password" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex items-center justify-center">
                    <button className="px-4 py-2 font-bold text-white bg-green-400 rounded hover:bg-green-500 focus:outline-none focus:shadow-outline" type="submit">
                        Log In
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
    );
}