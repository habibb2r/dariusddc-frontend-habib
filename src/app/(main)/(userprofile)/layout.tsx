import UserProfileSidebar from "./_components/UserProfileSidebar";

const UserProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="md:w-72  ">
        <UserProfileSidebar />
      </div>

      {/* Main Content */}
      <div className="md:flex-1 md:p-2">{children} </div>
    </div>
  );
};

export default UserProfileLayout;
