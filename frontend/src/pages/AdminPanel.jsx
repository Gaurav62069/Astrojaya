import React, { useState } from 'react';
import { Users, Search, CheckCircle, XCircle, ShieldAlert, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  // DUMMY DATA (Jaisa aapne bola)
  const [users, setUsers] = useState([
    { id: 1, name: "Gaurav Kumar", email: "gaurav@example.com", status: "active", plan: "Premium" },
    { id: 2, name: "Amit Sharma", email: "amit@test.com", status: "expired", plan: "Basic" },
    { id: 3, name: "Priya Singh", email: "priya@astro.com", status: "active", plan: "Gold" },
    { id: 4, name: "Rahul Verma", email: "rahul@demo.com", status: "blocked", plan: "Free" },
    { id: 5, name: "Sita Devi", email: "sita@mail.com", status: "expired", plan: "Basic" },
  ]);

  const toggleStatus = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        const newStatus = user.status === "active" ? "expired" : "active";
        return { ...user, status: newStatus };
      }
      return user;
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen text-white pt-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-[Cinzel] text-white flex items-center gap-2">
              <ShieldAlert className="text-amber-500" /> Admin Dashboard
            </h1>
            <p className="text-gray-400">Manage users and subscription status</p>
          </div>
          <button onClick={handleLogout} className="px-4 py-2 bg-slate-800 hover:bg-red-500/20 text-red-400 rounded-lg border border-slate-700 transition-all flex items-center gap-2">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl">
            <h3 className="text-gray-400 text-sm">Total Users</h3>
            <p className="text-3xl font-bold text-white mt-2">{users.length}</p>
          </div>
          <div className="p-6 bg-green-900/10 border border-green-500/20 rounded-2xl">
            <h3 className="text-green-400 text-sm">Active Premium</h3>
            <p className="text-3xl font-bold text-green-400 mt-2">
              {users.filter(u => u.status === 'active').length}
            </p>
          </div>
          <div className="p-6 bg-red-900/10 border border-red-500/20 rounded-2xl">
            <h3 className="text-red-400 text-sm">Expired / Blocked</h3>
            <p className="text-3xl font-bold text-red-400 mt-2">
              {users.filter(u => u.status !== 'active').length}
            </p>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-950 text-gray-400 uppercase text-xs font-bold tracking-wider">
                <tr>
                  <th className="p-4">User</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Plan</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-white flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
                        {user.name[0]}
                      </div>
                      {user.name}
                    </td>
                    <td className="p-4 text-gray-400">{user.email}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-slate-800 rounded text-xs text-gray-300 border border-white/10">
                        {user.plan}
                      </span>
                    </td>
                    <td className="p-4">
                      {user.status === 'active' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                          <CheckCircle size={12} /> Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">
                          <XCircle size={12} /> Expired
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => toggleStatus(user.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          user.status === 'active' 
                            ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20' 
                            : 'bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20'
                        }`}
                      >
                        {user.status === 'active' ? 'Block Plan' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;