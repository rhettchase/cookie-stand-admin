export default function StandForm( { onSubmit } ) {
    return (
      <form onSubmit={ onSubmit } className="w-full max-w-lg p-2 mx-auto my-4 text-sm bg-green-300 rounded-lg">
        <div className="flex flex-wrap items-center mb-6 -mx-3">
          <label className="w-1/4 px-3 text-xs text-center text-black" htmlFor="location">
            Location
          </label>
          <div className="w-3/4 px-3">
            <input type="text" className="w-full" name="location" />
          </div>
        </div>
        <div className="flex items-center mb-6 -mx-3">
          <div className="flex-1 px-3">
            <div className="mb-6">
              <label className="block mb-2 text-xs text-center text-black" htmlFor="min_customers">
                Minimum Customers per Hour
              </label>
              <input type="number" className="w-full" name="min_customers" />
            </div>
          </div>
          <div className="flex-1 px-3">
            <div className="mb-6">
              <label className="block mb-2 text-xs text-center text-black" htmlFor="max_customers">
                Maximum Customers per Hour
              </label>
              <input type="number" className="w-full" name="max_customers" />
            </div>
          </div>
          <div className="flex-1 px-3">
            <div className="mb-6">
              <label className="block mb-2 text-xs text-center text-black" htmlFor="avg_cookies">
                Average Cookies per Sale
              </label>
              <input type="number" className="w-full" name="avg_cookies" step="0.1"/>
            </div>
          </div>
          <div className="px-3">
            <button className="h-full px-4 py-2 font-bold text-black bg-green-600 rounded">
              Create
            </button>
          </div>
        </div>
      </form>
    );
  }