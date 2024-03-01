import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
import { hours } from '@/data';

export default function CreateForm( { onCreate } ) {
    
    const { user } = useAuth();
    const { createResource } = useResource();

    function handleSubmit(event) {
        event.preventDefault();
        const info = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.minimum.value),
            maximum_customers_per_hour: parseInt(event.target.maximum.value),
            average_cookies_per_sale: parseFloat(event.target.average.value),
            owner: user.id,
        };
        createResource(info);
        event.target.reset();
    }
  
    return (
      <form onSubmit={ handleSubmit } className="w-full max-w-lg p-2 mx-auto my-4 text-sm bg-green-300 rounded-lg">
        <div className="flex flex-wrap items-center mb-6 -mx-3">
          <label className="w-1/4 px-3 text-xs text-center text-black" htmlFor="location">
            Location
          </label>
          <div className="w-3/4 px-3">
            <input type="text" className="w-full" name="location" />
          </div>
        </div>
        <div className="flex items-center mb-6 -mx-3">
          <div className="flex-1 px-3 mx-2 bg-green-200">
            <div className="mb-6">
              <label className="block mb-2 text-xs text-center text-black" htmlFor="minimum">
                Minimum Customers per Hour
              </label>
              <input type="number" className="w-full" name="minimum" />
            </div>
          </div>
          <div className="flex-1 px-3 mx-2 bg-green-200">
            <div className="mb-6">
              <label className="block mb-2 text-xs text-center text-black" htmlFor="maximum">
                Maximum Customers per Hour
              </label>
              <input type="number" className="w-full" name="maximum" />
            </div>
          </div>
          <div className="flex-1 px-3 mx-2 bg-green-200">
            <div className="mb-6">
              <label className="block mb-2 text-xs text-center text-black" htmlFor="average">
                Average Cookies per Sale
              </label>
              <input type="number" className="w-full" name="average" step="0.1"/>
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