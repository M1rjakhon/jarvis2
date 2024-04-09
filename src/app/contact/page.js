import LinkButton from "@/components/LinkButton";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-5xl font-bold text-center my-8">Contact Us</h1>
      
      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" id="message" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Message</button>
      </form>

      <div className="mt-8">
        <LinkButton name="Back to Home" route="/" />
      </div>
    </div>
  );
}
