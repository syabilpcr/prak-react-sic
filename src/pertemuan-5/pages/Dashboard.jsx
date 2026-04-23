import PageHeader from "../components/PageHeader";
import StatsWidget from "../components/StatsWidget";

const Dashboard = () => {
  return (
    // Menggunakan bg-gray-50 agar StatsWidget yang berwarna putih lebih menonjol (kontras)
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 transition-all duration-500">
      
      {/* Container utama untuk menjaga kerapian layout */}
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section dengan margin bottom yang lebih lega */}
        <div className="mb-10">
          <PageHeader 
            title="Dashboard" 
            subtitle="Selamat datang kembali!" 
          />
        </div>

        {/* Stats Section dengan efek hover lembut pada area widget */}
        <div className="relative rounded-3xl transition-transform duration-300 hover:scale-[1.01]">
          <StatsWidget />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;