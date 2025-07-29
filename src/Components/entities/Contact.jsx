export function Contact({ name, phone, email }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-700">Phone: {phone}</p>
      <p className="text-gray-700">Email: {email}</p>
    </div>
  );
}
