import React from "react";
import { UserButton, useUser, useClerk } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  Settings,
  CreditCard,
  Users,
  FileText,
  LogOut,
} from "lucide-react";

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  if (!user) return null;

  const recentActivity = [
    { id: 1, action: "Logged in", date: "2 hours ago" },
    { id: 2, action: "Updated profile", date: "Yesterday" },
    { id: 3, action: "Changed password", date: "3 days ago" },
  ];

  const quickActions = [
    { icon: <CreditCard className="w-6 h-6" />, label: "Billing" },
    { icon: <Users className="w-6 h-6" />, label: "Team" },
    { icon: <FileText className="w-6 h-6" />, label: "Documents" },
    { icon: <Settings className="w-6 h-6" />, label: "Settings" },
  ];

  const handleSignout = async () => {
    await signOut();
    navigate("/sign-in");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <UserButton afterSignOutUrl="/sign-in" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                {/* Left column */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                  {/* Welcome panel */}
                  <section aria-labelledby="profile-overview-title">
                    <div className="rounded-lg bg-white overflow-hidden shadow">
                      <h2 className="sr-only" id="profile-overview-title">
                        Profile Overview
                      </h2>
                      <div className="bg-white p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                          <div className="sm:flex sm:space-x-5">
                            <div className="flex-shrink-0">
                              <img
                                className="mx-auto h-20 w-20 rounded-full"
                                src={
                                  "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                                }
                                alt=""
                              />
                            </div>
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                              <p className="text-sm font-medium text-gray-600">
                                Welcome back,
                              </p>
                              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                                {user.firstName} {user.lastName}
                              </p>
                              <p className="text-sm font-medium text-gray-600">
                                {user.primaryEmailAddress?.emailAddress}
                              </p>
                            </div>
                          </div>
                          <div className="mt-5 flex justify-center sm:mt-0">
                            <Link
                              to={"/dashboard"}
                              className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Recent activity */}
                  <section aria-labelledby="recent-activity-title">
                    <div className="rounded-lg bg-white overflow-hidden shadow">
                      <div className="p-6">
                        <h2
                          className="text-base font-medium text-gray-900"
                          id="recent-activity-title"
                        >
                          Recent activity
                        </h2>
                        <div className="mt-6 flow-root">
                          <ul
                            role="list"
                            className="-my-5 divide-y divide-gray-200"
                          >
                            {recentActivity.map((item) => (
                              <li key={item.id} className="py-4">
                                <div className="flex items-center space-x-4">
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                      {item.action}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                      {item.date}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6">
                          <Link
                            to={"/dashboard"}
                            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View all
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right column */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Quick actions */}
                  <section aria-labelledby="quick-actions-title">
                    <div className="rounded-lg bg-white overflow-hidden shadow">
                      <div className="p-6">
                        <h2
                          className="text-base font-medium text-gray-900"
                          id="quick-actions-title"
                        >
                          Quick actions
                        </h2>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          {quickActions.map((action) => (
                            <Link
                              to={"/dashboard"}
                              className="col-span-1 flex justify-center items-center py-4 px-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                              {action.icon}
                              <span className="ml-2">{action.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Logout */}
                  <section aria-labelledby="logout-title">
                    <div className="rounded-lg bg-white overflow-hidden shadow">
                      <div className="p-6">
                        <h2 className="sr-only" id="logout-title">
                          Logout
                        </h2>
                        <div className="mt-6">
                          <button
                            onClick={handleSignout}
                            className="w-full flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            <LogOut className="w-5 h-5 mr-2" />
                            Sign out
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
