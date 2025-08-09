import React from 'react';

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Admin Dashboard</h2>
                <p className="text-gray-600">
                    Select an option from the sidebar to get started with managing your application.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center">
                        <span className="text-2xl mr-3">📊</span>
                        <div>
                            <h3 className="text-lg font-semibold text-blue-900">Dashboard</h3>
                            <p className="text-blue-700 text-sm">View analytics and reports</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center">
                        <span className="text-2xl mr-3">🎟️</span>
                        <div>
                            <h3 className="text-lg font-semibold text-green-900">Raffles</h3>
                            <p className="text-green-700 text-sm">Manage existing raffles</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-center">
                        <span className="text-2xl mr-3">➕</span>
                        <div>
                            <h3 className="text-lg font-semibold text-purple-900">Create Raffles</h3>
                            <p className="text-purple-700 text-sm">Add new raffles</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-center">
                        <span className="text-2xl mr-3">👥</span>
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-900">Users</h3>
                            <p className="text-yellow-700 text-sm">Manage user accounts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
