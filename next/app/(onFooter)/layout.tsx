import Footer from "./_components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-full pb-12">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
