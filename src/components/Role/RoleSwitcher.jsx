import { useApp } from "../../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useApp();

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          💰 Finance Dashboard
        </h1>
        <p className="text-gray-500 text-sm">
          Track your money smartly
        </p>
      </div>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-white px-4 py-2 rounded-xl shadow-md border"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;