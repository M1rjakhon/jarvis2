import LinkButton from "@/components/LinkButton";

export default function Donate() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-5xl font-bold text-center my-8">Donate Now</h1>
      
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Donation Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Select
              </th>
            </tr>
          </thead>
          <tbody>
            {[5, 10, 50, 250].map((amount, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                  ${amount}
                </td>
                <td className="py-4 px-6">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Donate ${amount}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <LinkButton name="Back to Home" route="/" />
      </div>
    </div>
  );
}
