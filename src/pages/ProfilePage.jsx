import PageHeader from "../components/PageHeader";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Edit,
  Camera,
} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Profile"
        breadcrumb={["Home", "Profile", "My Profile"]}
      >
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all duration-300 text-sm">
          Edit Profile
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src="https://x.com/prabowo"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-green-100"
              />

              <button className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all">
                <Camera size={18} />
              </button>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Syabil
            </h2>

            <p className="text-gray-400 text-sm">
              Owner / Administrator
            </p>

            <div className="mt-4 px-4 py-2 rounded-xl bg-green-50 text-green-600 font-medium text-sm">
              Active Account
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">
                syabil@email.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">
                +62 812 3456 7890
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">
                Pekanbaru, Riau
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">
                Joined 12 Jan 2024
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="xl:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Personal Information
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Informasi detail akun dan profil pengguna
              </p>
            </div>

            <button className="flex items-center gap-2 border border-green-200 text-green-600 px-4 py-2 rounded-xl hover:bg-green-50 transition-all">
              <Edit size={16} />
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-400">
                Full Name
              </label>
              <div className="mt-2 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium">
                Syabil
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Username
              </label>
              <div className="mt-2 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium">
                @syabiladmin
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Email Address
              </label>
              <div className="mt-2 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium">
                syabil@email.com
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Phone Number
              </label>
              <div className="mt-2 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium">
                +62 812 3456 7890
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Position
              </label>
              <div className="mt-2 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium flex items-center gap-2">
                <Briefcase
                  size={16}
                  className="text-green-500"
                />
                Owner
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Address
              </label>
              <div className="mt-2 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium">
                Politeknik Caltex Riau, Rumbai, Pekanbaru
              </div>
            </div>
          </div>

          {/* ACTIVITY SUMMARY */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Activity Summary
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Total Orders
                </p>
                <h4 className="text-2xl font-bold text-gray-800 mt-2">
                  152
                </h4>
              </div>

              <div className="bg-purple-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Customers
                </p>
                <h4 className="text-2xl font-bold text-gray-800 mt-2">
                  89
                </h4>
              </div>

              <div className="bg-green-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Revenue
                </p>
                <h4 className="text-2xl font-bold text-gray-800 mt-2">
                  Rp 17.300.000
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;